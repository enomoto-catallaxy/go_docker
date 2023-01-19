import { memo } from "react";
import { Button, Group, Modal } from "@mantine/core";

interface Props {
  open: boolean;
  handleClose: () => void;
  onOk: () => void;
}

export const RegisterModal = memo((props: Props) => {
  return (
    <Modal
      opened={props.open}
      onClose={props.handleClose}
      title="Introduce yourself!"
      size="xl"
    >
      <Group position="center">
        <Button onClick={props.onOk}>この席に座る</Button>
      </Group>
    </Modal>
  );
});
