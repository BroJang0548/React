describe("mock property 예제", ()=>{
  const myMock = jest.fn(function(_name){
    this.name = _name;
  });

  test('new로 선언한 mock function을 사용한 인스턴스 객체들을 가지고 있음', () => { 
    const a = new myMock("a function");
    const b = {};
    const bound = myMock.bind(b);
    bound("b function");

    // 첫번째 mock function 인스턴스가 a와 같음(1)
    expect(myMock.mock.instances[0]).toEqual(a);
    // 첫번째 mock function 인스턴스가 a와 같음(2)
    expect(myMock.mock.instances[0]).toBe(a);
    // 두번째 mock function 인스턴스가 b와 같음
    expect(myMock.mock.instances[1]).toEqual(b);
    // mock function을 통해 생성한 인스턴스 갯수가 2개
    expect(myMock.mock.instances.length).toBe(2);
    // mock function의 첫번째 인스턴스의 name 속성의 값이 a function
    expect(myMock.mock.instances[0].name).toBe("a function");
    // mock function의 두번째 인스턴스의 name 속성의 값이 b function
    expect(myMock.mock.instances[1].name).toBe("b function");
  })
})