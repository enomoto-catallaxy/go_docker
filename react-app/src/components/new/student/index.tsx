import { memo } from "react";
import { NewStudentForm } from "./form";
import styled from "styled-components";

export const NewStudent = memo(() => {
  return (
    <Wrapper0>
      <Title>【新規入会】生徒の情報を入力してください</Title>

      <Wrapper>
        <NewStudentForm />
      </Wrapper>
    </Wrapper0>
  );
});

const Wrapper0 = styled.div`
  height: 100vh;
`;

const Title = styled.h1`
  padding-top: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  padding-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 80%;
`;
