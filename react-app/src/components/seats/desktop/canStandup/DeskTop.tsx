import { memo } from "react";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
import { Text } from "@mantine/core";
import { SeatSize } from "../../../../const/Seat";
import { StandupModal } from "../modal/standupModal";

interface Props {
  seatId: number;
  handleClickFaDeskTop: () => void;
  openStandupModal: boolean;
  handleCloseStandupModal: () => void;
  handleStandupOk: () => void;
}

export const CanStandupDeskTop = memo((props: Props) => {
  return (
    <>
      <Wrapper>
        <Text color="#black" fw={1000} ta="center" size="lg">
          {props.seatId}
        </Text>
        <FaDesktop
          onClick={props.handleClickFaDeskTop}
          size="80px"
          color="blue"
        ></FaDesktop>
      </Wrapper>

      <StandupModal
        open={props.openStandupModal}
        handleClose={props.handleCloseStandupModal}
        onOk={props.handleStandupOk}
        seatId={props.seatId}
      />
    </>
  );
});

const Wrapper = styled.div`
  padding: 6px;
  margin: 6px;
  height: ${SeatSize}px;
  width: ${SeatSize}px;
`;
