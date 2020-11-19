<template>
    <div>
        <el-button type="primary" plain @click="getRequest">get请求</el-button>
        <el-button type="primary" plain @click="getRequest2">get请求带参</el-button>
        <el-button type="primary" plain @click="postRequest">post请求方式 this.$axios()</el-button>
        <el-button type="primary" plain @click="postRequest2">post请求方式 this.$axios.post()</el-button>
        <br />
        <el-row>
          <el-button type="primary" plain @click="getUserData">获取用户数据</el-button>
        </el-row>
        <el-row v-if="tableData.length > 0">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="userid"
              label="用户id"
              width="180">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              width="180">
            </el-table-column>
            <el-table-column
              prop="username"
              label="用户名">
            </el-table-column>
          </el-table>
        </el-row>
    </div>
</template>
<script>
export default {
  name: 'PageAPI',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    getRequest () {
      const url = 'http://localhost:3000/login/'
      this.$axios.get(url).then((res) => {
        console.log(res)
      })
    },
    getRequest2 () {
      const url = 'http://localhost:3000/login/data'
      this.$axios.get(url, {
        params: {
          age: 100,
          username: '用户名',
          password: '123'
        }
      }).then((res) => {
        console.log(res)
      })
    },
    postRequest () {
      const url = 'http://localhost:3000/login/formdata'
      this.$axios({
        url,
        method: 'post',
        data: {
          age: 100,
          username: '用户名',
          password: '123'
        }
      }).then((res) => {
        console.log(res)
      })
    },
    postRequest2 () {
      const url = 'http://localhost:3000/login/formdata'
      const obj = {
        age: 100,
        username: '用户名',
        password: '123'
      }
      this.$axios.post(url, obj).then(res => {
        console.log(res)
      })
    },
    // 获取user表数据
    getUserData () {
      const url = 'http://localhost:3000/user/getUserInfo'
      this.$axios.get(url, {
        params: {
          page: 1,
          size: 10
        }
      }).then((response) => {
        console.log(response)
        if (response && response.data) {
          const { data } = response.data
          this.tableData = data
        }
      })
    }
  }
}
</script>
