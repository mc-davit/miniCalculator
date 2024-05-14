const {
    clear,
    allClear,
    dot,
    neg,
    sqrt,
    pow2,
    pow,
    prcent,
    equal,
    add,
    subtract,
    divide,
    multiply,
    opParent,
    clParent
  } = require('../calculator'); // Adjust the path to your calculator file
  
  // Example unit tests
  test('clear function should remove the last character from the input', () => {
    let numEl = { value: '123' };
    clear(numEl);
    expect(numEl.value).toBe('12');
  });
  
  test('allClear function should reset the input and sum elements', () => {
    let numEl = { value: '123' };
    let sumEl = { innerHTML: '= 456' };
    allClear(numEl, sumEl);
    expect(numEl.value).toBe('');
    expect(sumEl.innerHTML).toBe('');
  });
  
  // Write more tests for other functions similarly  