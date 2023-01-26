import { memo } from "react";
import { Modal } from "antd";
import { SitdownModalGroup } from "./Group";

interface Props {
  open: boolean;
  handleClose: () => void;
  onOk: () => void;
  seatId: number;
  seatInfo: any[];
}

export const SitdownModal = memo((props: Props) => {
  console.log(props.seatInfo);

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
      <SitdownModalGroup {...props} />
    </Modal>
  );
});
