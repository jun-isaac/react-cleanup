import { useState, useEffect } from "react";



/* 
! 아래와 같은 코드

function Hello() {
  function byFn() {
    ! byFn이 실행되면 console.log가 실행됨
    console.log("Bye ;(");
  }
  ! hiFn가 실행되면 console.log가 실행됨
  function hiFn() {
    console.log("Created :)");
    ! 그 반대가 되면 byFn이 실행 됨
    return byFn;
  }

  ! App이 실행되면서 한번 hiFn가 실행 됨
  useEffect(hiFn, []);
    return (<h1>Hello</h1>);
}

! 1. App 실행
function App() {
  ! 2. showing의 기본값 false로 설정
  const [showing, setShowing] = useState(false);
  ! 5. 버튼을 클릭 시 실행할 이벤트 setShowing((초기값 / false) => !기본값의 반대 / true)
  const onClick = () => setShowing((prev) => !prev)
    return (
      <div>
        ! 3. showing이 true라면 Hello함수 실행 : 아니라면 실행 안 함
        {showing ? <Hello /> : null}
        ! 4. button에 onClick 이벤트를 만들어 둠 {showing이 true라면 텍스트가 Hide : false라면 Show}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      </div>
    );
}
*/

function Hello() {

    // 아래와 같은 코드
  // useEffect(function(){
  //   console.log("Hi :)");
  //   return function(){
  //     console.log("Bye ;(");
  //   }
  // }, []);

  // App이 실행 되면 한번 동작하는 함수
  useEffect(() => {
    // 클릭되면 바로 실행
    console.log("Hi :)");
    // 그 반대일 경우 실행
    return () => console.log("Bye ;("); 
  }, []);
  
    return (<h1>Hello</h1>);
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev)
    return (
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      </div>
    );
}

export default App;