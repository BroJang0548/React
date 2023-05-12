const fn = require("./test4");

// ./test4를 바탕으로 클로닝 모듈
jest.mock("./test4");

fn.createUser.mockReturnValue({name:"Mike"});

test("유저가 누군지 테스트", ()=>{
  const user = fn.createUser("Mike");
  expect(user.name).toBe("Mike");
})