import { createApp, h, watchEffect, ref } from 'vue'
import './tsapi/types'
import './tsapi/interface'

createApp({
  render (contxt:any) {
    return h('div', contxt.message)
  },
  data () { return { } },
  mounted () {
    // console.log(this.message, 'message on mounted')
  },
  setup () {
    const message = ref('Hello!')

    watchEffect(() => {
      console.log(message.value)
    })

    setTimeout(() => {
      message.value = '123123'
    }, 5000)

    return { message }
  }
}).mount('#app')
