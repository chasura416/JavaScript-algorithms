function solution(num_list) {
    let res1 = 0;
    let res2 = 1;
    for(let i=0; i<num_list.length; i++) {
        res1 += num_list[i];
        res2 *= num_list[i];
    }
    return res2 < res1**2 ? 1 : 0;
}