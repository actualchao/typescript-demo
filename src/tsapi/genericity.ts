/**
 * 泛型
 */

function identity<T> (arg: T): T {
  return arg
}

let myIdentity: <U>(aa: U) => U = identity

console.log(myIdentity('123').length)

let myIdentity1: {<T>(arg: T): T} = identity

function getProperty<T, U extends keyof T> (obj:T, key:U) {
  return obj[key]
}

getProperty({ a: 123, b: 123 }, 'a')

console.log(document.getElementById('app'))

interface Info1<T> {
  name: T,
  age: number
}

export default function (a:Info1<string>, b:String):string {
  return `${a},${b}`
}
