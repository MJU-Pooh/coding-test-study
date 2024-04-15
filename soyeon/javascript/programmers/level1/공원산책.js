// 주어진 방향으로 이동할 때 공원을 벗어나는지 or 장애물을 만나는지 확인
// 둘 중 하나의 경우라도 해당되면 해당 명령을 무시하고 다음 명령을 수행
// park - S: 시작 지점, O: 이동 가능 통로, X: 장애물
// routes - 로봇 강아지가 수행할 명령어
// 모든 명령을 수행 후 로봇 강아지가 놓인 위치를 [세로, 가로] 순으로 배열에 담아 리턴

function solution(park, routes) {
  const location = { x: 0, y: 0 };
  // 시작 노드 찾기
  park.forEach((row, index) => {
    if (row.indexOf("S") !== -1) {
      location.x = row.indexOf("S");
      location.y = index;
    }
  });

  routes.forEach((route) => {
    const direction = route[0];
    const distance = Number(route[2]);
    // 가로로 이동하는지 세로로 이동하는지
    const dx = direction === "E" ? 1 : direction === "W" ? -1 : 0;
    const dy = direction === "S" ? 1 : direction === "N" ? -1 : 0;

    // 정해진 거리만큼 한 칸씩 이동하면서
    // 벗어나는지, 장애물을 만나지는 않는지 검사
    for (let i = 1; i <= distance; i++) {
      const newX = location.x + i * dx;
      const newY = location.y + i * dy;
      if (
        park[newY] === undefined ||
        park[newY][newX] === undefined ||
        park[newY][newX] === "X"
      ) {
        return false;
      }
    }
    // 통과되면 위치 업데이트
    location.x += distance * dx;
    location.y += distance * dy;
    return true;
  });

  // 세로부터 리턴
  return [location.y, location.x];
}
