// import App from "../App";

// export default function MainWindow() {
//     return <App />
// }

import App from "../App";

import { createPanelWindow } from "./createPanelWIndow";
import { WINDOW_LABELS } from "./labels";
import { useStore } from "../store";

// inside the component, alongside the existing content:

 export default function MainWindow() {
     return <><App />

<button onClick={() => createPanelWindow({ label: WINDOW_LABELS.eq, width: 300, height: 150 })}>
  Open EQ
</button>
<button onClick={() => useStore.getState().setEQ({ preamp: Math.random() * 10 })}>
  Randomize Preamp
</button>
</>
 }