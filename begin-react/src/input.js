import React, { useState } from 'react';

function Input() {
  //   const [text, setText] = useState('');
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs; // 비구조화 할당 통해 값 추출

  const onChange = (e) => {
    // setText(e.target.value);
    const { value, name } = e.target; // 우선 e.target에서 name과 value 추출
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
  };

  return (
    <div>
      {/* <input onChange={onChange} value={text} /> */}
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
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
