import React from 'react';
import styled from 'styled-components';

const ContentH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color: royalblue;
`;

export default function Hello() {
  return (
    <div>
      <ContentH2>hello world</ContentH2>
    </div>
  );
}
