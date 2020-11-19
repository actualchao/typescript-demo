enum Bool {
  NO,
  YES
}

// console.log(Bool.NO)
/**
 * 异构枚举断开自动递增
 */
enum OtherV {
  up = 0,
  down = 0,
  left = 'left',
  right = 0,
  big,
  asdf,

}

function getV () {
  return 6
}

// console.log(OtherV.big)

/**
 * 取值函数必须写在默认的后面
 */
enum OtherG {
  up,
  down,
  left = getV(),
}

// console.log(OtherG.left)

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c: Circle = {
  kind: 4,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100
}

console.log(c.kind)
