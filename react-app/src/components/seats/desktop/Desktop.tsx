import { memo } from "react";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
import { SeatSize } from "../../../const/Seat";
import { Text } from "@mantine/core";
import { SitdownModal } from "./modal/sitdown/sitdownModal";
import { StandUpModal } from "./modal/standupModal";
import { useDeskTop } from "./useDeskTop";

interface Props {
  seatId: number;
}

export const DeskTop = memo((props: Props) => {
  const params = useDeskTop(props);

  return (
    <>
      <Wrapper>
        <Text color="#black" fw={1000} ta="center" size="lg">
          {props.seatId}
        </Text>
        <FaDesktop
          onClick={params.handleClickFaDeskTop}
          size="80px"
          color={params.vacantColor}
        ></FaDesktop>
      </Wrapper>

      {!params.notVacant ? (
        <SitdownModal
          open={params.openSitdownModal}
          handleClose={params.handleCloseSitdownModal}
          onOk={params.handleSitDownOk}
          seatId={params.seatId}
        />
      ) : (
        <StandUpModal
          open={params.openStandupModal}
          handleClose={params.handleCloseStandupModal}
          onOk={params.handleStandUpOk}
        />
      )}
    </>
  );
});

const Wrapper = styled.div`
  padding: 6px;
  margin: 6px;
  height: ${SeatSize}px;
  width: ${SeatSize}px;
`;
