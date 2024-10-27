# javascript-racingcar-precourse

# 과제 이름

## 🔨 기능 구현 목록

### 입력 기능

1. 경주할 자동차 이름
   ```
      경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
   ```
   - 쉼표를 기준으로 자동차 이름이 나뉜다.
   - [에외] 자동차 이름이 5자 초과인 경우
   - [에외] 자동차 이름이 1자 미만인 경우
   - [예외] 자동차 이름이 알파벳, 숫자 혹은 언더바(`_`)가 아닌 경우
2. 이동 횟수
   ```
      시도할 횟수는 몇 회인가요?
   ```
   - [예외] 양수가 아닌 경우
   - [예외] 정수가 아닌 경우

### 출력 기능

1. 차수별 실행 결과를 출력한다.
   ```
     pobi : -
     woni : ---
     jun : --
   ```
   - 여기서 이름 뒤에 오는 `-`의 개수는 누적된 전진 횟수를 의미한다.
2. 최종 우숭자를 출력한다.
   ```
     최종 우숭자 : pobi, jun
   ```
   - 최종 우숭자가 여러 명일 경우 쉼표(`,`)를 이용하여 구분한다.

### 동작 기능

1. 입력 기능의 1번을 수행한다.
2. 입력 기능의 2번을 수행한다.
3. 입력 1번의 값을 쉼표(`,`)를 기준으로 분리한다. 각 분리한 값은 자동차의 이름이다.
4. 0부터 9 사이에서 무작위 값을 구한다.
5. 값이 4이상이라면 자동차는 전진한다. 값이 4미만이라면 자동차는 멈춘다.
6. 출력 기능의 1번을 수행한다.
7. 입력 2번의 값만큼 동작 4번에서 6번 과정을 반복한다.
8. 출력 기능의 2번을 수행한다.

## 🧑🏻‍💻 실행 방법

1. Node.js 20.17.0 버전이 설치되었는지 확인한다.
2. `$ npm install`
3. `$ npm run start`

## 📂 폴더 구조

```
javascript-racingcar-7
├── package.json
├── README.md
├── __tests__
|  ├── ApplicationTest.js : App에 대한 테스트 코드
|  └── UtilsTest.js : util함수에 대한 테스트 코드
└── src
   ├── App.js : App 클래스
   ├── Input.js : Input 클래스, 입력을 담당한다.
   ├── Race.js : Race 클래스, 자동차 경주를 담당한다.
   ├── index.js
   └── lib
      ├── constants.js : 상수
      └── utils.js : 유틸 함수
```

## 📚 가장 신경 쓴 포인트

### 1. 객체지향 프로그래밍을 이용한 구조화

구조화에 대해 고민을 많이 했어요. 입력에 대한 책임은 누구에게 있을까, 경주에 대한 책임은 누구에게 있을까. 이러한 코드를 모두 App의 책임으로 하는 것은 App에게 너무 많은 책임이 생겨 수정에 용이하지 않더라구요. 그래서 입력에 대한 책임을 `Input` 클래스에게, 자동차 경주에 대한 책임을 `Race`에게 맡겼어요. App에서는 이 Input 클래스와 Race 클래스를 호출하여 사용만 하면 되는 거에요.

그리고 각 입력과 자동차 경주에 필요한 상수는 각 클래스의 정적 private 프로퍼티로 등록을 했어요. 이렇게 프로퍼티로 분리함으로써 이 변수가 이 클래스, 즉 이 관심사에서만 쓰이는 구나 알 수 있어요.

### 2. 단일 책임 원칙

하나의 함수가 하나의 '책임'을 가지도록 작성하기 위해 노력했어요.

### 3. 유틸 함수의 분리

주어진 인자로 결과값을 리턴하는 순수 함수를 작성하기 위해 노력했어요. 이러한 함수는 모두 공통적으로 사용할 수 있기 때문에 utils파일에 분리했어요. 만약 특정 관심사에 종속되는 함수라면 그 관심사의 클래스의 메서드에 선언했어요.

## 🤔 고민했던 포인트

### 1. JSDoc 미사용

JSDoc을 사용할까 고민을 했어요. 하지만 JSDoc을 적용해봤을 때 코드의 절반 이상이 주석으로 덮여있는 것을 보고 코드의 가독성을 상당히 저해하는 구나 느꼈어요. JSDoc을 작성하지 않음으로써 코드의 안정성보다 코드의 가독성을 선택했어요. 하지만 이에 대한 해결책으로 테스트 코드로 코드의 안정성 또한 극복할 수 있었어요.

## 🧩 클래스 다이어그램

```mermaid
classDiagram
  class App{
	  async run()
	  #getInput()
	  #runRace()
	  #printOutput()
	}
	class Input{
		#CAR_NAME_REGEXP
	  #SEPARATOR
	  #rawCars
	  #rawTryCount
		async getUserInput()
		parseCarNames()
		parseTryCount()
		validateCarArray()
	}
	class Race{
	  #MIN_RANDOM
	  #MAX_RANDOM
	  #MOVE_FORWARD_THRESHOLD
	  #TRACE_CHARACTER
	  #FORWARD_STEP

	  #carArray
	  #tryCount
	  #carTraceMap
	  run()
	  #runOneRound()
	  #moveCarForward()
	  #getIsMoveForward()
	  #printCarPosition()
	  #getWinnerArray()
	}
	App --> Input
	App --> Race
```
