var express = require('express');
var router = express.Router();


var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp');
var lesson=mongoose.model('lesson',{title:String,subject:String});

var people=mongoose.model('people',{count:String,password1:String,password2:String});

var username=mongoose.model('username',{count:String});

var qanda=mongoose.model('qanda',{wenti:String,huida:String,year:String,month:String,day:String,hour:String,minute:String,second:String});

var jobinfo=mongoose.model('jobinfo',{jobname:String,zhiwei:String,place:String,date:String,pay:String,phone:String});

var weiji=mongoose.model('weiji',{chapter:String,content:String,subject:String});

var weijifuxi=mongoose.model('weijifuxi',{chapter:String,content:String,subject:String});

var english=mongoose.model('englishs',{type:String,content:String});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login/index');
});

router.get('/neirong', function(req, res, next) {
  res.render('neirong');
});

router.get('/shouye', function(req, res, next) {
  res.render('shouye');
});

// learn
router.get('/learn', function(req, res, next) {
  res.render('learn');
});

router.get('/finalExam', function(req, res, next) {
  res.render('study/finalExam');
});

router.get('/cetTest', function(req, res, next) {
  res.render('study/cetTest');
});

router.get('/huida', function(req, res, next) {
  res.render('study/huida');
});

router.get('/postExam', function(req, res, next) {
  res.render('study/postExam');
});



// play
router.get('/play', function(req, res, next) {
  res.render('play');
});

router.get('/chat', function(req, res, next) {
  res.render('play/chat');
});

router.get('/doubleM', function(req, res, next) {
  res.render('play/doubleM');
});




// daily
router.get('/daily', function(req, res, next) {
  res.render('daily');
});

router.get('/partjob', function(req, res, next) {
  jobinfo.find(function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('daily/partjob',{data:data});  
    }
  })
});

router.get('/market', function(req, res, next) {
  res.render('daily/market');
});

router.get('/addinfo', function(req, res, next) {
  res.render('daily/addinfo');
});



// personal
router.get('/personal', function(req, res, next) {
  res.render('personal');
});

router.get('/edit', function(req, res, next) {
  res.render('me/edit');
});

//login
router.get('/sign',function(req,res){
  res.render('login/sign');
});

router.get('/login',function(req,res){
  res.render('login/login');
});
 



router.get('/search', function(req, res, next) {
    res.render('search');
});

router.get('/sousuo',function(req,res){
  var title=req.query.title;
  lesson.findOne({title:title},function(err,data){
    if(err){
      res.redirect('back');
    }else{
      res.json(data.subject);
    }
  })
});

router.post('/doLogin',function(req,res){
  people.create(req.body,function(err,data){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  }) 
});


router.get('/checkname',function(req,res){
  var obj={};
  people.findOne({count:req.query.count},function(err,data){
    if(err){
      console.log(err);
    }else{
         if(data==null){
            obj.data1='密码错误或账户不存在';
            obj.data2=1;
         }else{
            if(req.query.password==data.password1){
              obj.data1='';
              obj.data2=0;
            }else{
              obj.data1='忘记密码?';
              obj.data2=1;
            }
         }
        
    }
    res.json(obj);
  })
});


router.get('/checkcount',function(req,res){
  people.findOne({count:req.query.count},function(err,data){
    if(err){
      console.log(err);
    }else{
      if(data==null){
        res.json('0');
      }else{
        res.json('1');
      }
    }
  })
});

var Data='';
router.get('/confircount',function(req,res){
  people.findOne({count:req.query.count},function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      Data=data.count;
    }
  })
});

router.get('/login/update',function(req,res){
  res.render('login/update',{count:Data});
});

router.post('/reLogin',function(req,res){
  people.update({count:Data},{$set:{"password1":req.body.password1,"password2":req.body.password2}},function(err,data){
    if(err){
      console.log(err);
    }else{
      res.redirect('/');
    }
  })
});

router.post('/tiwen',function(req,res){
  console.log(req.body);
  qanda.create(req.body,function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.json('success');
    }
  })
  
});



router.get('/q&a', function(req, res, next) {
  qanda.find(function(err,data){
    if(err){
      console.log(err);
    }else{
      res.render('study/q&a',{data:data});
    }
  })
});


var words='';
router.get('/word1',function(req,res){
  qanda.findOne({wenti:req.query.word},function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      words=data.wenti;
    }
  })
});


router.get('/study/huida',function(req,res){
  res.render('study/huida',{count:words});
});

router.get('/addhuida',function(req,res){
  qanda.update({wenti:req.query.wenti},{$set:{"huida":req.query.huida}},function(err,data){
    if(err){
      console.log(err);
    }else{
      res.json(data);
    }
  })
});

//添加兼职信息
router.post('/addjobinfo',function(req,res){
  jobinfo.create(req.body,function(err,data){
    if(err){
      console.log(err);
    }else{
      res.json('did it');
    }
  })
});



//练习题目
router.get('/study/lianxi',function(req,res){
  weiji.find(function(err,data){
    if(err){
      console.log(err);
    }else{
      // console.log(data);
      res.render('study/lianxi',{data:data});
    }
  })
})



//取chapter在数据库中查找对应content的内容
var contents='';
router.post('/content',function(req,res){
  weiji.findOne({chapter:req.body.content},function(err,data){
    if(err){
      console.log(err);
    }else{
      contents=data.content;
    }
  })
});

router.get('/study/content',function(req,res){
    res.render('study/content',{data:contents});
})


//复习资料

router.get('/study/fuxiziliao',function(req,res){
  weijifuxi.find(function(err,data){
    if(err){
      console.log(err);
    }else{
      console.log(data);
      res.render('study/fuxiziliao',{data:data});
    }
  })
})

var contents2='';
router.post('/content2',function(req,res){
  weijifuxi.findOne({chapter:req.body.content},function(err,data){
    if(err){
      console.log(err);
    }else{
      contents2=data.content;
    }
  })
});

router.get('/study/content2',function(req,res){
    res.render('study/content2',{data:contents2});
})

router.get('/study/yingyucontent',function(req,res){
  res.render('study/yingyucontent');
})

router.post('/yingyu',function(req,res){
   english.findOne({type:req.body.type},function(err,data){
      if(err){
        console.log(err);
      }else{
        res.json(data);
      }
   })
})
module.exports = router;
