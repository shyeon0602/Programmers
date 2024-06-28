// 수열과 구간 쿼리4
// queries -> [start, end, divisor], arr[i]에서 i가 start과 end 사이의 숫자이면서 divisor의 배수일 때 arr[i]에 1을 더함
// query의 값인 start부터 end 사이의 숫자 중에서 divisor의 배수여야 함 -> i를 divisor로 나눈 나머지가 0
function solution(arr, queries) {
  for (const query of queries) {
    // query 구조분해할당 -> 각 value마다 변수명을 할당함
    const [start, end, divisor] = query;
    for (let i = start; i < end; i++) {
      if (i % divisor == 0) arr[i]++;
    }
  }
  return arr;
}

// forOf 조건문 안에서 query 구조분해할당
function solution(arr, queries) {
  for (const [start, end, divisor] of queries) {
    for (let i = start; i < end; i++) {
      if (i % divisor == 0) arr[i]++;
    }
  }
  return arr;
}

// 배열 만들기2
// l과 r 사이의 정수 중에서 0과 5로만 이루어진 숫자, 오름차순 정렬, 없으면 -1 반환
function solution(l, r) {
  let arr = [];
  for (let i = l; i <= r; i++) {
    let str = String(i);
    if (str.split("").every((char) => char == "5" || char == "0")) arr.push(i);
  }
  return arr.length > 0 ? arr : [-1];
}

// 이진수로 접근해서 작성한 코드 -> generator 및 코드 분석 필요
// generator 이해 필요
// function* : generator 함수 정의
function* gen50() {
  // i는 반복횟수를 제어하기 위한 변수, 무한루프를 사용하기 위해서 반복을 제어하는 변수 필요
  let i = 1;

  // next() 메서드를 호출할 때마다 무한루프 수행
  while (true) {
    // Number.toString(2): 숫자를 인자에 맞는 진법으로 변환하여 문자열을 반환 (2진법 문자열을 반환함)
    // 2진법 -> 1과 0을 반환, 5를 곱해서 5와 0을 반환
    // yield 키워드: 함수의 실행을 멈추고 값을 호출자에게 반환, generator 함수의 상태 기억
    yield Number(Number(i).toString(2)) * 5;
    i++;
  }
}
function solution(l, r) {
  // 이터레이터(iterator) n, iterator는 next() 메서드를 사용해서 generator 함수실행 제어
  const n = gen50();
  let a = 0;
  const arr = [];

  while (a < l) {
    // next() 메서드: 호출자가 next() 메서드를 호출하여 다음 값 요청 -> generator 함수는 이전 상태부터 다시 실행
    // n.next()를 호출하면 iterator 객체 n에서 {value: ... , done: ... } 형태를 반환 -> value 속성은 iterator가 반환하는 값
    a = n.next().value;
  }
  while (a <= r) {
    arr.push(a);
    a = n.next().value;
  }

  return arr.length ? arr : [-1];
}

// 카운트업
function solution(start_num, end_num) {
  let arr = [];
  for (let i = start_num; i <= end_num; i++) arr.push(i);

  return arr;
}

// 콜라츠 수열 만들기
// 짝수일 때 -> 2로 나누기, 홀수일 때 -> 3x + 1 계산, 계산과정 및 결과값을 배열로 반환
function solution(n) {
  let arr = [];
  while(n!=1){
    arr.push(n);
    if(n%2 == 0) n = n/2;
    else n = 3 * n + 1;
  }
  arr.push(1);
  return arr;
}

// 다른 사람 풀이
// 재귀 사용
function solution(n, arr = []) {
  arr.push(n)
  if (n === 1) return arr
  if (n % 2 === 0) return solution(n / 2, arr)
  return solution(3 * n + 1, arr)
}