import React, { useState } from 'react';

export default function BtnList() {
  let [info, setInfo] = useState('');
  function Infotxt(buttonValue) {
    setInfo(buttonValue);
  }
  return (
    <div className="container">
      <button onClick={() => Infotxt('좋아요!😀')}>기분이: 좋아요!😀</button>
      <button onClick={() => Infotxt('정말 좋아요!😄')}>기분이: 정말 좋아요!😄</button>
      <button onClick={() => Infotxt('최고예요!😁')}>기분이: 최고예요!😁</button>
      <button onClick={() => Infotxt('미쳤어요!😆')}>기분이: 미쳤어요!😆</button>
      <div className="btnInfo">{info}</div>
    </div>
  );
}
