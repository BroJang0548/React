const forEachTx = require("./test6");

describe("forEachTx 테스트를 위한 mock function 제작",() => {

  // mock function 제작
  const mockCallback = jest.fn(x => 42 + x);
  // 배열을 통한 mock function 호출
  forEachTx([0, 1], mockCallback);

  test("mf 두번 호출 됨(1)", ()=> {
    expect(mockCallback.mock.calls.length).toBe(2);
  });
  test("mf 두번 호출 됨(2)", ()=> {
    expect(mockCallback.mock.calls).toHaveLength(2);
  });
  test("mf 처음 호출 시 첫번째 매개변수가 0", ()=> {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
  });
  test("mf 두번째 호출 시 첫번째 매개변수가 1", ()=> {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
  });
  test("mf 마지막 호출 시 첫번째 매개변수가 1", ()=> {
    expect(mockCallback.mock.lastCall[0]).toBe(1);
  });
  test("첫번째 function 호출 시 리턴값이 42", ()=> {
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});