/**
 * 字面量类型
 */

let str = 'wujc'

const str1 = 'wujc'

type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

class UIElement {
  animate (dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      console.log('ease-in')
    } else if (easing === 'ease-out') {
      console.log('ease-out')
    } else if (easing === 'ease-in-out') {
      console.log('ease-in-out')
    } else {
      // It's possible that someone could reach this
      // by ignoring your types though.
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
// error
// button.animate(0, 0, 'uneasy')

// you can pass any of three allowed strings, but any other string will give error

interface ValidationSuccess {
  isValid: true;
  reason: null;
}

interface ValidationFailure {
  isValid: false;
  reason: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;

const forVaidateRes: ValidationResult = {
  isValid: true,
  reason: null
}
