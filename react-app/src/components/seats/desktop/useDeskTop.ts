import { useCallback, useMemo, useState } from "react";

interface Props {
  seatId: number;
}

export const useDeskTop = (props: Props) => {
  const [notVacant, setNotVacant] = useState(false);

  const [openSitdownModal, setOpenSitdownModal] = useState(false);
  const [openStandupModal, setOpenStandupModal] = useState(false);

  const handleClickFaDeskTop = async () => {
    if (!notVacant) {
      setOpenSitdownModal(true);
      // await useSeatById(props);
    } else {
      setOpenStandupModal(true);
    }
  };

  const handleCloseSitdownModal = useCallback(() => {
    setOpenSitdownModal(false);
  }, []);

  const handleCloseStandupModal = useCallback(() => {
    setOpenStandupModal(false);
  }, []);

  const vacantColor = useMemo(() => {
    return notVacant ? "blue" : "#66FF66";
  }, [notVacant]);

  const handleSitDownOk = useCallback(() => {
    setNotVacant(true);
    setOpenSitdownModal(false);
  }, []);

  const handleStandUpOk = useCallback(() => {
    setNotVacant(false);
    setOpenStandupModal(false);
  }, []);

  return {
    seatId: props.seatId,
    handleClickFaDeskTop,
    vacantColor,
    notVacant,
    openSitdownModal,
    handleCloseSitdownModal,
    handleSitDownOk,
    openStandupModal,
    handleCloseStandupModal,
    handleStandUpOk,
  };
};
