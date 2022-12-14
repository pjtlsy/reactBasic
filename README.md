# 리액트

<br />

웹 애플리케이션 규모가 커지면,

DOM을 직접 건드려서 작업 시 코드가 난잡해짐

처리해야 할 이벤트가 다양해지고 

관리해야 할 상태값도 다양해지고 

DOM도 다양해지면 

업데이트 규칙이 많이 복잡해진다

=> 업데이트 하는 작업을 간소화해주는 프레임워크 개발

<br />

하지만,

`리액트`는 어떠한 상태가 바뀌었을 때 

그 상태에 따라 DOM을 어떻게 업데이트 할 지 규칙을 정하는 것이 아니라 

아예 다 날려버리고 처음부터 모든걸 새로 만들어서 보여주자는 아이디어에서 개발됨

<br />

업데이트를 어떻게 해야 할 지에 대한 고민을 전혀 안해도 되므로

개발이 쉬워지지만

동적인 UI를 보여주기 위해 모든걸 다 날려버리고 모든걸 새로 만들게 되면

속도가 굉장히 느릴 것.

=> 그래서 리액트에서는 Virtual DOM(가상의 DOM) 이라는 것을 사용!

브라우저에 실제로 보여지는 DOM이 아닌 메모리에 가상으로 존재

JavaScript 객체이므로 실제로 브라우저에서 DOM을 보여주는 것 보다 빠름

<br />

리액트는 상태가 업데이트 되면,

업데이트가 필요한 곳의 UI를 Virtual DOM을 통해 렌더링함

효율적인 비교 알고리즘을 통해(created by 리액트 개발팀) 실제 브라우저에 보여지고 있는 DOM과 비교 후, 차이가 있는 곳을 감지하여 이를 실제 DOM에 패치

=> 업데이트 어떻게 할지 고민 안하고 성능도 빠르게

<br />

---

<br />

작업 환경 준비

1. Node.js

   Webpack, Babel 등이 자바스크립트 런타임인 Node.js 기반으로 만들어졌으므로 해당 도구들을 사용하기 위해 설치(LTS 버전)

   Webpack <- 리액트 프로젝트 제작 시 컴포넌트를 여러가지 파일로 분리해서 저장하는데 이런 여러가지 파일을 한개로 결합하기 위해

   Babel <- 컴포넌트는 일반 자바스크립트가 아닌 JSX 문법 등 새로운 자바스크립트 문법 사용하므로

2. Yarn

   npm 개선 버전

   Node.js 설치 시 같이 딸려오는 패키지 매니저 도구

   프로젝트에 사용되는 라이브러리 설치하고 해당 라이브러리들의 버전 관리 시 사용

   더 나은 속도, 캐싱 시스템을 사용하기 위해 Yarn 씀

3. 코드 에디터

   VSCode 등

4. Git bash

<br />

`npx create-react-app begin-react`

<br />

`cd begin-react`

`yarn start`

<br />

---

<br />

리액트 컴포넌트 제작 시 

`import React from 'react';`

를 통해 리액트를 불러와야함

<br />

리액트 컴포넌트는

함수 형태, 클래스 형태로 작성할 수 있음

리액트 컴포넌트에서는 XML 형식의 값을 반환해줄 수 있는데 이를 JSX라고 부름

<br />

코드의 최하단에는

`export default Hello;`

라고 적어서 이 코드를 ~(코드 상에서는 Hello)라는 컴포넌트로 내보내겠다고 작성

이렇게 해주면 다른 컴포넌트에서 불러와서 사용 가능

<br />

컴포넌트는 일종의 UI 조각으로 쉽게 재사용 가능

<br />

index.js

ReactDOM.render <- 브라우저에 있는 실제 DOM 내부에 리액트 컴포넌트를 렌더링

<br />

---

<br />

JSX <- 리액트의 생김새 정의 시 사용하는 문법. HTML 같이 생긴 JavaScript

리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel이 JSX => JavaScript

<br />

Babel은 자바스크립트의 문법을 확장해주는 도구

최신 문법, 편의상 사용하거나 실험적인 자바스크립트 문법 => 정식 자바스크립트 형태로 변환

구형 브라우저같은 환경에서도 제대로 실행할 수 있게 해주는 역할

<br />

JSX가 자바스크립트로 제대로 변환되기 위한 규칙

1. **꼭 닫혀야 하는 태그**

   태그를 열었으면 닫는다

   HTML에서는 input, br 태그 사용 시 닫지 않고 사용하기도 하지만 리액트에서는 X

   태그와 태그 사이 내용이 안들어가면 Self Closing 태그 사용

   `<input />`

   `<br />`

2. **두 개 이상의 태그는 무조건 하나의 태그로 감싸져야 함**

   리액트의 Fragment 사용

3. **JSX 안에 자바스크립트 값 사용**

   JSX 내부에서 자바스크립트 변수 보여줄 땐 `{}` 로 감싸서 보여줌

4. **style과 className**

   JSX에서 태그에 `style`과 CSS class를 설정하는 방법은 HTML에서 설정하는 방법과 다름

   * 인라인 스타일은 객체 형태로 작성
   * `-` 로 구분된 이름은 `backgroundColor` 처럼 camelCase 형태로
   * class 설정 시 `class=` 가 아닌 `className=` 으로 설정

5. **주석**

   `{/* 이런 형태로 */}`

   열린 태그 내부에서는 `//` 사용 가능

   ```jsx
   <Hello
   	// 열린 태그 내부에서는 이렇게 주석 작성 가능
   />
   ```

<br />

---

<br />

props를 통해 컴포넌트에게 값 전달

App.js

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" />
  );
}

export default App;
```

Hello.js

```jsx
import React from 'react';

function Hello(props) {
  return <div>안녕하세요 {props.name}</div>
}

export default Hello;
```

props는 객체 형태로 전달되며,

만약 `name` 값을 조회하고 싶다면 `props.name` 조회

<br />

여러개의 props, 비구조화 할당

App.js

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello name="react" color="red"/>
  );
}

export default App;
```

Hello.js

```jsx
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

export default Hello;
```

<br />

defaultProps로 기본값 설정

컴포넌트에 props 지정하지 않았을 때 기본적으로 사용할 값 설정하려면

Hello.js

```jsx
import React from 'react';

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
```

<br />

props.children

내부 내용 보여지게 하기 위해서는 `props.children`

App.js

```jsx
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red"/>
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
```

Wrapper.js

```jsx
import React from 'react';

function Wrapper({ children }) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {children}
    </div>
  )
}

export default Wrapper;
```

<br />

---

<br />

조건부 렌더링

특정 조건에 따라 다른 결과물 렌더링

App.js

```jsx
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';


function App() {
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true}/>
      <Hello color="pink" />
    </Wrapper>
  )
}

export default App;
```

Hello 컴포넌트에서 isSpecial이 true이냐 false이냐에 따라 컴포넌트 좌측에 * 표시

Hello.js

```jsx
import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      { isSpecial ? <b>*</b> : null }
      { isSpecial && <b>*</b> }
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
```

JSX에서 null, false, undefined 렌더링하게 되면 아무것도 나타나지 않음

컴포넌트의 props 값을 설정하게 될 때 props 이름만 작성하고 값 설정을 생략하면, 이를 true로 설정한 것으로 간주

<br />

---

<br />

useState로 컴포넌트에서 바뀌는 값 관리

리액트에 Hooks 기능이 도입되면서 함수형 컴포넌트에서도 상태 관리 가능해짐

코드 참고..

<br />

---

<br />

input 상태 관리

input의 `onChange` 라는 이벤트 사용

이벤트에 등록하는 함수에서는 이벤트 객체 `e`를 파라미터로 받아와서 사용 가능

이 객체의 `e.target`은 이벤트가 발생한 DOM인 input DOM 가리킴

이 DOM의 `value` 값, 즉 `e.target.value` 를 조회하면 현재 input에 입력한 값이 무엇인지 알 수 있음

이 값을 `useState`로 관리

<br />

input의 상태 관리 시 input 태그의 `value` 값도 설정해준다(상태 바뀌었을 때 input 내용 업데이트)

<br />

---

<br />

여러 개의 input 상태 관리

단순히 `useState`, `onChange` 여러개 만들어 구현하는 것 보다

input에 `name` 설정하고 이벤트 발생 시 이 값을 참조한다

그리고 `useState`에서는 문자열이 아니라 객체 형태의 상태 관리

<br />

리액트에서는 객체 업데이트 시 기존 객체를 직접 수정하지 않고

새로운 객체를 만들어서 새 객체에 변화를 줘야함

<br />

코드 참고

<br />

---

<br />

useRef로 특정 DOM 선택

자바스크립트에서 특정 DOM 선택 시 DOM Selector 함수(`getElementById`, `querySelector` 등)를 사용했듯 리액트에서는 `ref` 사용

<br />

함수형 컴포넌트에서 `ref` 사용 시 `useRef` 라는 Hook 함수를 사용

(클래스형 컴포넌트에서는 콜백 함수나 `React.createRef` 함수 사용)

<br />

초기화 버튼 클릭 시 포커스가 이름 input에 잡히도록 하기

`useRef()` 사용하여 Ref 객체 만들고,

이 객체를 선택하고 싶은 DOM에 `ref` 값으로 설정해준다

그렇게 하면, Ref 객체의 `.current` 값은 원하는 DOM을 가리키게 된다

그 후 `onReset` 함수에서 input에 포커스를 하는 `focus()` DOM API 호출

코드 참고 

<br />

---

<br />

배열 렌더링

배열의 인덱스를 하나하나 조회해가면서 렌더링하는 방법은 동적인 배열을 렌더링하지 못함

자바스크립트 배열의 내장함수 `map()` 사용

`map()` 함수는 배열 안에 있는 각 원소를 변환하여 새로운 배열을 만들어줌

<br />

리액트에서 배열 렌더링 시 `key` 라는 props를 설정해야함

`key` 값(<- 이게 있어야 업데이트가 효율적)은 각 원소들마다 가지고 있는 고유값으로 설정하며,

고유한 값이 없다면 `map()` 함수 사용 시 설정하는 콜백함수의 두 번째 파라미터 `index` 를 `key` 로 사용 

<br />

코드 참고 

<br />

---

<br />

useRef 로 컴포넌트 안의 변수 만들기

<br />

`useRef` Hook은 DOM 선택 용도 외에도 컴포넌트 안에서 조회 및 수정할 수 있는 변수를 관리함

<br />

`useRef` 로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지 않음

리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회할 수 있는 반면, `useRef` 로 관리하고 있는 변수는 설정 후 바로 조회 가능

다음과 같은 값 관리

* `setTimeout`, `setInterval` 을 통해 만들어진 `id`
* 외부 라이브러리를 사용하여 생성된 인스턴스
* scroll 위치

<br />

---

<br />

배열에 항목 추가

<br />

배열에 새 항목 추가 할 땐 spread 연산자를 사용하거나, `concat` 사용

<br />

---

<br />