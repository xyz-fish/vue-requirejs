const PORT = 8888; //访问端口号8888  //端口号最好为6000以上
var http = require('http'); //引入http模块
var fs = require('fs'); //引入fs模块
var url = require('url');//引入url模块
var path = require('path');//引入path模块
var httpProxy = require('http-proxy'); // 引入代理 http-proxy 模块


var MIME_TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};


var proxy = httpProxy.createProxyServer({
    target: 'http://10.38.8.76:9000/'
})
proxy.on('error', function(err, req, res){
    res.writeHead(500, {
        'content-type': 'text/plain'
    });
    res.end('wrong');
});

// req : 从浏览器带来的请求信息
// res : 从服务器返回给浏览器的信息
var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    //url.parse()方法将一个URL字符串转换成对象并返回，通过pathname来访问此url的地址。

    //阻止请求favicon.ico
    if(pathname == "/favicon.ico"){
        res.end();
     };
    if(pathname === '/'){
        pathname += "index.html";
    };

    var realPath = path.join(__dirname,pathname);
    //完整的url路径
    // 异常处理
    proxy.on('error', function (err, req, res) {
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        })

        res.end('Something went wrong.')
    })
    //判断如果是接口访问，则通过proxy转发
    if (/\/api\/.*$/.test(req.url)) {
        proxy.web(req, res);
        return;
    }

    // 读取本地静态资源
    fs.exists(realPath,function(err){
        if(!err){
            res.end();
        }else {
            var ext = path.extname(realPath);
            // 判断类型
            ext = ext ? ext.slice(1) : 'unknown';
            var contentType = MIME_TYPE[ext] || "text/plain";
            fs.readFile(realPath, function (err, data) {
                /*
                realPath为文件路径
                第二个参数为回调函数
                  回调函数的一参为读取错误返回的信息，返回空就没有错误
                  二参为读取成功返回的文本内容
                */
                if (err) {
                    //未找到文件
                    res.writeHead(404, {
                        'content-type': 'text/plain'
                    });
                    res.write('404,page not found!');
                    res.end();
                } else {
                    //成功读取文件
                    res.writeHead(200, {
                        'content-type': contentType
                    });
                    res.write(data);
                    res.end();
                }
            })
        }
    })
});

server.listen(PORT); //监听端口
console.log('服务成功开启')