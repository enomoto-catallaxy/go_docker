import { memo } from "react";
import { useDeskTop } from "./useDeskTop";
import { CanSitdownDeskTop } from "./canSitdown/DeskTop";
import { CanStandupDeskTop } from "./canStandup/DeskTop";

interface Props {
  seatId: number;
}

export const DeskTop = memo((props: Props) => {
  const params = useDeskTop(props);

  return (
    <>
      {!params.notVacant && (
        <CanSitdownDeskTop
          seatId={params.seatId}
          handleClickFaDeskTop={params.handleClickFaDeskTop}
          handleSitDownOk={params.handleSitDownOk}
          openSitdownModal={params.openSitdownModal}
          handleCloseSitdownModal={params.handleCloseSitdownModal}
        />
      )}

      {params.notVacant && (
        <CanStandupDeskTop
          seatId={params.seatId}
          handleClickFaDeskTop={params.handleClickFaDeskTop}
          handleStandupOk={params.handleStandUpOk}
          openStandupModal={params.openStandupModal}
          handleCloseStandupModal={params.handleCloseStandupModal}
        />
      )}
    </>
  );
});
