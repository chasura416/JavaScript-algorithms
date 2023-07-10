function solution(a, b) {
    a = a.toString();
    b = b.toString();
    
    res1 = a + b;
    res2 = b + a;
    
    return Number(res1) > Number(res2) ? Number(res1) : Number(res2);
}