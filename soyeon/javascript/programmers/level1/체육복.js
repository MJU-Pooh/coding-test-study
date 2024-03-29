// 1명 이상 n명 이하의 학생이 체육복을 도난당함
// 여벌의 체육복을 가져온 학생희 수는 1명 이상 n명 이하
// 여벌 체육복이 있는 학생만 다른 학생에게 빌려줄 수 있음
// 여벌 체육복이 있는 학생도 도난당할 수 있음=>이땐 빌려줄 수 없음
// 체육 수업을 들을 수 있는 학생의 최대값 리턴

function solution(n, lost, reserve) {
  // 여분 있음 + 잃어버림 공통인 애들 거르기
  let lost_student = lost.filter((v) => !reserve.includes(v)).sort();
  let reserve_student = reserve.filter((v) => !lost.includes(v)).sort();

  for (let i = 0; i < reserve_student.length; i++) {
    if (lost_student.includes(reserve_student[i] - 1)) {
      lost_student = lost_student.filter((v) => v !== reserve_student[i] - 1);
    } else if (lost_student.includes(reserve_student[i] + 1)) {
      lost_student = lost_student.filter((v) => v !== reserve_student[i] + 1);
    }
  }

  return n - lost_student.length;
}

// 이거 왜 안댐
// 반례로 나오는건 다 추가해서 통과하는데도 왜 안됌
// function solution(n, lost, reserve) {
//     let answer = n;
//     let students = {};

//     lost.sort((a, b) => a-b);
//     reserve.sort((a, b) => a-b);

//     for(let i = 1; i < n+1; i++){
//         if(!students[i]){
//             students[i] = 1;
//         }
//     }

//     lost.forEach((el) => {
//         if(students[el]){
//             students[el] -= 1;
//         }
//     })

//     reserve.forEach((re) => {
//         if(students[re] >= 0){
//             students[re] += 1;
//         }
//     })
//     console.log(students);

//     let zero_cnt = 0;
//     let re_cnt = 0;
//     for(let i = 1; i < n+1; i++){
//         if(students[i] === 0){
//             zero_cnt += 1;
//         }else if(students[i] === 2){
//             re_cnt += 1;
//         }
//     }
//     console.log(re_cnt, zero_cnt);

//     if(zero_cnt <= re_cnt){
//         return n;
//     }else{
//         return n-(zero_cnt - re_cnt);
//     }
// }
