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
          <DeskTop seatId={30} />
          <DeskTop seatId={31} />
          <DeskTop seatId={32} notVacant />
        </Flex>

        <Flex>
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop seatId={33} />
        </Flex>
        <Flex>
          <DeskTop seatId={29} />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop seatId={34} />
        </Flex>
        <Flex>
          <DeskTop seatId={28} />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop seatId={35} />
          <DeskTop seatId={36} />
        </Flex>
        <Flex>
          <DeskTop seatId={27} />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop />
        </Flex>
        <Flex>
          <DeskTop seatId={26} />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop />
          <DeskTop />
          <DeskTop />
          <DeskTop />
        </Flex>
        <Flex>
          <NoDeskTop />
          <NoDeskTop />
          <NoDeskTop />
          <DeskTop seatId={22} />
          <DeskTop seatId={21} />
        </Flex>
        <Flex>
          <DeskTop seatId={25} />
          <DeskTop seatId={24} />
          <DeskTop seatId={23} />
          <NoDeskTop />
          <DeskTop seatId={20} />
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
  margin: 6px;
  height: ${SeatSize}px;
  width: ${SeatSize}px;
`;
