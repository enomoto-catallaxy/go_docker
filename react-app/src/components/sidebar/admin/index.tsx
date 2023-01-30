import { DiAptana } from "react-icons/di";
import { memo } from "react";
import styled from "styled-components";
import { Popover } from "antd";
import { BiUserPlus } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";

export const SideBarAdmin = memo(() => {
  const handleToRegiserForm = () => {
    window.location.href = "/new/student";
  };

  const content = (
    <>
      <Icons onClick={handleToRegiserForm}>
        <BiUserPlus size={48}></BiUserPlus>
      </Icons>
      <Icons onClick={handleToRegiserForm}>
        <AiOutlineFileSearch size={48}></AiOutlineFileSearch>
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
  /* padding-left: -6px;
  padding-right: -6px; */
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-evenly;

  :hover {
    cursor: pointer;
    color: blue;
  }
`;

const Icons = styled.div`
  margin-bottom: 10%;

  :hover {
    cursor: pointer;
    color: blue;
  }
`;
