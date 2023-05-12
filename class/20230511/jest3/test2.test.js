describe('mock 함수 리턴 타입 테스트', () => { 
  const myMock = jest.fn();
  // test('myMock안에 함수가 있는지 없는지 확인', () => { 
  //   expect(myMock()).toEqual(undefined);
  // });

  // 리턴타입을 중간에 10, 'x', true로 삽입
  // 단 맨 끝의 리턴은 계속 출력되도록
  myMock.mockReturnValueOnce(10).mockReturnValueOnce("x").mockReturnValue(true);

  test("첫번째 호출 시 리턴 값 10", ()=>expect(myMock()).toBe(10));
  test("두번째 호출 시 리턴 값 'x'", ()=>expect(myMock()).toBe('x'));
  test("세번째 호출 시 리턴 값 true", ()=>expect(myMock()).toBeTruthy());
  test("나머지 호출 시 리턴 값 true", ()=>expect(myMock()).toBeTruthy());
  // 연속적으로 값을 전달하는 코드에서 임의로 시나리오를 지정해서 사용할 경우 유용
  // 실제 함수를 굳이 사용할 필요가 없다
  
});