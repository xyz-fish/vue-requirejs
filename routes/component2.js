
requirejs([
    'text!template/component2.html',
    'component/echartstest/index',
    'component/comp2/index'
],function(
    html,
    comp,
    comp2
){
    console.log(comp)
    webpackJsonpCallback('routes/component2.js', function() {
        return {
            template : html,
            components : {
                'comp' : comp,
                'comp2' : comp2
            },
            data :function(){
                return {
                    msg : 'ttt',
                    eData : [
                        {
                            type : '类型1',
                            isC : true,
                            value : '50%'
                        },{
                            type : '类型2',
                            isC : false,
                            value : '50%'
                        },{
                            type : '类型3',
                            isC : true,
                            value : '60%'
                        },{
                            type : '类型4',
                            isC : true,
                            value : '10%'
                        },{
                            type : '类型1',
                            isC : false,
                            value : '5%'
                        }
                    ]
                }
            },
            methods : {
                methodT : function(){
                    console.log("测试方法");
                    $.ajax({
                        url : '/api/v1/login',
                        type: "post",
                        dataType: "json",
                        headers: {'Content-Type': 'application/json;charset=UTF-8'},
                        data : JSON.stringify({username:"admin@haipingx.com",password:"111qqq"}),
                        success : function(){
                            console.log(666)
                        },
                        error : function(){
                            console.log(7777)
                        }
                    })
                },
            }
        }
    });
})
