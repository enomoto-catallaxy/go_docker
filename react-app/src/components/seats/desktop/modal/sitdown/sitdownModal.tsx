import { memo, useEffect, useState } from "react";
import { Modal } from "antd";
import axios from "axios";
import { SitdownModalGroup } from "./Group";

interface Props {
  open: boolean;
  handleClose: () => void;
  onOk: () => void;
  seatId: number;
}

export const SitdownModal = memo((props: Props) => {
  const [seatInfo, setSeatInfo] = useState([]);

  useEffect(() => {
    (async () => {
      await axios.get(`seat/${props.seatId}`).then((response) => {
        setSeatInfo(response.data);
        console.log(seatInfo);
      });
    })();
  }, [props.seatId, seatInfo, props.open]);

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
