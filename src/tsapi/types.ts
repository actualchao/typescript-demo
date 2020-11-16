
/**
 * 布尔类型
 */
let bool1: boolean = false

let bool2: boolean
bool2 = true

// bool2 = 123

/**
 * nunmber 类型
 */
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

/**
 * string 类型
 */
let name1: string = 'wujc'
let age: number = 25
let someWord: string
someWord = `i am ${name1},i will age ${age + 1}`

/**
 * Array 数组类型
 */

let array1: (number | string)[] = [123, 123, '123']
let array2: (string | number)[] = [2, 3, 4, '123']

/**
 * 元组 Tuple
 * 表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 * 访问越界索引时使用联合类型推导
 */
let tuple: [number, string] = [123, '25']
// Error
// tuple = ['123', 123]

/**
 * 枚举类型 enum
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 * 枚举类型提供的一个便利是你可以由枚举的名字获取值，也可以由值获取名字
 */

enum Index1 { aa, bb, cc, }
let index: Index1 = Index1.bb
// console.log(index) // 1

// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
enum Index2 { aa = 1, bb, cc }
let index2: Index2 = Index2.bb
// console.log(index2)// 2

// 可以指定所有的成员的数值
enum Index3 { aa = 2, bb = 4, cc = 6 }

/**
 * Any 类型
 * 所有类型都是 any 类型的子类型
 * 有时候由于 javascript 的灵活性，你可能在编程阶段还无法确定类型，可能来自动态内容，用户输入，以及第三方库。
 * 不要全部使用any 类型，这样的话 typescript 就失去了其存在的价值
 */
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // okay, definitely a boolean

/**
 * Void 类型
 * void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
 */

function voidFn (): void { }
let unusable: void
unusable = undefined

// tsconfig 中指定严格的 strictNullChecks 为 true 时报错
// unusable = null

/**
 * Null 和 Undefined 类型
 * TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大
 * 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
 * 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自，这能避免 很多常见的问题。
 * 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
 */

// Not much else we can assign to these variables!
let u: undefined
u = undefined
let n: null = null

/**
 * Never 类型
 * 没有终点的函数返回值
 */
const errorFunc = (message:string):never => {
  throw Error(message)
}

const infiniteFunc = ():never => {
  // eslint-disable-next-line no-empty
  while (true) { }
}

/**
 * Object 类型
 * object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
 */
// object
let obj = {
  name: 'wujc'
}
let obj2 = obj
obj2.name = 'L'
// console.log(obj)
function getObject (obj: object): void {
  // console.log(obj)
}
getObject(obj2)

/**
 * 类型断言
 */
const getLength = (target: string | number): number => {
  // 在 jsx 语法中 只能使用 as
  if ((target as string).length || (target as string).length === 0) {
    return (target as string).length
  } else {
    return target.toString().length
  }
}
