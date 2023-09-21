import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserModal from "./components/UserModal";
import AllUsersList from "./components/AllUsersList";

function App() {
  const [modalDetails, setModalDetails] = useState({ isOpen: false });

  const handleUserModalClose = () => {
    setModalDetails({ ...modalDetails, isOpen: false });
  };

  const handleUserModalOpen = () => {
    setModalDetails({ ...modalDetails, isOpen: true });
  };

  return (
    <div className="App">
      <UserModal
        isOpen={modalDetails.isOpen}
        handleModalClose={handleUserModalClose}
      />

      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 90px",
        }}
      >
        <div style={{ fontSize: "28px" }}>LIST OF USERS</div>
        <button onClick={handleUserModalOpen} className="blue-btn">
          ADD USER
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div></div>
      </div>

      <AllUsersList />
    </div>
  );
}

export default App;
