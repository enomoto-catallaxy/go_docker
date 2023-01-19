import { memo, useCallback, useMemo, useState } from "react";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
import { SeatSize } from "../../../const/Seat";
import { Text } from "@mantine/core";
import { SitdownModal } from "./modal/sitdownModal";
import { StandUpModal } from "./modal/standupModal";

//TODO: seatIdのオプショナルはずす
interface Props {
  seatId?: number;
}

export const DeskTop = memo((props: Props) => {
  const [notVacant, setNotVacant] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = useCallback(() => {
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const vacantColor = useMemo(() => {
    return notVacant ? "red" : "blue";
  }, [notVacant]);

  const handleSitDownOk = useCallback(() => {
    setNotVacant(true);
    setOpenModal(false);
  }, []);

  const handleStandUpOk = useCallback(() => {
    setNotVacant(false);
    setOpenModal(false);
  }, []);

  return (
    <>
      <Wrapper>
        <Text color="#black" fw={1000} ta="center" size="lg">
          {props.seatId}
        </Text>
        <FaDesktop
          onClick={handleClick}
          size="80px"
          color={vacantColor}
        ></FaDesktop>
      </Wrapper>

      {!notVacant ? (
        <SitdownModal
          open={openModal}
          handleClose={handleCloseModal}
          onOk={handleSitDownOk}
        />
      ) : (
        <StandUpModal
          open={openModal}
          handleClose={handleCloseModal}
          onOk={handleStandUpOk}
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
