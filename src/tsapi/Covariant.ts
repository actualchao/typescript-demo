
/**
 * 函数参数双向协变
 * 当比较函数参数类型时，只有当源函数参数能够赋值给目标函数或者反过来时才能赋值成功。
 * 这是不稳定的，因为调用者可能传入了一个具有更精确类型信息的函数，
 * 但是调用这个传入的函数的时候却使用了不是那么精确的类型信息。
 * 实际上，这极少会发生错误，并且能够实现很多JavaScript里的常见模式。
 */
interface SuperType {
  base: string;
}
interface SubType extends SuperType {
  addition: string;
};

// subtype compatibility
// 内容兼容性
let superType: SuperType = { base: 'base' }
let subType: SubType = { base: 'myBase', addition: 'myAddition' }
superType = subType

// Covariant
// 内容协变
type Covariant<T> = T[];
let coSuperType: Covariant<SuperType> = []
let coSubType: Covariant<SubType> = []
coSuperType = coSubType

// Contravariant --strictFunctionTypes true
// 类型逆变
type Contravariant<T> = (p: T) => void;
let contraSuperType: Contravariant<SuperType> = function (p) {}
let contraSubType: Contravariant<SubType> = function (p) {}
contraSubType = contraSuperType

// Bivariant --strictFunctionTypes false
// 双向协变
type Bivariant<T> = (p: T) => void;
let biSuperType: Bivariant<SuperType> = function (p) {}
let biSubType: Bivariant<SubType> = function (p) {}
// both are ok
biSubType = biSuperType
biSuperType = biSubType

// Invariant --strictFunctionTypes true
// 类型不变
type Invariant<T> = { a: Covariant<T>, b: Contravariant<T> };
let inSuperType: Invariant<SuperType> = { a: coSuperType, b: contraSuperType }
let inSubType: Invariant<SubType> = { a: coSubType, b: contraSubType }
// both are not ok
// inSubType = inSuperType
inSuperType = inSubType
