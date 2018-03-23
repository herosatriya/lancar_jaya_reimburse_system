var express = require('express');
var router = express.Router();

const DataStore = require('nedb');  //nedb untuk read write db

const DBBalance  = new DataStore({
    filename : 'database_balance.db',
    autoload : true
});

let dummy =[
  {"no_bal":"1","balance_fin":"1001","balance_req":"1","date_bal_req":"23 Maret 2018","date_bal_app":"24 Maret 2018","remark":"Kelebihan","flag_bal":"0","_id":"0nSwDErvwnM0N9Te"},
  {"no_bal":"2","balance_fin":"2000","balance_req":"2","date_bal_req":"23 Maret 2018","date_bal_app":"24 Maret 2018","remark":"Kekurangan","flag_bal":"0","_id":"REmjeOrnHVQCAaiC"}
]

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/bendahara', function(req, res, next){
  DBBalance.find({},(err,data) =>{
    res.json(data)
})
})

router.post('/bendahara', function(req, res, next){
  DBBalance.insert(req.body, (err,data)=>{
    console.log(data)
    res.json(data)
  }) 
})

router.put('/bendahara', function(req, res, next){
  DBBalance.update({no_bal: req.body.no_bal}, {$set:{flag_bal:req.body.flag_new}}, function(err,data){
      res.json(data)
    })
})


//DBBalance.remove({}, {multi:true}) //delete
//DBBalance.insert(dummy)             //insert


module.exports = router;
