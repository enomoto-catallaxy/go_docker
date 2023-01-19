import { memo } from "react";
import { Group } from "@mantine/core";
import { Modal } from "antd";
import styled from "styled-components";

interface Props {
  open: boolean;
  handleClose: () => void;
  onOk: () => void;
}

export const StandUpModal = memo((props: Props) => {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  return (
    <Modal
      open={props.open}
      onCancel={props.handleClose}
      onOk={props.onOk}
      title="予約を取り消す"
      centered
      width={480}
      cancelButtonProps={{ type: "text" }}
      cancelText="キャンセル"
      destroyOnClose
    >
      <Group position="center">
        <Wrapper>
          <h2>
            この席は{month + 1}/{date}現在、OOOさんが予約中です。
            <br />
            予約を取り消しますか？
          </h2>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Wrapper>
      </Group>
    </Modal>
  );
});

const Wrapper = styled.div`
  display: block;
`;
