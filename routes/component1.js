
requirejs(['text!template/component1.html'],function(html){
    webpackJsonpCallback('routes/component1.js', function() {
        return {
            template : html,
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
            }
        }
    });
})