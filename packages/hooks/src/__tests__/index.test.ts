import * as cyHooks from '..';

// 断言
describe('cyHooks', () => {
  test('导出的hooos是可以用的', () => {
    Object.keys(cyHooks).forEach((module) => {
      expect(cyHooks[module]).toBeDefined();
    });
  });
});
