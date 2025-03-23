# CRA가 더 이상 지원을 안한다고 해서 VITE로 프로젝트를 시작했습니다

# 코딩 테스트 연습용 연습장입니다.

# 홈화면에는 포트폴리오를 위한 화면이 제공될 것 입니다.

하고 싶은 코드를 작성해보는 개인 연습장입니다.<br/>
아마도 백준이나 프로그래머스 코딩테스트 문제를 풀기위한 연습장으로도 사용할 예정입니다.<br/>

## 프론트 단순한 기능 만들어보기

### 1번 사칙연산

### 2번 필터링

### 3번 사칙연산 구현 심화

### 4번 조건에 맞지 않는 단어 제거

### 5번 배열에 있는 단어를 검색하면 화면에 띄우기

### 6번 입력한 텍스트를 메모장으로 저장하기

### 7번 입력한 텍스트를 로컬스토리지에 이미지는 파이어베이스에 저장하기

### 8번 배열에서 랜덤으로 요소를 뽑는 가챠 만들기

### 9번 tensorflow.js 로 간단한 사칙연산 대답 머신 만들기

지금 현실적으로 가능한 데이터셋과 모델관련 지식으로는 구현이 불가능함
오차 범위를 좁히려면 더 많은 데이터셋과 지식이 필요해 보임
두자리수의 연산까지는 어느정도 정확도가 나옴

1일차: 데이터셋 부족으로 인해 문제가 생겨서 더하기만 데이터 늘리고 테스트 해서 성공함
2일차: 데이터셋 늘려서 사칙연산 구연하기

### 10번 tensorflow.js 로 간단한 유사성 찾기 문제 해보기

word2vec 라이브러리 써서 문자열을 이해할 수 있는 데이터로 바꿔서 처리하게 시키기
유사성을 이해해서 입력한 단어와 비슷한걸 주어진 배열에서 뽑아내도록 해보기

### 11번 chatgpt open api 사용해서 선택지 자동생성 텍스트 어드밴처 게임 만들기

리포지토리 링크: https://github.com/mkhajiit/ai-advanture

Vercel 배포 링크: https://ai-advanture-git-main-mkhajiits-projects.vercel.app

### 12번 바닐라 자바 스크립트를 복습하는 과제 구현

### 13번 vercel로 배포하기

### 14번 11번과 같은 방법으로 선택지 4개의 오픽에서 자주 사용하는 단어의 의미를 맞추는 자동 생성 단어장 만들기

## 백앤드 단순한 기능 만들어보기

### 1번 자바로 사칙연산 함수 구현해보기

### 2번 자바로 함수를 사용해서 사칙연산을 실행해보기

### 3번 클래스 만들고 임포트 해보기

### 4번 자바에서 객체를 만들고 사용해보기

### 5번 자바를 이용해 백앤드 앤드 포인트 구현해보기

Access to XMLHttpRequest at 'http://localhost:8080/api/message' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

CORS로 인한 에러 발생
해결방법: 자바 백앤드에서 해더에 CORS를 설정해줘서 해결했음

#### 수정 된 것

25-03-05 포트폴리오 페이지로 사용하기 위해 홈화면을 만들고 네비게이션을 새로 만들었음

25-03-07 ui 다크모드 구현

25-03-08 zustand 설치 및 리펙토링

#### 내일 할일

지금 구현한 다크모드는 Router와 App BoardLayout으로 이어지는 컴포넌트가 쌓이는 구조라
prop으로 하나하나 전달해서 드릴링이 발생하는데 이걸 고치기 위해 zustand로 상태관리할것
또 새로고침해도 변하지 않도록 반드시 localstorage에 다크모드 상태를 저장할것

#### 후순위 목표

핸드폰이나 테블릿 환경에서 Navigation 목록이 슬라이드로 넘어가도록 구현하기
모바일 퍼스트 접근법을 따라서 css를 개발할것
타입스크립트 복습
