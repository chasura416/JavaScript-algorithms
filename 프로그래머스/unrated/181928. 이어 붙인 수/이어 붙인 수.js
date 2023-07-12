function solution(num_list) {
    let res1 = [];
    let res2 = [];
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i]%2 === 0){
            res1 += num_list[i];
        } else res2 += num_list[i];
    }
    return Number(res1) + Number(res2);
}