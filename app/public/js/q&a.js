// 日常问答区 最新提问 和 最新回答 路由跳转的时候 其Css样式的改变
var qadiv=document.querySelectorAll('.middle21 div');
qadiv[0].onclick=function(){
	qadiv[0].setAttribute('id','middle21color1');
	qadiv[1].setAttribute('id','middle21color2');
	
}

qadiv[1].onclick=function(){
	qadiv[1].setAttribute('id','middle21color1');
	qadiv[0].setAttribute('id','middle21color2');
}
// localStorage.clear();
// var str='';
// 	window.onload=function(){
// 		var time=new Date();
// 		var year=time.getFullYear();
// 		var month=time.getMonth()+1;
// 		var day=time.getDate();
// 		var time1=year+'-'+month+'-'+day;
// 		var hour=time.getHours();
// 		var minute=time.getMinutes();
// 		var second=time.getSeconds();
// 		var time2=hour+':'+minute+':'+second;
// 		var info=localStorage.getItem('info');
// 		str+='<div class="middle22">';
// 		str+='<div>怎样提高自己的英语听力水平?</div>';
// 		str+='<div><p>'+info+'</p></div>';
// 		str+='<div class="middle223"><span>'+time1+'</span><span>'+time2+'</span><span>sweet</span></div>';
// 		str+='</div>';
// 		$('.middle22section').append(str);
// 	}

