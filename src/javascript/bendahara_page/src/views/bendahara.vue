<template>
  <div class="about">
    <h1>Bendahara Page</h1>

<div>&nbsp;</div>

<div class="text-center">
Balance   : 
<button type="button" align="middle" width="48" height="48" class="btn btn-outline-success">
{{saldo}}
</button></div>

<div>&nbsp;</div>

<table class="table table-bordered table-dark">
<tbody>
        <tr>
          <td>No</td>
          <td>Request</td>
          <td>Date Req</td>
          <td>Remark</td>
          <td>Process</td>
        </tr>
        <tr>
          <td><input type="text" v-model="nomer_1" class="form-control"></td>
          <td><input type="text" v-model="request_1" class="form-control"></td>
          <td><input type="text" v-model="date_req_1" class="form-control"></td>
          <td><input type="text" v-model="remark_1" class="form-control"></td>
          <td><button @click="submit(balance)" type="button" class="btn btn-primary">Submit</button></td>        
        </tr>
      </tbody>
</table>

<div>&nbsp;</div>
<div>&nbsp;</div>



<table class="table table-bordered table-dark">
<tbody>
<tr>
<td>No.</td>
<td>Request</td>
<td>Date Request</td>
<td>Remark</td>
<td>Status</td>
<td>Send</td>
</tr>

<tr v-for="balance of arraybalance" :key="balance.no_bal">
<td>{{balance.no_bal}}</td>
<td>{{balance.balance_req}}</td>
<td>{{balance.date_bal_req}}</td>
<td>{{balance.remark}}</td>
<td>
<span v-if="balance.flag_bal == 0">New</span>
<span v-if="balance.flag_bal == 1">Requested</span>
<span v-if="balance.flag_bal == 2">Approved</span>
</td>
<td><button @click="posting(balance)" type="button" class="btn btn-outline-success">Posting</button></td>
</tr>
</tbody>
</table>




<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>

</div>


</template>


<script>
    const axios = require('axios')
    
    export default {
        beforeMount(){
            const url = 'http://localhost:3000/bendahara'
                axios.get(url).then(res => {
                    this.arraybalance=res.data
                    console.log(res.data)
        })},

        computed: {
            saldo() {
                let saldo = 0
                this.arraybalance.filter(bal =>{                 
                    return bal.flag_bal == 2
                    console.log(bal)
                })                
                .map(bal => {
                    console.log(bal)
                    if (bal.remark == '+') {
                        saldo = parseInt(saldo) + parseInt(bal.balance_req)
                    }                
                    else {
                        saldo = parseInt(saldo) - parseInt(bal.balance_req)
                    }
                    return saldo
                })
                return saldo
            }
        },

        data(){
            return {
                arraybalance:[],
                nomer_1: '',
                balance_1: '',
                request_1: '',
                date_req_1: '',
                remark_1: '',
            }
        },

        methods: {

           posting(balance){
                const url = 'http://localhost:3000/bendahara'
                const body = {no_bal: balance.no_bal, flag_new: "1"}
                axios.put(url, body).then(
                    this.fetchDataBalance()
                )

           },

           submit(){
               const url = 'http://localhost:3000/bendahara'
               const data = {
                no_bal: this.nomer_1,
                balance_req: this.request_1,
                date_bal_req: this.date_req_1,
                date_bal_app: this.date_app_1,
                remark: this.remark_1,
                flag_bal: "0"
               }
               axios.post(url, data)
           },

            fetchDataBalance(){
                const url = 'http://localhost:3000/bendahara'

                axios.get(url).then(res => {
                    this.arraybalance=res.data
                    console.log(res.data)
                })
            }
        }

    }


</script>>
