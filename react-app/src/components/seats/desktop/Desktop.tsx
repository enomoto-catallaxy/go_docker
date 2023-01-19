import { memo, useCallback, useMemo, useState } from "react";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
import { SeatSize } from "../../../const/Seat";
import { Text } from "@mantine/core";
import { RegisterModal } from "../register/modal";

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

  const handleOk = useCallback(() => {
    setNotVacant(true);
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

      <RegisterModal
        open={openModal}
        handleClose={handleCloseModal}
        onOk={handleOk}
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
