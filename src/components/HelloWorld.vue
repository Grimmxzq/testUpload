<template>
  <div class="hello">
    <div @click="goEimtOnOff">测试$emit、$on、$off</div>
    <div @click="apiTest">nodejs接口测试</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    goEimtOnOff () {
      this.$router.push('/eimtOnOff')
    },
    apiTest () {
      this.$router.push('/api')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
