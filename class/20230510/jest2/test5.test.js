const obj = require("./test5");

beforeAll(()=>console.log("밖 beforeAll")); // 1
afterAll(()=>console.log("밖 afterAll")); // 12
beforeEach(()=>console.log("밖 beforeEach")); // 2, 6
afterEach(()=>console.log("밖 afterEach")); // 4, 10

test("이름은 bro 입니다.",()=>{
  expect(obj.user.name).toMatch(/^kgh$/); // 3
});
// test("나이는 30 입니다.",()=>{
//   expect(obj.user.age).toBe(30);
// });

describe("차에 대한 검증", ()=>{
  beforeAll(()=>console.log("안 beforeAll")); // 5
  afterAll(()=>console.log("안 afterAll")); // 11
  beforeEach(()=>console.log("안 beforeEach")); // 7
  afterEach(()=>console.log("안 afterEach")); // 9

  test("차의 브랜드는 기아입니다",()=>{
    expect(obj.user.car.brand).toMatch(/기아/); // 8
  })
})
