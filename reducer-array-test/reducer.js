import deepFreeze from 'deep-freeze';
import { expect } from 'chai'; 

const immutable = (obj, index) => {
  return Object.assign({}, obj, {
    foo: [
      ...obj.foo.slice(0, index),
      obj.foo[index] + 1,
      ...obj.foo.slice(index + 1)
    ] 
  });
};

const notImmutable = (obj, index) => {
  let copiedObj = Object.assign({}, obj);
  copiedObj.foo[index] = copiedObj.foo[index] + 1
  console.log(copiedObj, obj);  // oops.. [0, 11, 30]
  return copiedObj;
}

describe('immutable array', () => {
  it('immutable test', () => {
    const complexListBefore = {
      foo: [0, 10, 30]
    };
    const complexListAfter = {
      foo: [0, 11, 30]
    };
    
    deepFreeze(complexListBefore);
    
    expect(
      immutable(complexListBefore, 1)
    ).to.deep.equal(complexListAfter);
  });
  
  // will be test error
  it('not immutable test', () => {
    const complexListBefore = {
      foo: [0, 10, 30]
    };
    const complexListAfter = {
      foo: [0, 11, 30]
    };
    
    deepFreeze(complexListBefore);
    
    expect(
      notImmutable(complexListBefore, 1)
    ).to.deep.equal(complexListAfter);
  });
});