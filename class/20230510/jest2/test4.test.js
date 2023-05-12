const sum = require("./test4");

let num = 1;

// 테스트 전에 단 한번만 실행되는 함수
beforeAll(()=>{
  console.log("모든 로직 실행 준비 완료");
});

// 테스트가 다 끝나고 단 한번만 실행되는 함수
afterAll(()=>{
  console.log("모든 로직 실행 완료");
})

// 테스트 로직에 대한 전처리를 수행할 때 사용되는 함수
beforeEach(()=>{
  num = 1;
});

// 테스트가 실행되고 난 후 수행되는 함수
afterEach(()=>{
  console.log("로직 실행 완료");
});

test("1더하기 1은 2입니다.", ()=>{
  num = sum(num, 1);
  expect(num).toBe(2);
})

test("1더하기 2는 3입니다.", ()=>{
  num = sum(num, 2);
  expect(num).toBe(3);
})

// test("1더하기 3는 4입니다.", ()=>{
//   num = sum(num, 3);
//   expect(num).toBe(4);
// })

// 해당 테스트를 스킵하도록 정의
test.skip("1더하기 3는 4입니다.", ()=>{
  num = sum(num, 3);
  expect(num).toBe(4);
})

test("1더하기 4는 5입니다.", ()=>{
  num = sum(num, 4);
  expect(num).toBe(5);
})

// 해당 테스트만 실행시키고 싶을 경우
// test.only("1더하기 4는 5입니다.", ()=>{
//   num = sum(num, 4);
//   expect(num).toBe(5);
// })



