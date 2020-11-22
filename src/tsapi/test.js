// import func from './genericity'

// func(1, 2)

// export default 'asdf'

(function () {
  function aa () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('wujc')
      }, 1000)
    })
  }

  async function bb () {
    let res = await aa()
    console.log(res, 'res')
    let res1 = await import('./test1')
    console.log(res1)
    // return res
  }

  console.log('test')

  bb().then(res => {
    console.log(res, 'res2')
  })
})()
