import { memo } from "react";
import { NewStudentForm } from "./form";
import styled from "styled-components";

export const NewStudent = memo(() => {
  return (
    <>
      <Title>【新規入会】生徒の情報を入力してください</Title>

      <Wrapper>
        <NewStudentForm />
      </Wrapper>
    </>
  );
});

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
