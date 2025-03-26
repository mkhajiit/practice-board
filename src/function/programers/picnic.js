// 프로그레머스 레벨1 공원산책

//나의 풀이
/*
function solution(park, routes) {
  var answer = [];
  // 시작 위치를 검색
  function searchStart(){
      
      for(let y = 0 ; y < park.length; y ++){
          let x = park[y].indexOf("S");
          if(x !== -1){
              return {x:x, y:y};
          }
      }
  }
  
  function searchObstacle(startX,startY,newX,newY,park){
      const dx = newX > startX ? 1 : newX < startX ? -1 : 0;
      const dy = newY > startY ? 1 : newY < startY ? -1 : 0;
      
      let x = startX;
      let y = startY;

      // 시작 위치에서 끝 위치까지 한 칸씩 이동하면서 장애물 확인
      while (x !== newX || y !== newY) {
          if (park[y][x] === 'X') {
              return true; // 장애물 발견
          }
          x += dx;
          y += dy;
          
           // 경계 체크: 공원을 벗어나지 않는지 확인
          if (x < 0 || y < 0 || x >= park[0].length || y >= park.length || park[y][x] === 'X') {
              return true; // 장애물 발견 또는 공원을 벗어남
          }
      }

      return false; // 장애물 없음
  }
  // 움직이는 명령 실행
  function moveRobot(route,currentPoint){
      const splitedRoute = route.split(" ");
          const direction = splitedRoute[0]
          const distance = Number(splitedRoute[1]);
          // 객체 분해 할당
          const {x,y} = currentPoint
          
          let newX = x;
          let newY = y;
      switch(direction){
          case 'N':
              newY = y-distance;
              break;
          case 'S':
              newY = y+distance;
              break;
          case 'W':
              newX = x-distance;
              break;
          case 'E':
              newX = x+distance;
              break;
      }
      const point = {x:newX, y:newY};

      if(point.x < 0 || point.y < 0 || point.x >= park[0].length || point.y >= park.length){
          return null;
      }else if(searchObstacle(x,y,point.x,point.y,park)){
          return null;
      }else{
          return point;
      }
      
  }
  
  // 객체{x:x, y:y}
  const startingPoint = searchStart();
  let currentPoint = startingPoint;
  
  routes.forEach((route)=>{
      let movedPoint = moveRobot(route,currentPoint);
      if(movedPoint){
         currentPoint = movedPoint; 
      }
      console.log(movedPoint);
  })
  // result[y좌표,x좌표]
  answer = [currentPoint.y, currentPoint.x];
  return answer;
}
  */

//가장 좋아요 높은 풀이

function solution(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      [x, y] = [i, park[i].indexOf('S')];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(' ');
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === 'X') break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}
