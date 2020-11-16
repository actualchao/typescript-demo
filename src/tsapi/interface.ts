interface People {
  readonly firstName: string, // 只读属性
  lastName: string,
  age?: number // 可选属性
}

let people: People

// 类型断言跳过额外属性检查 color
people = { firstName: '123', lastName: '213', age: 13, color: '123' } as People

// 赋值跳过额外类型检查 color
const temp = { firstName: '123', lastName: '213', age: 13, color: '123' }
people = temp

// 索引签名跳过额外类型检查 color
interface People1 extends People {
  [index: string]: any
}
let people2: People1 = { firstName: '123', lastName: '213', age: 13, color: '123' }

function getFullname (people: People): string {
  return `${people.firstName}-${people.lastName}`
}

getFullname({ firstName: 'wu', lastName: 'jc' })

/**
 * 索引签名
 * 索引为字符串数字的时候，传入的值必须符合接口中定义的数字索引定义的值类型
 */
interface Obj {
  [index: string]: string,
  [index: number]: string,
}

let obj3: Obj = {
  1: '123'
}
