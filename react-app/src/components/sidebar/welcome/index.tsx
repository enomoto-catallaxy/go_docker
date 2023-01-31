import { memo } from "react";
import styled from "styled-components";

export const SideBarWelcome = memo(() => {
  const handleClick = () => {
    window.location.href = "/welcome";
  };

  return (
    <Wrapper onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 11l2 2l4 -4" />
      </svg>
      <Title>来校</Title>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  height: 48px;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;

  :hover {
    cursor: pointer;
    background-color: #efe9e9 !important;
  }
`;

const Title = styled.div`
  height: 48px;
  font-size: 36px;
  font-weight: 700;
`;
