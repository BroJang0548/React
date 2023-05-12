describe('연속된 값 필터 테스트', () => { 
  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));

  test("테스트 결과", ()=>{
    expect(result).toEqual([11]);
  })

  test("테스트 시 호출한 값들", ()=>{
    expect(filterTestFn.mock.calls).toEqual([[11], [12]]);
  })

})

describe("서버에서 받아온 객체의 name 의 값은 Mike", ()=>{
  const mockFn = jest.fn();
  // 임의의 데이터를 설정
  mockFn.mockResolvedValue({name : "Mike"});

  test("받아온 이름은 Mike",()=>{
    mockFn().then(res => { expect(res.name).toBe("Mike")})
  });
});