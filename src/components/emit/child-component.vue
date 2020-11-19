<template>
    <div>
        我是子组件
        <button @click="emitParent">点击我调用父组件方法</button>
        <button @click="addMethods"> + </button>
        <button @click="preMethods"> - </button>
    </div>
</template>
<script>
import EventBus from '../../assets/EventBus'
export default {
  name: 'childComponent',
  data () {
    return {}
  },
  methods: {
    emitParent () {
      EventBus.$emit('getParentMethods')
    },
    getChildMethods () {
      console.log('子组件调用成功')
      console.log(EventBus)
    },
    addMethods () {
      EventBus.$emit('addMethods')
    },
    preMethods () {
      EventBus.$emit('preMethods')
    }
  },
  mounted () {
    EventBus.$on('getChildMethods', this.getChildMethods)
  },
  beforeDestroy () {
    console.log('组件消失')
    EventBus.$off('getChildMethods')
  }
}
</script>
<style>

</style>
