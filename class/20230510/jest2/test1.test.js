const shoppingList = [
  '바나나',
  '우유',
  '간장',
  '버섯',
  '라면',
  '부추'
];

test("쇼핑리스트에 우유가 있는지 확인", ()=>{
  // 배열안에 해당 내용이 포함되어 있으면 pass
  expect(shoppingList).toContain("우유");
  // length 확인
  expect(shoppingList.length).toBe(6);
  // 이터러블 개체
  expect(new Set(shoppingList)).toContain("라면");
  // 이더러블 타입 검사
  // expect(typeof shoppingList).toBe("object");
});