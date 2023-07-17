function solution(l, r) {
    let answer = [];
    for(let i = l; i <= r; i++){
        if(String(i).split('').every(x => x === '5' || x === '0')) {
            answer.push(i);
        }
    }
    return answer.length > 0 ? answer : [-1]; 
}
