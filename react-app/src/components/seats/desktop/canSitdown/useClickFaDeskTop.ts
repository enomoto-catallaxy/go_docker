import { useSeatById } from "../../../common/hooks/useSeatById";

interface Props {
  seatId: number;
  setOpenSitdownModal: (v: boolean) => void;
}

export const useClickFaDeskTop = async (props: Props) => {
  props.setOpenSitdownModal(true);
  await useSeatById(props);
};
