import { memo } from "react";
import styled from "styled-components";
import { Header } from "../header/Header";
import { SeatsBlock } from "./seats-block/seatsBlock";

export const Seats = memo(() => {
  return (
    <Wrapper>
      <Header />
      <SeatsBlock />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding: 24px;
  /* background-color: rgb(213, 244, 244); */
`;
