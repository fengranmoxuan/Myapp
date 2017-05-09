// footer图片点击的时候更换图片

var img=document.querySelectorAll('.footercircle li ul li a img');
var arrimg1=['1.png','2.png','3.png','4.png'];
var arrimg2=['1.2.png','2.1.png','3.1.png','4.1.png'];
var imgstr='img/tip/';
for(i=0;i<img.length;i++){
	img[i].index=i;
	img[i].onclick=function(){
		changesrc();
		img[this.index].setAttribute('src',imgstr+arrimg2[this.index]);	
	}

}
setInterval(function(){
	if(window.location.hash=='#!/'){
		changesrc();
		img[0].setAttribute('src',imgstr+arrimg2[0]);
	}else if(window.location.hash=='#!/play'){
		changesrc();
		img[1].setAttribute('src',imgstr+arrimg2[1]);
	}else if(window.location.hash=='#!/daily'){
		changesrc();
		img[2].setAttribute('src',imgstr+arrimg2[2]);
	}else if(window.location.hash=='#!/personal'){
		changesrc();
		img[3].setAttribute('src',imgstr+arrimg2[3]);
	}
},100);

function changesrc(){
	for(var i=0;i<arrimg1.length;i++){
		img[i].setAttribute('src',imgstr+arrimg1[i]);
	}
}

// 英语46级的路由跳转的时候 英语6级和英语4级 css样式的变化
var div46=document.querySelectorAll('#chose46 div');
div46[1].onclick=function(){
	this.className='topword14';
	div46[2].className='topword24';
}
div46[2].onclick=function(){
	div46[1].className='topword16';
	this.className='topword26';
}
