import { memo } from "react";
import styled from "styled-components";
import { GoodbyeForm } from "./Form";

export const Goodbye = memo(() => {
  return (
    <Wrapper0>
      <Title>お疲れ様でした！</Title>

      <Wrapper>
        <GoodbyeForm />
      </Wrapper>
    </Wrapper0>
  );
});

const Wrapper0 = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 84px;
`;

const Wrapper = styled.div`
  padding-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
`;
