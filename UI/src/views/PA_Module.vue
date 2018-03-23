<template>

  <div class="container" style="margin-top: 10px;">
    <h1>Project Admin Page</h1>
    <table class="table table-bordered table-dark">
      <tbody>
        <tr>
          <td>Nama PA</td>
          <td>Nama Pegawai Pemohon</td>
          <td>Nominal</td>
          <td>Keterangan</td>
          <td>Submit?</td>
        </tr>
        <tr>
          <td><input type="text" v-model="newReimburse.PA_name" class="form-control"></td>
          <td><input type="text" v-model="newReimburse.emp_name" class="form-control"></td>
          <td><input type="text" v-model="newReimburse.ammount" class="form-control"></td>
          <td><input type="text" v-model="newReimburse.remark" class="form-control"></td>
          <td><button @click="post_reimburse" class="btn btn-primary">Submit</button></td>
        </tr>
      </tbody>
    </table>
    <div>&nbsp;</div>
    <div>&nbsp;</div>
    <table class="table table-bordered table-dark">
      <tbody>
        <tr>
          <td>Nama PA</td>
          <td>Tanggal Request</td>
          <td>Nama Pegawai Pemohon</td>
          <td>Nominal</td>
          <td>remark</td>
          <td>Status</td>
        </tr>
        <tr v-for="data of arraybalance" :key="data.PA_name">
          <td>{{data.PA_name}}</td>
          <td>{{data.date}}</td>
          <td>{{data.emp_name}}</td>
          <td>{{data.ammount}}</td>
          <td>{{data.remark}}</td>
          <td>
            <span v-if="data.flag == 1">In Review</span>
            <span v-if="data.flag == 2">Approved</span>
            <span v-if="data.flag == 0">Reimbursed</span>
</td>
        </tr>
      </tbody>
    </table>
    <!-- <ul>
      <li v-for="item in filteredItems" :key="item.id">
        {{ item.PA_name }} | {{ item.date }}
      </li>
    </ul>

    <ul>
      <li v-for="order in orders" :key="order.id">
        {{ order.code }}
        Rp{{ order.grand_total }}
      </li>
    </ul> -->
  </div>
</template>

<script>
const axios = require('axios')

export default {
  beforeMount(){
            const url = 'http://localhost:3000/reimburse'
                axios.get(url).then(res => {
                    this.arraybalance=res.data
                    console.log(res.data)
        })},
  data() {
    return {
        arraybalance:[],
        newReimburse: {
        PA_name: '',
        date: '24-Mar-2018',
        emp_name: '',
        ammount: '',
        remark: '',
        flag: '1',
      },
      
      items: [
        // { id: 1, PA_name: 'Jagung', date: 1232, emp_name: 'Jagung', ammount: 1232, remark: 'Jagung', flag: 1  },
        // { id: 1, PA_name: 'Duren', date: 1232, emp_name: 'Jagung', ammount: 1232, remark: 'Jagung', flag: 1  }
      ],
      orders: []
    }
  },

  // mounted() {
  //   this.refresh()
  // },

  // computed: {
  //   filteredItems() {
  //     return this.items.filter(item => {
  //       return item.PA_name.includes(this.searchText)
  //     })
  //   }
  // },

  methods: {
    post_reimburse() {
     
      axios.post('http://localhost:3000/reimburse', this.newReimburse, {headers: {"Access-Control-Allow-Origin": "*"}}) 
      .then(data => {
        console.log(data)
        this.newReimburse.PA_name = ''
        this.newReimburse.date = ''
        this.newReimburse.emp_name = ''
        this.newReimburse.ammount = ''
        this.newReimburse.remark = ''
      })
    },
    fetchDataBalance(){
      const url = 'http://localhost:3000/reimburse'
        axios.get(url).then(res => {
          this.arraybalance=res.data
          console.log(res.data)
        })
    }

    // refresh() {
    //   const url = 'https://gist.githubusercontent.com/mul14/e3fa87daa39e6d5ef2b48754130f48f7/raw/0615de7f41a31355ff46a3fdb2d4dc55c192b773/orders.json'

    //   axios.get(url).then(res => {
    //     this.orders = res.data.orders
    //   })
    // },

    // add () {
    //   this.items.push({
    //     PA_name: this.newReimburse.PA_name,
    //     date: this.newReimburse.date,
    //     emp_name: this.newReimburse.emp_name,
    //     ammount: this.newReimburse.ammount,
    //     remark: this.newReimburse.remark,
    //     flag: this.newReimburse.flag,
    //   })
    //   this.newReimburse.PA_name = ''
    //   this.newReimburse.date = ''
    //   this.newReimburse.emp_name = ''
    //   this.newReimburse.ammount = ''
    //   this.newReimburse.remark = ''
    //   this.newReimburse.flag = ''
    // },

    // remove(x) {
    //   const index = this.items.indexOf(x)
    //   this.items.splice(index, 1)
    // }
  }
}
</script>
