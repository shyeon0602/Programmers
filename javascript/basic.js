// 코딩 기초 트레이닝

// 등차수열의 특정한 항만 더하기
function solution(a, b, included) {
  let includedSum = 0;
  for (let i = 0; i < included.length; i++) {
    if (i == 0) a;
    else a += b;
    if (included[i] == true) includedSum += a;
  }
  return includedSum;
}

// 주사위 게임2
function solution(a, b, c) {
  // 세 숫자가 모두 다를 때 -> a + b + c
  if (a != b && a != c && b != c) return a + b + c;
  // 세 숫자가 모두 같을 때 -> (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )
  else if (a == b && b == c)
    return (
      (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    );
  // 두 숫자는 같고, 숫자 하나는 다를 때 -> (a + b + c) × (a2 + b2 + c2 )
  else return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}

// 원소들의 곱과 합
function solution(num_list) {
  // 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1 반환, 아니면 0 반환
  let multiply = 1;
  let sum = 0;
  for (let num of num_list) {
    multiply *= num;
    sum += num;
  }
  return multiply < Math.pow(sum, 2) ? 1 : 0;
}

// 이어 붙인 수
function solution(num_list) {
  // 홀수를 이어붙인 수 + 짝수를 이어붙인 수
  let odd = "",
    even = "";
  for (let num of num_list) {
    num = String(num);
    num % 2 == 0 ? (even += num) : (odd += num);
  }
  return Number(even) + Number(odd);
}

// 마지막 두 원소
function solution(num_list) {
  let lastNum = num_list[num_list.length - 1];
  let secondBackNum = num_list[num_list.length - 2];
  lastNum > secondBackNum
    ? num_list.push(+lastNum - +secondBackNum)
    : num_list.push(+lastNum * 2);
  return num_list;
}

// 마지막 두 원소 코드 -> 구조분해할당 사용
function solution(num_list) {
  const [a, b] = [...num_list].reverse();
  return [...num_list, a > b ? a - b : a * 2];
}

// 수 조작하기1
/* 
"w" : n이 1 커집니다.
"s" : n이 1 작아집니다.
"d" : n이 10 커집니다.
"a" : n이 10 작아집니다.
*/
function solution(n, control) {
  let controlArr = [...control];
  controlArr.map((char) => {
    if (char == "w") n++;
    if (char == "s") n--;
    if (char == "d") n += 10;
    if (char == "a") n -= 10;
  });
  return n;
}

// 수 조작하기1 -> 객체 사용 및 reduce 사용
// 객체 사용해서 문자별 계산 함수 작성
// 객체에서는 증감연산자, 할당연산자 사용x
const operations = {
  w: (num) => num + 1,
  s: (num) => num - 1,
  d: (num) => num + 10,
  a: (num) => num - 10,
};
function solution(n, control) {
  // reduce() 사용 -> 현재 값을 파라미터로 전달해서 객체에서 계산함수 실행
  return [...control].reduce((acc, char) => operations[char](acc), n);
}

// 수 조작하기2
const obj = {
  w: 1,
  s: -1,
  d: 10,
  a: -10,
};
function solution(numLog) {
  return numLog.reduce((acc, cur, idx, arr) => {
    // index가 0일 때, 함수 실행x -> acc 빈값 반환
    if (idx == 0) return acc;
    const diff = cur - arr[idx - 1];
    // find(), object key값 사용
    let key = Object.keys(obj).find((k) => obj[k] == diff);
    if (key) acc += key;
    return acc;
  }, "");
}

// 수열과 구간 쿼리3
function solution(arr, queries) {
  // arr[i]와 arr[j] 값을 바꿈
  // forEach(), 구조분해할당 사용
  queries.forEach(([i, j]) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });
  // forEach() -> 본래 배열 직접 수정, map() -> 새로운 배열 생성
  return arr;
}

// 수열과 구간 쿼리2
// query의 마지막 요소보다 크면서 가장 작은 arr[i] 값
// query = [s, e, k]
function solution(arr, queries) {
  let result = [];
  queries.forEach(([s, e, k]) => {
    // .slice() -> s부터 e까지 부분배열 추출, filter() -> 조건 확인 및 새로운 배열 반환
    let filter = arr.slice(s, e + 1).filter((num) => num > k);
    // 필터링된 배열이 비어있으면 infinity 반환 -> 빈 배열인지 확인하고 빈 배열은 -1 반환
    filter.length > 0
      ? result.push(Math.min.apply(Math, filter)) // 배열에서 Math.min 사용하기 위해서 .apply(Math, 배열명) 입력 필요
      : result.push(-1);
  });
  return result;
}

// 수정필요한 코드
function solution(arr, queries) {
  let result = [];
  queries.forEach(([s, e, k]) => {
    console.log([s, e, k]);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i >= s && i <= e && arr[i] > k) newArr.push(arr[i]);
      else newArr.push(-1);
      console.log(k, newArr, Math.min.apply(Math, newArr));
    }
    return result.push(Math.min.apply(Math, newArr));
  });
  return result;
}

// 수정한 코드
function solution(arr, queries) {
  let result = [];

  queries.forEach(([s, e, k]) => {
    let min = Infinity; // 가장 작은 값을 저장할 변수를 초기화합니다.

    // 주어진 범위 [s, e] 내에서 k보다 큰 값 중 가장 작은 값을 찾습니다.
    for (let i = s; i <= e; i++) {
      if (arr[i] > k && arr[i] < min) {
        min = arr[i];
      }
    }

    // 가장 작은 값을 결과 배열에 추가합니다. 필터링된 배열이 비어 있는 경우에는 -1을 추가합니다.
    result.push(min === Infinity ? -1 : min);
  });

  return result;
}

// 참고할만한 코드
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
