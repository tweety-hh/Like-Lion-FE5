import React from 'react';

export default function Color(props) {
  return (
    <div>
      <div style={{ color: props.color }}>색이 바뀌어요</div>
    </div>
  );
}
