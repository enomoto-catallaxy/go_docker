import { memo } from "react";
import styled from "styled-components";
import { SeatSize } from "../../const/Seat";
import { DeskTop } from "../common/Desktop";

export const Seats = memo(() => {
  const today = new Date();

  const month = today.getMonth();
  const date = today.getDate();
  return (
    <Wrapper>
      <h1>
        座席一覧 {month + 1}月{date}日
      </h1>
      <Block>
        <Flex>
          <DeskTop />
          <DeskTop />
          <DeskTop notVacant />
        </Flex>

        <Flex>
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop />
        </Flex>
        <Flex>
          <DeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop />
        </Flex>
        <DeskTop />
        <DeskTop />
        <DeskTop />
        <NoDeskTop />
        <Flex>
          <DeskTop />
          <DeskTop />
          <DeskTop />
          <DeskTop />
        </Flex>
      </Block>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding-left: 24px;
`;

const Flex = styled.div`
  display: flex;
`;

const Block = styled.div`
  display: block;
`;

const NoDeskTop = styled.div`
  margin: 12px;
  height: ${SeatSize}px;
  width: ${SeatSize}px;
`;
