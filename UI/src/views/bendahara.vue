<template>
  <div class="about">
    <h1>Bendahara Page</h1>

<div>&nbsp;</div>

<table class="table table-bordered table-dark">
<tbody>
<tr>
<td>No.</td>
<td>Balance</td>
<td>Request</td>
<td>Date Request</td>
<td>Date Approve</td>
<td>Status</td>
<td>Edit</td>
<td>Send</td>
</tr>


<tr v-for="balance of arraybalance" :key="balance.no_bal">
<td>{{balance.no_bal}}</td>
<td>{{balance.balance_fin}}</td>
<td>{{balance.balance_fin}}</td>
<td>{{balance.balance_fin}}</td>
<td>{{balance.balance_fin}}</td>
<td>{{balance.balance_fin}}</td>
<td><button type="button" class="btn btn-outline-primary">Edit</button></td>
<td><button type="button" class="btn btn-outline-success">Posting</button></td>
</tr>
</tbody>
</table>

<button @click="fetchDataBalance" type="button" class="btn btn-outline-primary">Try</button>


<div>&nbsp;</div>
<div>&nbsp;</div>
<div>&nbsp;</div>


<table class="table table-bordered table-dark">
<tbody>
<tr>
<td>No.</td>
<td>Balance</td>
<td>Request</td>
<td>Date Request</td>
<td>Date Approve</td>
<td>Status</td>
<td>Edit</td>
<td>Send</td>
</tr>
</tbody>
</table>

{{this.arraybalance}}

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


        data(){
            return {
                arraybalance:[]
            }
        },

        methods: {
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
