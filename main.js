
    require.config({
        baseUrl: './',
        paths: {
            "text":"node_modules/requirejs-text/text",
            "css":"node_modules/require-css/css",
            "vue":"node_modules/vue/dist/vue.min",
            "vueRouter":"node_modules/vue-router/dist/vue-router.min",
            "jquery":"node_modules/jquery/dist/jquery.min",
            "echarts" : 'node_modules/echarts/dist/echarts.min',
            'webpackjsonp': 'js/webpackjsonp',
            'eBoxComp' : 'component/echartsbox/index'
        },
        shim: {
            "vue-router":["vue"],
        }
    });

    requirejs(
        [
            "vue",
            "vueRouter",
            "webpackjsonp",
            "text!template/app.html",
            "css!style/main.css",
            "eBoxComp"
        ],
        function(
            Vue,
            VueRouter,
            webpack_require,
            app,
            mainCss,
            eBoxComp
        ) {
            Vue.component('test',{
                template : '<div><slot>more</slot><slot name="t"></slot></div>'
            })
            var menu = [
                {
                    name : '主视图',
                    path : '/path1'
                },{
                    name : '三核六',
                    path : '/path2'
                },{
                    name : '业务概况',
                    path : '/path3'
                },{
                    name : '部门试图',
                    path : '/path4'
                },{
                    name : '仓储试图',
                    path : '/path5'
                },{
                    name : '资金需求',
                    path : '/path6'
                },{
                    name : '风险试图',
                    path : '/path7'
                },{
                    name : '企业族谱',
                    path : '/path8'
                }
            ];
            Vue.use(VueRouter);
            var router = new VueRouter({
                linkActiveClass: 'is-active',
                routes: [{
                        path: '/',
                        redirect : '/path1'
                    },{
                        path: '/path1',
                        component: function(resolve) {
                            webpack_require('routes/component1.js', resolve);
                        }
                    },{
                        path: '/path2',
                        component: function(resolve) {
                            webpack_require('routes/component2.js', resolve);
                        }
                    },
                ]
            });
            var app = new Vue({
                el: '#app',
                router: router,
                template : app,
                data : function(){
                    return {
                        menu : menu
                    }
                }
            });
        }
    );