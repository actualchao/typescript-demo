import { createApp, h, watchEffect, ref } from 'vue'
import './tsapi/types'
import './tsapi/interface'
import './tsapi/enum'
import './tsapi/genericity'
import './tsapi/test.js'
createApp({
  render (contxt:any) {
    return h('div', contxt.message)
  },
  data () { return { } },
  mounted () {
    console.log(document.getElementById('app'))

    const button:HTMLButtonElement = document.createElement('button')

    button.disabled = false

    const aa :HTMLButtonElement = button as HTMLButtonElement

    aa.disabled = false
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
