const fn = require("./test3");

// return 을 쓰지 않고 할 경우에는 제대로된 결과가
// 리턴되지 않으므로 주의할 것
test("3초 뒤 받아온 나이는 20(1)", ()=>{
  return fn.getAge1().then(age => {
    expect(age).toBe(20);
  })
});

// resolves 를 활용한 테스팅이 가능함
test("3초 뒤 받아온 나이는 20(2)", ()=>{
  return expect(fn.getAge1()).resolves.toBe(20);
});

// rejects 사용 예제
test("3초 뒤 받아온 나이는 20(reject)", ()=>{
  return expect(fn.getAge2()).rejects.toMatch(/error/);
})

// async 예제1
test("3초 뒤 받아온 나이는 20(async1)", async ()=>{
  await expect(fn.getAge1()).resolves.toBe(20);
});

// async 예제2
test("3초 뒤 받아온 나이는 20(async2)", async ()=>{
  const age = await fn.getAge1();
  expect(age).toBe(20);
});