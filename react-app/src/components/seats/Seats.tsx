import { memo } from "react";
import styled from "styled-components";
import { SeatsBlock } from "./seats-block/seatsBlock";

export const Seats = memo(() => {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  return (
    <Wrapper>
      <h1>
        座席一覧 {month + 1}/{date}
      </h1>

      <SeatsBlock />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding: 24px;
`;
