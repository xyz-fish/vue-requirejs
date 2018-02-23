
define(['vue','text!component/echartsbox/echartsbox.html'],function(Vue,eBoxTpl){
    var $eBoxComp = Vue.component('e-box',{
        template : eBoxTpl,
        data : function(){
            return {
                msg : '9999'
            };
        },
        props : ['prop1'],
        created : function(){
            console.log(this)
        }
    });
    return $eBoxComp;
})