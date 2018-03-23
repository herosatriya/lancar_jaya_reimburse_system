<template>
  <div class="about">
    <h1>Bendahara Project Admin Page</h1>

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
<td>Project Admin</td>
<td>Pegawai Pemohon</td>
<td>Amount</td>
<td>Tanggal</td>
<td>Remark</td>
<td>Status</td>
<td>Received</td>
<td>Approve</td>
</tr>

<tr v-for="record_pa of arrayrecordpa" :key="record_pa.no_pa">
<td>{{record_pa.no_pa}}</td>
<td>{{record_pa.nama_pa}}</td>
<td>{{record_pa.nama_peg}}</td>
<td>{{record_pa.amount_pa}}</td>
<td>{{record_pa.date_pa}}</td>
<td>{{record_pa.remark_pa}}</td>
<td>
<span v-if="record_pa.flag_pa == 0">New</span>
<span v-if="record_pa.flag_pa == 1">Requested</span>
<span v-if="record_pa.flag_pa == 2">Received</span>
<span v-if="record_pa.flag_pa == 3">Reimburse</span>
</td>
<td><button @click="receiv(record_pa)" type="button" class="btn btn-outline-success">Receive</button></td>
<td><button @click="approv(record_pa)" type="button" class="btn btn-outline-success">Approve</button></td>
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
            const url = 'http://localhost:3000/admin'
                axios.get(url).then(res => {
                    this.arrayrecordpa=res.data
                    console.log(res.data)
        })},

        data(){
            return {
                arrayrecordpa:[],
                no_pa: '',
                nama_pa: '',
                nama_peg: '',
                amount_pa: '',
                date_pa: '',
                remark_pa: '',
            }
        },

        methods: {

           receiv(record_pa){
                const url = 'http://localhost:3000/admin'
                const body = {no_pa: record_pa.no_pa, flag_baru: "2"}
                axios.put(url, body).then(
                    this.fetchDataRecordPA()
                )

           },

            approv(record_pa){
                const url = 'http://localhost:3000/admin'
                const body = {no_pa: record_pa.no_pa, flag_baru: "3"}
                axios.put(url, body).then(
                    this.fetchDataRecordPA()
                )
           },

           submit(){
               const url = 'http://localhost:3000/admin'
               const data = {
                no_pa       : this.no_pa,
                nama_pa     : this.nama_pa,
                nama_peg    : this.nama_peg,
                amount_pa   : this.amount_pa,
                date_pa     : this.date_pa,
                remark_pa   : this.remark_pa,
                flag_pa     : "0"
               }
               axios.post(url, data)
           },

            fetchDataRecordPA(){
                const url = 'http://localhost:3000/admin'
                axios.get(url).then(res => {
                    this.arrayrecordpa=res.data
                    console.log(res.data)
                })
            }
        },




        //..................................................................tambahan

        // beforeMount(){
        //     const url = 'http://localhost:3000/bendahara'
        //         axios.get(url).then(res => {
        //             this.arraybalance=res.data
        //             console.log(res.data)
        // })},

        // computed: {
        //     saldo() {
        //         let saldo = 0
        //         this.arraybalance.filter(bal =>{                 
        //             return bal.flag_bal == 2
        //             console.log(bal)
        //         })                
        //         .map(bal => {
        //             console.log(bal)
        //             if (bal.remark == '+') {
        //                 saldo = parseInt(saldo) + parseInt(bal.balance_req)
        //             }
                    
        //             else {
        //                 saldo = parseInt(saldo) - parseInt(bal.balance_req)
        //             }
        //             return saldo
        //         })
        //         return saldo
        //     }
        // },

        // data(){
        //     return {
        //         arraybalance:[],
        //         nomer_1: '',
        //         balance_1: '',
        //         request_1: '',
        //         date_req_1: '',
        //         remark_1: '',
        //     }
        // },

        // methods: {

        //    posting(balance){
        //         const url = 'http://localhost:3000/bendahara'
        //         const body = {no_bal: balance.no_bal, flag_new: "1"}
        //         axios.put(url, body).then(
        //             this.fetchDataBalance()
        //         )

        //    },

        //    submit(){
        //        const url = 'http://localhost:3000/bendahara'
        //        const data = {
        //         no_bal: this.nomer_1,
        //         balance_req: this.request_1,
        //         date_bal_req: this.date_req_1,
        //         date_bal_app: this.date_app_1,
        //         remark: this.remark_1,
        //         flag_bal: "0"
        //        }
        //        axios.post(url, data)
        //    },

        //     fetchDataBalance(){
        //         const url = 'http://localhost:3000/bendahara'

        //         axios.get(url).then(res => {
        //             this.arraybalance=res.data
        //             console.log(res.data)
        //         })
        //     }
        // }





    }


</script>>
