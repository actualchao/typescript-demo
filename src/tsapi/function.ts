
// 函数接口
interface Func {
  (v: string, m: number): void
}

type Func1 = (v: string, m?: number) => void

const functionAdd: Func = (v) => { console.log(v) }
const functionAdd1: Func1 = (v, m = 2) => { console.log(v, m) }

console.log(functionAdd('123', 2))

console.log(functionAdd1('123'))

function add (x: number, y: number): number {
  return x + y
}

// let myAdd: (baseValue: number, increment: number) => number = function (x: number, y: number): number { return x + y }

// type myAdd1 = (baseValue: number, increment: number) => number
// const functionadd2: myAdd1 = function (x: number, y: number): number { return x + y }

// 剩余参数
type FuncOrgs = (v: number, ...rest: number[]) => void
const functionOrgs: FuncOrgs = (x, ...rest) => { console.log(rest) }

// 函数重载
// function handleData(x: string): string[]
// function handleData(x: number): number[]
// function handleData(x: any): any {
//   if (typeof x === 'string') {
//     return x.split('')
//   } else {
//     return x.toString().split('').map((item) => Number(item))
//   }
// }

// 接口泛型
interface Func3<T> {
  (n: T, m?: number): void
}

interface Func4 {
  (n: string, m: number): void
}

type Func5 = <T>(n: T, m: number) => T[]
