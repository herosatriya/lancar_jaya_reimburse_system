let express     = require('express');   //express untuk
let router      = express.Router();
const DataStore = require('nedb');  //nedb untuk read write db

const DBBalance  = new DataStore({
    filename : 'database_balance.db',
    autoload : true
});



// const no_bal;
// const balance_fin;
// const balance_req;
// const date_bal_req;
// const date_bal_app;
// const flag_bal;

// const req_balance = [
//     {"no_bal":"1",
//      "balance_fin":"5000",
//      "balance_req":"1000",
//      "date_bal_req":"23 Maret 2018",
//      "date_bal_app":"24 Maret 2018",
//      "flag_bal":"0"
//     }  
// ]



// DBBalance.find(q,(err, data)=>{
//     res.json(data)
//   }
//   )

 DBBalance.insert({"no_bal":"2",
     "balance_fin":"2000",
     "balance_req":"2",
     "date_bal_req":"23 Maret 2018",
     "date_bal_app":"24 Maret 2018",
     "flag_bal":"0"
    })


//     DBBalance.update({"no_bal":"1",
//     "balance_fin":"100000",
//     "balance_req":"1000",
//     "date_bal_req":"23 Maret 2018",
//     "date_bal_app":"24 Maret 2018",
//     "flag_bal":"0"
//    })



DBBalance.update({no_bal:"1"}, {$set:{balance_fin:"1000"}},{}, function(err,numReplaced){
//    //  DBBalance.remove({_id:"Dvg6ZAKSeDn0lzqx" , balance_fin:"99"})
})


DBBalance.find({},(err,data) =>{
    console.log(data)
}
)


// DBBalance.update({no_bal:"4"}, {no_bal:"9"},{}, function(err,numReplaced){

// });

// DBBalance.remove({_id:"5eMwvNwoXzoFkdha",no_bal:"2"})


// router.get

// const