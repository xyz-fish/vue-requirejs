# vue + reqirejs 
* ps:没用webpack

###[基于vue + vue-router + requirejs的模块化开发demo](https://github.com/SirSong/vue-requirejs)

## 前言
VUE现在一般通过vue-cli或ssr的开发。如果按照传统的HTML + CSS + JS的多人开发而不用webpack，vue官网的教程就行不通了。于是基于requirejs和webpack按需加载的方式整理出来一套东西。\<br>
PS:身为前端自然通过nodejs启动的服务

--- 
用的到的朋友可以star下，欢迎留言交流

>vue requirejs vue-router node 

## 目录结构介绍
Tips: 很久之前整理的，目录结构不太符合要求，大家可自行更改
>|--component                            // 公用组件
>|--data                                 // 本地数据
>|--js                                   // 公用js
>|--routers                              // vue组件js,相当于.vue的script部分
>|--style                                // 公共 css
>|--template                             // vue组件的html,相当于.template部分
>>-- index.html                            
>>-- main.js                             // 入口
>>-- start.js                            // 本地服务
