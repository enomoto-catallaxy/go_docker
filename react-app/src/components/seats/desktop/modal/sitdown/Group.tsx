import { memo } from "react";
import { Group } from "@mantine/core";
import styled from "styled-components";

interface Props {
  open: boolean;
  handleClose: () => void;
  onOk: () => void;
  seatId: number;
  seatInfo: any[];
}

export const SitdownModalGroup = memo((props: Props) => {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  return (
    <Group position="center">
      <Wrapper>
        <h2>
          この席は{month + 1}/{date}現在、OOOさんが予約中です。
          <br />
          {/* 予約を決定しますか？ seatInfo:{props.seatInfo} */}
        </h2>
      </Wrapper>
    </Group>
  );
});

const Wrapper = styled.div`
  display: block;
`;
