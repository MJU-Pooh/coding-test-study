// 2018 kakao
// 캐시 크기 cacheSize와 도시이름 배열 cities
// 각 도시 이름은 대소문자 구분 x
// 입력된 도시이름 배열을 순서대로 처리할 때 총 실행시간 출력 - LRU알고리즘 사용
// cache hit: 1, cache miss: 5

function solution(cacheSize, cities) {
  var answer = 0;
  let cache_arr = [];

  // 캐시 사이즈가 0일 경우는 바로 리턴
  if (cacheSize == 0) {
    answer = cities.length * 5;
    return answer;
  }

  for (let i = 0; i < cities.length; i++) {
    // 대소문자 구별 안하므로 하나로 통일
    cities[i] = cities[i].toUpperCase();
    if (cache_arr.includes(cities[i])) {
      // 이미 메모리에 있는 경우 hit
      answer += 1;
      // 메모리에서 삭제 후 최상단으로 다시 참조
      cache_arr.splice(cache_arr.indexOf(cities[i]), 1);
      cache_arr.push(cities[i]);
    } else {
      // miss
      // 캐시가 다 찼으면 오래된 메모리 삭제 후 새로 참조
      if (cache_arr.length === cacheSize) {
        cache_arr.shift();
        cache_arr.push(cities[i]);
        answer += 5;
        continue;
      }
      // 안찾으면 참조만 함
      cache_arr.push(cities[i]);
      answer += 5;
    }
  }

  return answer;
}

// arr.splice(a, b);
// a인덱스부터 b개를 배열에서 제거
