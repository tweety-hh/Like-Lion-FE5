// 각 컴포넌트들을 가지고 옵니다!
import React, { useState } from 'react';

export default function Resume(props) {
  console.log(useState(0));
  let [like, setLike] = useState(0);
  let [txt, setTxt] = useState('');
  // let like = 0;

  function clickLike() {
    setLike((like += 1));
    console.log(like);
  }

  function clickTxt() {
    if (txt === '') {
      setTxt('like');
    } else {
      setTxt('');
    }
  }
  return (
    <>
      <h2>{props.name} 자기소개서</h2>
      <strong>{props.hello}</strong>
      <dl>
        <dt>취미 : </dt>
        <dd>{props.hobby}</dd>
        <dt>좋아하는 음식 : </dt>
        <dd>{props.food}</dd>
        <dt>좋아하는 색 : </dt>
        <dd>{props.color}</dd>
      </dl>
      <button onClick={clickTxt}>
        like <span>{like}</span>
      </button>
      <span>{txt}</span>
    </>
  );
}
