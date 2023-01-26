import { memo, useCallback, useMemo, useState } from "react";
import { FaDesktop } from "react-icons/fa";
import styled from "styled-components";
import { Text } from "@mantine/core";
import { SitdownModal } from "../modal/sitdown/sitdownModal";
import { SeatSize } from "../../../../const/Seat";
import axios from "axios";

interface Props {
  seatId: number;
  handleClickFaDeskTop: () => void;
  openSitdownModal: boolean;
  handleCloseSitdownModal: () => void;
  handleSitDownOk: () => void;
}

export const CanSitdownDeskTop = memo((props: Props) => {
  const [seatInfo, setSeatInfo] = useState([]);

  const handleClickFaDeskTop = useCallback(async () => {
    await axios.get(`seat/${props.seatId}`).then((response) => {
      setSeatInfo(response.data);
      console.log(seatInfo);
    });

    // const data = (await axios.get(`seat/${props.seatId}`)).data;

    // console.log(data);

    props.handleClickFaDeskTop();
  }, [seatInfo]);

  return (
    <>
      <Wrapper>
        <Text color="#black" fw={1000} ta="center" size="lg">
          {props.seatId}
        </Text>
        <FaDesktop
          onClick={handleClickFaDeskTop}
          size="80px"
          color="#66FF66"
        ></FaDesktop>
      </Wrapper>

      <SitdownModal
        open={props.openSitdownModal}
        handleClose={props.handleCloseSitdownModal}
        onOk={props.handleSitDownOk}
        seatId={props.seatId}
        seatInfo={seatInfo}
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
