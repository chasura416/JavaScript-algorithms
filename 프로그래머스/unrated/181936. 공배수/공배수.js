function solution(number, n, m) {
    a = number%n;
    b = number%m;
    let answer = a === 0 && b === 0 ? 1 : 0;
    return answer;
}