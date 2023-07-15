function solution(numLog) {
    let answer = '';
    for(let i = 0; i < numLog.length; i++) {
        switch (numLog[i+1] - numLog[i]) {
            case 1 :
                numLog.splice(i, 1, 'w');
            break;
            case -1 :
                numLog.splice(i, 1, 's');
            break;
            case 10 :
                numLog.splice(i, 1, 'd');
            break;
            case -10 :
                numLog.splice(i, 1, 'a');
            break;
        }
    }
    numLog.pop()
    return numLog.join('');
}