const express=require("express");
const mysql = require('mysql');
var app=express();
app.listen(3000);

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'web1806',
    connectionLimit: 10 
  });
  app.use(express.static(__dirname+"/public"));

  app.get("/message",(req,res)=>{
    var rows=[];
    rows.push(
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"张三"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"李四"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"李杭"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"肖子豪"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"丰璐瑶"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"何思奇"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"张越"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"阿星"},
    {img_url:"http://127.0.0.1:3000/img/7477f91a06786b38af94fa41a4b5540b.jpg",name:"吴虞军"},)
    res.send(rows)
});

app.get("/contact",(req,res)=>{
  var rows2=[];
  rows2.push(
    {listName:"浪漫的事情",number:"50/65"},
    {listName:"我不会",number:"100/90"},
    {listName:"甜蜜的语言",number:"70/60"},
    {listName:"我不会",number:"30/26"},
    {listName:"好听的承诺",number:"35/20"},
    {listName:"我不会",number:"80/70"},
    {listName:"我会的仅仅是",number:"19/31"},
    {listName:"让你幸福",number:"1/1"},
  )
  res.send(rows2)
})

app.get("/qun",(req,res)=>{
	var rows3=[];
	rows3.push(
	{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源1群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源2群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源3群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源4群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源5群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源6群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源7群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源8群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源9群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源10群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源11群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源12群"},
		{img_url:"http://127.0.0.1:3000/img/{93AN}Y7C~J[8N_(MW{3PFH.png",qun_name:"看片资源13群"},
	)
	res.send(rows3)
})

app.get("/taolunzu",(req,res)=>{
	var rows4=[];
	rows4.push(
	{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"余生请多指教"},
		{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"2009届牌楼初级中学301班"},
		{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"2012届源潭高级中学303班"},
		{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"2015届计应一班"},
		{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"王者荣耀战队群"},
		{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"绝地求生军团"},
		{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"也无风雨也无晴"},
		{img_url:"http://127.0.0.1:3000/img/@Z{J615@Y37Z5EWFC$~GH4H.png",name:"来日可期"},
	)
		res.send(rows4)
})

app.get("/news",(req,res)=>{
	var rows5=[];
	rows5.push(
	{img_url:"http://127.0.0.1:3000/img/0.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
		{img_url:"http://127.0.0.1:3000/img/1.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
		{img_url:"http://127.0.0.1:3000/img/2.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
		{img_url:"http://127.0.0.1:3000/img/3.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
		{img_url:"http://127.0.0.1:3000/img/4.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
		{img_url:"http://127.0.0.1:3000/img/5.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
		{img_url:"http://127.0.0.1:3000/img/6.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
		{img_url:"http://127.0.0.1:3000/img/7.jpg",name:"震惊！为何村东头王寡妇内衣频频失窃"},
	)
		res.send(rows5)
})