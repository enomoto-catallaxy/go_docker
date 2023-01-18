import { memo, useCallback, useMemo, useState } from "react";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
import { SeatSize } from "../../const/Seat";
import { Text } from "@mantine/core";

//TODO: seatIdのオプショナルはずす
interface Props {
  notVacant?: boolean;
  seatId?: number;
}

export const DeskTop = memo((props: Props) => {
  const [notVacant, setNotVacant] = useState(props.notVacant);

  const handleClick = useCallback(() => {
    setNotVacant(true);
  }, []);

  const vacantColor = useMemo(() => {
    return props.notVacant || notVacant ? "red" : "blue";
  }, [props.notVacant, notVacant]);

  return (
    <Wrapper>
      <Text color="#black" fw={1000} ta="center">
        {props.seatId}
      </Text>

      <FaDesktop
        onClick={handleClick}
        size="60px"
        color={vacantColor}
      ></FaDesktop>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin: 6px;
  height: ${SeatSize}px;
  width: ${SeatSize}px;
`;
