# vue + reqirejs 
* ps:没用webpack

[基于vue + vue-router + requirejs的模块化开发demo](https://github.com/SirSong/vue-requirejs)

## 前言
VUE现在一般通过vue-cli或ssr的开发。如果按照传统的HTML + CSS + JS的多人开发而不用webpack，vue官网的教程就行不通了。于是基于requirejs和webpack按需加载的方式整理出来一套东西。\<br>
PS:身为前端自然通过nodejs启动的服务

用的到的朋友可以star下，欢迎留言交流

>vue requirejs vue-router node 

## 目录结构介绍
Tips: 很久之前整理的，目录结构不太符合要求，大家可自行更改 <br>
|--component                            // 公用组件 <br>
|--data                                 // 本地数据 <br>
|--js                                   // 公用js <br>
|--routers                              // vue组件js,相当于.vue的script部分 <br>
|--style                                // 公共 css <br>
|--template                             // vue组件的html,相当于.template部分 <br>
-- index.html                            <br>
-- main.js                             // 入口 <br>
-- start.js                            // 本地服务<br>

## 操作
* git clone https://github.com/SirSong/vue-requirejs.git
* cd 当前目录
* npm install 
* npm start或 node start.js
* 打开 [http://localhost:8888](http://localhost:8888/#/path1)

