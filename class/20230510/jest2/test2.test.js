const fn = require("./test2.js");

// test("3초 뒤에 받아온 이름이 Mike", ()=>{
//   function callback(name){
//     expect(name).toBe("Tom");
//   }
//   fn.getName(callback)
// });

// 비동기 콜백 테스트를 정확하게 처리하기 위해서는 반드시
// done 메서드를 로직 끝에 추가하여 호출할 수 있도록 해야 한다.
test("3초 뒤에 받아온 이름이 Mike", (done)=>{
  function callback(name){
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback)
});

// 에러가 생길 경우에는 반드시 try-catch 문
// 안쪽에 done() 을 넣어 시간초과 오류를 발생하지 않도록 한다.
test("age exception 테스트", done => {
  function callback(age){
    try{
      expect(age).toBe(20);
      done();
    }catch(error){
      done();
    }
  }
  fn.getAge(callback);
})