import { useState } from "react";
import ShowRoom from './components/ShowRoom'
import UseCallBack from "./components/UseCallBack";
import UseMemoComp from './components/UseMemoComp.jsx'

function App() {
  const [show, setShow] = useState(false)
  const [callBack, setCallBack] = useState(true)
  const [showMemo, setShowMemo] = useState(false)
  return (<div>

    <button onClick={() => setShow(pre => !pre)}>THUNK EXPL</button>
    <button onClick={() => setCallBack(pre => !pre)}>CallBack EXPL</button>
    <button onClick={() => setShowMemo(pre => !pre)}>useMemo EXPL</button>

    {showMemo ? <UseMemoComp /> : null}
    {show ? <ShowRoom /> : null}
    {callBack ? <UseCallBack /> : null}
  </div >)
}
export default App;

