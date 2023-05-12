const mockFn = jest.fn();

mockFn(10, 20);
mockFn(5, 10);
mockFn(30, 40);

test("한번 이상 호출 되었는가?", ()=>expect(mockFn).toHaveBeenCalled());
test("정확히 3번 호출 되었는가?", ()=>expect(mockFn).toHaveBeenCalledTimes(3));
test("10, 20을 전달받은 함수가 있는가?", ()=>expect(mockFn).toHaveBeenCalledWith(10, 20));
test("30, 40을 전달받은 함수가 있는가?", ()=>expect(mockFn).toHaveBeenCalledWith(30, 40));
test("두번째 호출된 함수는 5, 10을 전달 받았는가?", ()=>expect(mockFn).toHaveBeenNthCalledWith(2, 5, 10));
test("마지막 함수는 30, 40을 전달 받았는가?", ()=>expect(mockFn).toHaveBeenLastCalledWith(30 , 40));
