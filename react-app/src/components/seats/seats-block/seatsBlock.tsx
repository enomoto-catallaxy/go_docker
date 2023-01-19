import { memo } from "react";
import styled from "styled-components";
import { SeatSize } from "../../../const/Seat";
import { DeskTop } from "../desktop/Desktop";

export const SeatsBlock = memo(() => {
  return (
    <Block>
      <Flex>
        <DeskTop seatId={30} />
        <DeskTop seatId={31} />
        <DeskTop seatId={32} />
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
        <DeskTop seatId={37} />
      </Flex>
      <Flex>
        <DeskTop seatId={26} />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <DeskTop seatId={38} />
      </Flex>
      <Flex>
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <NoDeskTop />
        <DeskTop seatId={39} />
        <DeskTop seatId={40} />
        <DeskTop seatId={41} />
        <DeskTop seatId={42} />
        <DeskTop seatId={43} />
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
  );
});

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
