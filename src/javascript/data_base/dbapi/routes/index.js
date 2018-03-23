var express = require('express');
var router = express.Router();

const DataStore = require('nedb');  //nedb untuk read write db

const DBBalance  = new DataStore({
    filename : 'database_balance.db',
    autoload : true
});

const DBRecord  = new DataStore({
  filename : 'database_reimburse.db',
  autoload : true
});

// let dummy =[
//   {"no_bal":"1","balance_fin":"1001","balance_req":"1","date_bal_req":"23 Maret 2018","date_bal_app":"24 Maret 2018","remark":"Kelebihan","flag_bal":"0","_id":"0nSwDErvwnM0N9Te"},
//   {"no_bal":"2","balance_fin":"2000","balance_req":"2","date_bal_req":"23 Maret 2018","date_bal_app":"24 Maret 2018","remark":"Kekurangan","flag_bal":"0","_id":"REmjeOrnHVQCAaiC"}
// ]

// let dummy =[
//   {"no_pa":"1",
//   "nama_pa":"riris",
//   "nama_peg":"edo",
//   "amount_pa":"1000",
//   "date_pa":"2 Maret",
//   "remark_pa":"Reimbursement Yoshinoya untuk Migrasi Tim Hore",
//   "flag_pa":"0"}
// ]

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

//...............................................................Router Get...............................................................\\
router.get('/bendahara', function(req, res, next){
  DBBalance.find({},(err,data) =>{
    res.json(data)
})
})

router.get('/admin', function(req, res, next){
  DBRecord.find({},(err,data) =>{
    res.json(data)
})
})


//...............................................................Router Post...............................................................\\
router.post('/bendahara', function(req, res, next){
  DBBalance.insert(req.body, (err,data)=>{
    console.log(data)
    res.json(data)
  }) 
})

router.post('/admin', function(req, res, next){
  DBRecord.insert(req.body, (err,data)=>{
    console.log(data)
    res.json(data)
  }) 
})


//...............................................................Router Put...............................................................\\
router.put('/bendahara', function(req, res, next){
  DBBalance.update({no_bal: req.body.no_bal}, {$set:{flag_bal:req.body.flag_new}}, function(err,data){
      res.json(data)
    })
})

router.put('/admin', function(req, res, next){
  DBRecord.update({no_pa: req.body.no_pa}, {$set:{flag_pa:req.body.flag_baru}}, function(err,data){
      res.json(data)
    })
})


//DBBalance.remove({}, {multi:true}) //delete
//DBRecord.remove({}, {multi:true}) //delete
//DBBalance.insert(dummy)             //insert
//DBRecord.insert(dummy)

module.exports = router;
