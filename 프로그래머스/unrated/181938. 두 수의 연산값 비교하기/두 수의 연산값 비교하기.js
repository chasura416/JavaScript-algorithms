function solution(a, b) {
    res1 = a.toString() + b.toString(); 
    res2 = 2 * a * b;
    return Number(res1) > res2 ? Number(res1) : res2;
}