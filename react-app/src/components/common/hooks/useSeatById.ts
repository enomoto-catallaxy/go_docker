import { useState } from "react";
import axios from "axios";

interface Props {
  seatId: number;
}

export const useSeatById = async (props: Props) => {
  const [seatInfo, setSeatInfo] = useState([]);

  await axios.get(`seat/${props.seatId}`).then((response) => {
    setSeatInfo(response.data);
    console.log(seatInfo);
  });

  return seatInfo;
};
