/**
 * 装饰器
 * javascript 中装饰器目前尚处提案阶段
 * typescript 中装饰器以作为实验性质特性予以支持
 * 需在 tsconfig 中开启 experimentalDecorators
 * 装饰器从后往前执行
 * 装饰器工厂先执行获取相应的装饰器后，从后往前执行装饰器
 */

// 注意执行顺序
// function setName () {
//   console.log('get setName')
//   return (target) => {
//     target.name = 'name'
//     console.log('setName')
//   }
// }
// function setAge () {
//   console.log('get setAge')
//   return (target) => {
//     target.age = 18
//     console.log('setAge')
//   }
// }
// @setName()
// @setAge()
// class ClassDec {}

/**
  * 类装饰器
  * 类装饰器在类定义之前定义，装饰器必须紧挨着类的定义调用
  * 累装饰器会在类定义的时候被当作函数调用，唯一的参数是当前装饰的这个类
  */

// function getName1 (contructor) {
//   contructor.prototype.name = 'wujc'
// }
// // 装饰器，在构造器的原型链上面添加name 属性，生成的实例的__proto__上面都会有该属性
// // 类的实例上的 __proto__ 指向构造器的原型 prototype
// @getName1
// class ClassA { }
// // 接口和类声明合并，为装饰器添加的name 属性创建类型声明
// interface ClassA {
//   name: string
// }
// const classA = new ClassA()
// console.log(classA.name)
// console.log(classA)

/**
 * 装饰器修改类的定义
 */

// function classDecorator<T extends new (...args: any[]) => {}>(target: T) {
//   console.log('装饰器执行')

//   return class extends target {
//     public newProperty = 'new property'
//     public hello = 'override'
//   }
// }
// // function classDecorator(target: any): any {
// //     return class {
// //         public newProperty = 'new property'
// //         public hello = 'override'
// //     }
// // }
// @classDecorator
// class Greeter {
//   public property = 'property'
//   public hello: string
//   constructor (m: string) {
//     this.hello = m
//     console.log(m)

//     console.log('constructor', this)
//   }
// }
// console.log(new Greeter('world'))

// class Asd extends Greeter {
//   constructor () {
//     super('asdf')
//   }
// }

/**
 * 方法装饰器
 * 方法装饰器接受三个参数
 * target: any, propertyName: string, descriptor: PropertyDescriptor
 * 方法装饰器如果返回对象，则作为方法的属性描述符。
 */

// es5 dinfineProperty 定义一个对象上面的属性，以及属性的 value，writeable,enumerable,configurable
// interface ObjWithAnyKeys {
//     [key: string]: any
// }
// let obj12: ObjWithAnyKeys = {
//   age: 18
// }
// Object.defineProperty(obj12, 'name', {
//   value: 'lison',
//   writable: false,
//   // 可配置设置为false之后就没办法在配置该属性
//   configurable: false,
//   enumerable: true
// })
// Object.defineProperty(obj12, 'name', {
//     value: 'lison',
//     writable: true,
// })
// console.log(obj12.name)
// obj12.name = 'test'
// console.log(obj12.name)
// for (const key in obj12) {
//     console.log(key)
// }

function enumerable (bool: boolean) {
  return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
    console.log(target, propertyName)
    descriptor.enumerable = bool
  }
}
// 装饰器函数如果返回一个对象，则把该对象作为装饰器对象实施
// function enumerable (bool: boolean): any {
//   return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
//     return {
//       value () {
//         return 'not age'
//       },
//       enumerable: bool
//     }
//   }
// }
class ClassF {
  constructor (public age: number) {
    console.log(23)
  }

  @enumerable(false)
  public getAge () {
    return this.age
  }
}
const classF = new ClassF(18)
console.log(classF.getAge())
for (const key in classF) {
  console.log(key)
}

/**
 * 访问器装饰器
 * 访问器装饰器不允许同时装饰 set get ，只能把set get 方法应用同一个装饰器
 * 访问器装饰器接受三个参数
 * target: any, propertyName: string, descriptor: PropertyDescriptor
 * 方法装饰器如果返回对象，则作为方法的属性描述符。
 */

function enumerable1 (bool: boolean) {
  return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
    descriptor.enumerable = bool
  }
}
class ClassG {
    private _name: string
    constructor (name: string) {
      this._name = name
    }

    @enumerable1(true)
    get name () {
      return this._name
    }

    set name (name) {
      this._name = name
    }
}
const classG = new ClassG('lison')
for (const key in classG) {
  console.log(key)
}

/**
 * 属性修饰器
 * 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
 * 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 成员的名字。
 * 注意
 * 属性描述符不会做为参数传入属性装饰器，这与TypeScript是如何初始化属性装饰器的有关。
 * 因为目前没有办法在定义一个原型对象的成员时描述一个实例属性，并且没办法监视或修改一个属性的初始化方法。
 * 返回值也会被忽略。因此，属性描述符只能用来监视类中是否声明了某个名字的属性。
 */

function printPropertyName (target: any, propertyName: string) {
  console.log(propertyName)
}
class ClassH {
    @printPropertyName
    public name: string
}

/**
 * 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
 * 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * 2.成员的名字。
 * 3.参数在函数参数列表中的索引。
 * 参数装饰器的返回值会被忽略
 * 用法：校验参数
 */

function required (target: any, propertName: string, index: number) {
  console.log(`修饰的是${propertName}的第${index + 1}个参数`)
}
class ClassI {
  public name: string = 'lison'
  public age: number = 18
  public getInfo (prefix: string, @required infoType: string): any {
    return prefix + ' ' + this[infoType]
  }
}
interface ClassI {
  [key: string]: string | number | Function
}
const classI = new ClassI()
classI.getInfo('hihi', 'age')
