import { BiUserPlus } from "react-icons/bi";
import { memo } from "react";
import styled from "styled-components";

export const SideBarRegister = memo(() => {
  const handleClick = () => {
    window.location.href = "/new/student";
  };

  return (
    <Wrapper onClick={handleClick}>
      <BiUserPlus size={48}></BiUserPlus>
      <Title>新入生</Title>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  /* padding-left: -6px;
  padding-right: -6px; */
  margin-bottom: 24px;
  display: flex;
  justify-content: space-evenly;

  :hover {
    cursor: pointer;
    color: blue;
  }
`;

const Title = styled.h2`
  height: 48px;
`;
