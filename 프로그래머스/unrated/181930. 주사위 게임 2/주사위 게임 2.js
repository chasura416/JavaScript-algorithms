function solution(a, b, c) {
    let answer = 0;
    res1 = (a + b + c);
    res2 = (a**2 + b**2 + c**2); 
    res3 = (a**3 + b**3 + c**3);
    if(a===b && b ===c && a===c){
        answer = res1 * res2 * res3;
    }
    else if (a===b || b===c || a===c){
        answer = res1 * res2;
    }
    else {
        answer = res1;
    }
    return answer;
}