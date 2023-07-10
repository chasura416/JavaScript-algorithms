function solution(n) {
    let res1 = 0;
    let res2 = 0;
    
    for(let i = 0; i <= n; i++) {
       if(i%2 === 1) {
           res1 += i;
       } else {
         res2 += Math.pow(i,2);  
       }
    }
    
    return n%2===1 ? res1 : res2;
}