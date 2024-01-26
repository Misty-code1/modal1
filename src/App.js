import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button className="modalBtn" onClick={() => setOpenModal(true)}>Modal</button>
      <Modal open={openModal} onclose={() => setOpenModal(false)} />
    </>
  );
}

export default App;
