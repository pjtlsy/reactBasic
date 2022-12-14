import React, { useRef, useState } from 'react';

function Input() {
  //   const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const nameInput = useRef(); // 초기화 클릭 시 이름 input에 포커스 잡히도록 하기 위해 추가

  const { name, nickname } = inputs; // 비구조화 할당 통해 값 추출

  const onChange = (e) => {
    console.log(e);
    console.log(e.target);
    // setText(e.target.value);
    const { name, value } = e.target; // 우선 e.target에서 name과 value 추출
    console.log(name);
    console.log(value);
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    // setText('');
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus(); // 초기화 클릭 시 이름 input에 포커스 잡히도록 하기 위해 추가
  };

  return (
    <div>
      {/* <input onChange={onChange} value={text} /> */}
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        {/* <b>값: {text}</b> */}
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default Input;
