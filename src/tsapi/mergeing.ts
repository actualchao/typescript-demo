
/**
 * 声明合并
 * 1.接口合并
 * 2.命名空间之间的合并
 * 3. class 和命名空间的合并，class 必须写在 namespace 之前
 * 4. function 和 namespace 之间的合并， function 写在 namespace 之前
 * 5. enum 和 namespace 的合并，先后顺序不影响，这种合并实现了枚举类型的扩展。
 */

interface InfoInter {
  name: string;
  getRes(input: string): number
}
interface InfoInter {
  name: string
  getRes(input: number): string
}
let infoInter: InfoInter
infoInter = {
  name: 'lison',
  getRes (text: any): any {
    if (typeof text === 'string') { return text.length } else { return String(text) }
  }
}
// console.log(infoInter.getRes('123'))

// namespace Validations {
//     export const numberReg = /^[0-9]+$/
//     export const checkNumber = () => {}
// }
// namespace Validations {
//     console.log(numberReg)
//     export const checkLetter = () => {}
// }

// class Validations {
//     constructor() {}
//     public checkType() {}
// }
// namespace Validations {
//     export const numberReg = /^[0-9]+$/
// }
// console.dir(Validations.numberReg)

function countUp () {
  countUp.count++
}
namespace countUp {
  export let count = 0
}
// console.log(countUp.count)
// countUp()
// console.log(countUp.count)
// countUp()
// console.log(countUp.count)

enum Colors {
  red,
  green,
  blue,
}
namespace Colors {
  export const yellow = 3
}
console.log(Colors)
