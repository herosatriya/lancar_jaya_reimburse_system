<template>
  <div class="about">
    <h1>Master Page</h1>

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
<td>No Ref</td>
<td>Amount Request</td>
<td>Date Request</td>
<td>Remark</td>
<td>Status</td>
<td>Approve</td>
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
<td><button @click="approve(balance)" type="button" class="btn btn-outline-success">Approve</button></td>
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
                arraybalance:[]
            }
        },

        methods: {

           approve(balance){
                const url = 'http://localhost:3000/bendahara'
                const body = {no_bal: balance.no_bal, flag_new: "2"}
                axios.put(url, body).then(
                    this.fetchDataBalance()
                )

           },

            tetap(balance){
                const url = 'http://localhost:3000/bendahara'
                const body = {no_bal: balance.no_bal, flag_new: "1"}
                axios.put(url, body).then(
                    this.fetchDataBalance()
                )
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
