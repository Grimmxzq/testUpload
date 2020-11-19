<template>
    <div>
      <div>父组件内容</div>
      <button @click="getChildMethods">点击我调用子组件</button>
      <div>{{ i }}</div>
      <hr>
      <child-component></child-component>
      <hr>
      <child-nav-menu></child-nav-menu>
    </div>
</template>
<script>
import EventBus from '../assets/EventBus'
import childComponent from './emit/child-component'
import childNavMenu from './navMenu/child-navMenu'
export default {
  name: 'EimtOnOff',
  components: {
    childComponent,
    childNavMenu
  },
  data () {
    return {
      i: 0
    }
  },
  methods: {
    getParentMethods () {
      console.log('我被调用了')
      console.log(EventBus)
    },
    getChildMethods () {
      EventBus.$emit('getChildMethods')
    },
    addMethods () {
      this.i++
    },
    preMethods () {
      this.i--
    }
  },
  mounted () {
    EventBus.$on('getParentMethods', this.getParentMethods)
    EventBus.$on('addMethods', this.addMethods)
    EventBus.$on('preMethods', this.preMethods)
  },
  beforeDestroy () {
    EventBus.$off('getParentMethods')
    EventBus.$off('addMethods')
    EventBus.$off('preMethods')
  }
}
</script>
<style scoped>

</style>
