// export default function EQWindow() {
//     return <div>EQ WINDOW</div>
// }

import { useSyncedSlice } from "./useSyncedSlice";
import { EQState } from "../store/types";

const initialEQState: EQState = { enabled: true, preamp: 0, bands: new Array(10).fill(0), activePreset: "Flat" };

export default function EQWindow() {
  const eq = useSyncedSlice("eq", initialEQState);
  return <div>EQ WINDOW — preamp: {eq.preamp}</div>;
}