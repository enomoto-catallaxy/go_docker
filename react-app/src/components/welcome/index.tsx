import { memo, useMemo } from "react";
import styled from "styled-components";
import { WelcomeForm } from "./Form";

export const Welcome = memo(() => {
  const currentHour = new Date().getHours();

  const message = useMemo(() => {
    if (currentHour < 11) {
      return "おはようございます！";
    } else if (currentHour < 18) {
      return "こんにちは！";
    } else {
      return "こんばんは！";
    }
  }, [currentHour]);

  return (
    <Wrapper0>
      <Title>{message}</Title>

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
