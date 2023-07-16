// function solution(arr, queries) {
//     let answer = [];
//     let tmp = [];
//     let res = [1000001];
//     for (let i = 0; i < queries.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] >= queries[i][2]) {
//                 arr[j] > queries[i][2] ? tmp.splice(0, 1, arr[j]) : tmp.splice(0, 1, -1);
//                 if(Number(tmp) < Number(res)) {
//                   res.splice(0,1, tmp);
//                 }
//             }   
//         }
//         arr.pop();
//         answer.push(Number(res));
//       }
//     return answer;
// }


function solution(arr, queries) {
  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    const [start, end, k] = queries[i];
    let minValue = Infinity;
    let exists = false;

    for (let j = start; j <= end; j++) {
      if (arr[j] > k && arr[j] < minValue) {
        minValue = arr[j];
        exists = true;
      }
    }

    if (exists) {
      answer.push(minValue);
    } else {
      answer.push(-1);
    }
  }

  return answer;
}
