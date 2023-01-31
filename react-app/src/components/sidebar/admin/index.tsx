import { DiAptana } from "react-icons/di";
import { memo } from "react";
import styled from "styled-components";
import { Popover } from "antd";

export const SideBarAdmin = memo(() => {
  const handleToRegiserForm = () => {
    window.location.href = "/new/student";
  };
  const handleToSearch = () => {
    window.location.href = "/search";
  };

  const content = (
    <>
      <Icons onClick={handleToRegiserForm}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
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
          <path d="M16 11h6m-3 -3v6" />
        </svg>
      </Icons>
      <Icons onClick={handleToSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="7" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h1" />
          <circle cx="16.5" cy="17.5" r="2.5" />
          <path d="M18.5 19.5l2.5 2.5" />
        </svg>
      </Icons>
    </>
  );

  return (
    <Wrapper>
      <Popover placement="right" content={content} trigger="hover">
        <DiAptana size={48}></DiAptana>
      </Popover>
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

const Icons = styled.div`
  padding-bottom: 10%;

  :hover {
    cursor: pointer;
    background-color: #efe9e9 !important;
  }
`;
