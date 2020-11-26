import { createApp, h, watchEffect, ref, reactive, watch } from 'vue'
// import './tsapi/types'
// import './tsapi/interface'
// import './tsapi/enum'
// import './tsapi/genericity'
// import './tsapi/test.js'
// import './tsapi/advanced-type'
// import './tsapi/tsModules/index'
// import './tsapi/decorator'
// import './tsapi/mixin'

createApp({
  render (contxt:any) {
    return h('div', contxt.message)
  },
  data () { return { } },
  created () {
    console.log(this.timer)
  },
  mounted () {
    console.log(document.getElementById('app'))

    console.log(this.timer)

    setTimeout(() => {
      console.log(this.timer)
    }, 5000)

    const button:HTMLButtonElement = document.createElement('button')

    button.disabled = false

    const aa :HTMLButtonElement = button as HTMLButtonElement

    aa.disabled = false
  },
  setup () {
    const message = ref('Hello!')

    const _timer = { time: [new Date()] }

    const timer = reactive(_timer)

    watch(() => timer.time, v => {
      console.log(v)
      return v
    }, {
      immediate: true
    })

    watchEffect(() => {
      console.log(message.value)
    })

    setTimeout(() => {
      message.value = '123123'
      timer.time = [new Date()]

      console.log(timer.time)
    }, 5000)

    return { message, timer }
  }
}).mount('#app')
