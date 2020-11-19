// 1.控制所有的事件触发
// 2.唯一性。只允许一个事件存在
// 3.能在其他页面中单独使用

class CommonPrototype {
  constructor () {
    // 事件存放容器
    // {
    //   eventName： {
    //      cb: [], //函数
    //      isActive: Boolean //是否可以执行
    //   }
    // }
    this.eventList = {}
  }
}

class EventBus extends CommonPrototype {
  // eslint-disable-next-line no-useless-constructor
  constructor () {
    super()
  }
  /**
     * 事件订阅（注册）
     * @param {String} eventName 事件名
     * @param {Function} callback 回调
     */
  $on (eventName, callback) {
    // 事件名是否存在
    if (!this.eventList[eventName]) {
      this.eventList[eventName] = {
        cb: [],
        isActive: false
      }
    };
    this.eventList[eventName]['cb'].push(callback)
  }

  /**
     * 事件触发
     * @param {String} eventName 事件名
     * @param {Object} params 参数
     */
  $emit (eventName, params) {
    // 判断当前事件的名称是否存在
    let arr = this.eventList[eventName]
    if (arr) {
      // 获取当前事件名，然后执行
      let arrKeys = Object.keys(this.eventList) // 获取所有事件名
      arrKeys.map((ele) => {
        // eslint-disable-next-line no-unneeded-ternary
        this.eventList[ele]['isActive'] = (eventName === ele ? true : false)
      })
      if (this.eventList[eventName]['isActive']) {
        arr.map((cb) => {
          cb(params)
        })
      }
    }
  }

  /**
     * 事件解绑
     * @param {String} eventName 事件名
     * @param {Function} callback 回调
     */
  $off (eventName, callback) {
    // 判断当前事件名是否存在
    console.log('$off', !!this.eventList[eventName])
    if (this.eventList[eventName]) {
      // 判断是否存在回调。如果存在则找到相对应的下标，然后将函数在数组中移除
      if (callback) {
        let index = this.eventList[eventName].indexOf(callback)
        this.eventList[eventName].splice(index, 1)
      } else {
        // 不存在回调则删除当前事件的所有函数
        this.eventList[eventName] = []
      }
    } else {
      // 事件名不存在则将整个数组清空
      this.eventList[eventName].length = 0
    }
  }
}

export default EventBus
