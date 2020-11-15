
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
let array2: Array<string | number> = [2, 3, 4, '123']

/**
 * 元组 Tuple
 * 表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 * 访问越界索引时使用联合类型推导
 */
let tuple:[number, string] = [123, '25']
// Error
// tuple = ['123', 123]

/**
 * 枚举类型 enum
 * enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 * 枚举类型提供的一个便利是你可以由枚举的名字获取值，也可以由值获取名字
 */

enum Index1 { aa, bb, cc, }
let index:Index1 = Index1.bb
console.log(index) // 1

// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：
enum Index2 {aa=1, bb, cc}
let index2 :Index2 = Index2.bb
console.log(index2)// 2

// 可以指定所有的成员的数值
enum Index3 {aa=2, bb=4, cc=6}

/**
 * any 类型
 * 有时候由于 javascript 的灵活性，
 */
