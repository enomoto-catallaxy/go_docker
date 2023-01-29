import { memo } from "react";
import styled from "styled-components";
import { SideBarRegister } from "./admin/register";
import { SideBarGoodbye } from "./goodbye";
import { SideBarWelcome } from "./welcome";

export const SideBar = memo(() => {
  return (
    <Wrapper>
      <SideBarWelcome />
      <SideBarGoodbye />
      <SideBarRegister />
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
