import { memo } from "react";
import styled from "styled-components";
import { WelcomeForm } from "./Form";

export const Welcome = memo(() => {
  return (
    <Wrapper0>
      <Title>こんにちは！今日も頑張りましょう！！</Title>

      <Wrapper>
        <WelcomeForm />
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
`;

const Wrapper = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
`;
