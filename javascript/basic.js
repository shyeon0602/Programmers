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
