import { memo } from "react";
import styled from "styled-components";
import { SideBarAdmin } from "./admin";
import { SideBarGoodbye } from "./goodbye";
import { SideBarWelcome } from "./welcome";

export const SideBar = memo(() => {
  return (
    <Wrapper>
      <SideBarWelcome />
      <SideBarGoodbye />
      <SideBarAdmin />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 20%;
  background-color: beige;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
  display: block;
`;
