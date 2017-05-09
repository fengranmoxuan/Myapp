var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/cetTest4',function(req,res){
	res.render('study/cetTest4');
})

router.get('/cetTest6',function(req,res){
	res.render('study/cetTest6');
})

router.get('/newQuestion',function(req,res){
	res.render('study/newQuestion');
})


router.get('/newAnswer',function(req,res){
	res.render('study/newAnswer');
})

router.get('/lastTime',function(req,res){
	res.render('study/lastTime');
})
router.get('/answer',function(req,res){
	res.render('study/answer');
})
router.get('/tiaojizhuanti',function(req,res){
	res.render('study/tiaojizhuanti');
})
router.get('/yuanxiaozixun',function(req,res){
	res.render('study/yuanxiaozixun');
})
router.get('/send',function(req,res){
	console.log(req.query);
})
router.get('/chapter',function(req,res){
	res.render('study/chapter');
})
router.get('/finally',function(req,res){
	res.render('study/finally');
})
router.get('/kechengtuisong',function(req,res){
	res.render('study/kechengtuisong');
})
router.get('/yingyulianxi',function(req,res){
	res.render('study/yingyulianxi');
})
router.get('/datijiqiao',function(req,res){
	res.render('study/datijiqiao');
})
router.get('/zhengcexinwen',function(req,res){
	res.render('study/zhengcexinwen');
})
router.get('/toutiaoxinwen',function(req,res){
	res.render('study/toutiaoxinwen');
})
router.get('/changjianwenti',function(req,res){
	res.render('study/changjianwenti');
})
router.get('/shishiredian',function(req,res){
	res.render('study/shishiredian');
})


module.exports = router;
