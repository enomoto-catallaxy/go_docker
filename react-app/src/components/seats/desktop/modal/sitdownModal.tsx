/* eslint-disable react/jsx-no-comment-textnodes */
import { memo } from "react";
import { Group } from "@mantine/core";
import { Modal } from "antd";
import styled from "styled-components";

interface Props {
  open: boolean;
  handleClose: () => void;
  onOk: () => void;
}

export const SitdownModal = memo((props: Props) => {
  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();
  return (
    // TODO: 予約している生徒に関するデータを表示

    <Modal
      open={props.open}
      onCancel={props.handleClose}
      onOk={props.onOk}
      title="座席を登録する"
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
            予約を決定しますか？
          </h2>
        </Wrapper>
      </Group>
    </Modal>
  );
});

const Wrapper = styled.div`
  display: block;
`;
