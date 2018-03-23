<template>
  <div class="about">
    <h1>Project Admin Page</h1>

<div>&nbsp;</div>

<div>&nbsp;</div>

<table class="table table-bordered table-dark">
<tbody>
        <tr>
          <td>No Ref</td>
          <td>Project Admin</td>
          <td>Pegawai Pemohon</td>
          <td>Amount</td>
          <td>Date Req</td>
          <td>Remark</td>
          <td>Process</td>
        </tr>
        <tr>
          <td><input type="text" v-model="no_pa" class="form-control"></td>
          <td><input type="text" v-model="nama_pa" class="form-control"></td>
          <td><input type="text" v-model="nama_peg" class="form-control"></td>
          <td><input type="text" v-model="amount_pa" class="form-control"></td>
          <td><input type="text" v-model="date_pa" class="form-control"></td>
          <td><input type="text" v-model="remark_pa" class="form-control"></td>
          <td><button @click="submit(record_pa)" type="button" class="btn btn-primary">Submit</button></td>        
        </tr>
      </tbody>
</table>

<div>&nbsp;</div>
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
<td>Send</td>
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
<span v-if="record_pa.flag_pa == 2">Approved</span>
<span v-if="record_pa.flag_pa == 3">Reimburse</span>
</td>
<td><button @click="posting(record_pa)" type="button" class="btn btn-outline-success">Posting</button></td>
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

           posting(record_pa){
                const url = 'http://localhost:3000/admin'
                const body = {no_pa: record_pa.no_pa, flag_baru: "1"}
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
        }

    }


</script>>
