import { memo, useCallback, useMemo, useState } from "react";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
import { SeatSize } from "../../const/Seat";

interface Props {
  notVacant?: boolean;
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
      <FaDesktop onClick={handleClick} size="60px" color={vacantColor} />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin: 12px;
  height: ${SeatSize}px;
  width: ${SeatSize}px;
`;
