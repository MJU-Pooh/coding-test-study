// 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 리턴
// 고유 번호는 곧 인덱스
// 장르 별로 가장 많이 재생된 노래를 최대 두 개까지 모아서 베스트 앨범에 수록
// 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록

function solution(genres, plays) {
  var answer = [];

  // 각각 인덱스, 장르, 재생횟수 정리
  let album = genres.map((genre, idx) => {
    return {
      idx: idx,
      genre: genre,
      play: plays[idx],
    };
  });

  // 장르별 총 재생횟수 계산
  let genreCnt = [];
  album.forEach((album) => {
    let thisGenre = genreCnt.find((a) => a.genre === album.genre);
    // 이미 장르가 있다면 횟수만 추가해주면 됨
    if (thisGenre) {
      thisGenre.play += album.play;
    } else {
      // 처음 추가하는 경우 장르와 횟수 함께 추가
      genreCnt.push({
        genre: album.genre,
        play: album.play,
      });
    }
  });

  // 각각 내림차순으로 정렬
  genreCnt.sort((a, b) => b.play - a.play);
  album.sort((a, b) => b.play - a.play);

  genreCnt.forEach((a) => {
    // 장르별로 노래를 두 개씩 넣기 위한 cnt 변수
    let cnt = 0;
    album.forEach((song) => {
      if (a.genre === song.genre && cnt < 2) {
        cnt++;
        answer.push(song.idx);
      }
    });
  });
  return answer;
}
