// setTimeout(() => {
//     console.log(1)
// }, 1000)
// console.log(2)
// function getIndexPromise(bool) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(1)
//             if (bool) { resolve('a') }
//             else { reject(Error('error')) }
//         }, 1000)
//     })
// }
// getIndexPromise(false).then((res) => {
//     console.log(res)
// }).catch((error) => {
//     console.log(error)
// })
// async function asyncFunction() {
//     try {
//         const res = await getIndexPromise(false)
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }
// asyncFunction()

interface Res {
    data: {
        [key: string]: any,
    }
}
namespace axios {
    export function post (url: string, config: object): Promise<Res> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const res: Res = { data: {} }
          if (url === '/login') { res.data.user_id = 111 } else { res.data.role = 'admin' }
          console.log(2)
          resolve(res)
        }, 1000)
      })
    }
}
interface LoginInfo {
    user_name: string
    password: string
}
async function loginReq ({ user_name, password }: LoginInfo) {
  try {
    console.log(1)
    const res = await axios.post('/login', {
      data: {
        user_name,
        password
      }
    })
    console.log(3)
    return res
  } catch (error) {
    throw new Error(error)
  }
}
async function getRoleReq (user_id: number) {
  try {
    const res = await axios.post('/user_roles', {
      data: {
        user_id
      }
    })
    return res
  } catch (error) {
    throw new Error(error)
  }
}
// loginReq({ user_name: 'lison', password: '123' }).then((res) => {
//     const { data: { user_id } } = res
//     getRoleReq(user_id).then((res) => {
//         const { data: { role } } = res
//         console.log(role)
//     })
// })

async function getTime (format: string) {
  const moment = await import('moment')
  return moment.default().format(format)
}
// getTime('L').then((res) => {
//     console.log(res)
// })

interface ObjIn {
    name?: string
    age?: number
}
let objIn = {
  sex: 'man'
}
function printInfo (info: ObjIn) {
  console.log(info)
}
// printInfo(objIn as ObjIn)

function mergeOptions<T, U extends string> (op1: T, op2: U) {
  return { ...op1, op2 }
}
// console.log(mergeOptions({ a: 'a' }, 'name'))

function getExcludeProp<T extends { props: string }> (obj: T) {
  const { props, ...rest } = obj
  return rest
}
const objInfo = {
  props: 'something',
  name: 'lison',
  age: 18
}
console.log(getExcludeProp(objInfo))
