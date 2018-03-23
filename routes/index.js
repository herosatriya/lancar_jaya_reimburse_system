var express = require('express');
var router = express.Router();
const DataStore = require('nedb')

const DB = new DataStore({
  filename: './data.db',
  autoload: true
})

router.get('/reimburse', function (req, res, next) {

  const q = {
    $or: [
      { PA_name: new RegExp(req.query.q || '', 'i')},
      { date: new RegExp(req.query.q || '', 'i')},
      { emp_name: new RegExp(req.query.q || '', 'i')},
      { ammount: new RegExp(req.query.q || '', 'i')},
      { remark: new RegExp(req.query.q || '', 'i')},
      { flag: new RegExp(req.query.q || '', 'i')},
      
    ]
  }
  DB.find( q, (err, data) => {
  res.json(data)
  })
})

router.post('/reimburse', function (req, res, next) {    //post bisa mengirimkan data lebih banyak dibanding get, ada body
 // req.body.type = 'response'
  const errors = []

    //res.send('Ini post')
    DB.insert(req.body)
    res.json(req.body)

})

router.delete('/jobs/:jobId', function(req, res, next){
  DB.remove({_id: req.params.jobId})
  res.json({
    message: 'Data berhasil dihapus'
  })
})

module.exports = router;