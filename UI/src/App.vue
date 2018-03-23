<template>
  <div class="container" style="margin-top: 20px;">

    <div class="form-group">
      <label>Nama PA</label>
      <input type="text" v-model="newReimburse.PA_name" class="form-control">
    </div>
    <div class="form-group">
      <label>Tanggal</label>
      <input type="text" v-model="newReimburse.date" class="form-control">
    </div>
    <div class="form-group">
      <label>Nama Pegawai Pemohon</label>
      <input type="text" v-model="newReimburse.emp_name" class="form-control">
    </div>
    <div class="form-group">
      <label>Nominal</label>
      <input type="text" v-model="newReimburse.ammount" class="form-control">
    </div>
    <div class="form-group">
      <label>Keterangan</label>
      <input type="text" v-model="newReimburse.remark" class="form-control">
    </div>
    <button @click="post_reimburse" class="btn btn-primary">Add</button>

    

    <ul>
      <li v-for="item in filteredItems" :key="item.id">
        {{ item.PA_name }} | {{ item.date }}
      </li>
    </ul>

    <ul>
      <li v-for="order in orders" :key="order.id">
        {{ order.code }}
        Rp{{ order.grand_total }}
      </li>
    </ul>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data() {
    return {
      searchText: '',
      newReimburse: {
        PA_name: '',
        date: '',
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

  computed: {
    filteredItems() {
      return this.items.filter(item => {
        return item.PA_name.includes(this.searchText)
      })
    }
  },

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
