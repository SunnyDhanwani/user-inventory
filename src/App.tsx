import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import UserModal from "./components/UserModal";
import AllUsersList from "./components/AllUsersList";
import { getGlobalItem, setGlobalItem } from "./utils/helper";
import PaginationBar from "./components/PaginationBar";
import "./styles/App.scss";

function App() {
  const [modalDetails, setModalDetails] = useState({
    isOpen: false,
    userDetails: undefined,
    isView: false,
  });
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const handleUserModalClose = () => {
    setModalDetails({
      ...modalDetails,
      isOpen: false,
      isView: false,
      userDetails: undefined,
    });
  };

  const handleUserModalOpen = (id: any = "", isView: boolean = false) => {
    if (id) {
      const allUsers = getGlobalItem("allUsersData");
      const user = allUsers.find((el: any) => {
        if (el.id === id) return el;
      });

      setModalDetails({
        ...modalDetails,
        isOpen: true,
        userDetails: user,
        isView,
      });
    } else {
      setModalDetails({ ...modalDetails, isOpen: true, isView });
    }
  };

  const handleViewUser = (id: any) => {
    handleUserModalOpen(id, true);
  };

  const handleEditUser = (id: any) => {
    handleUserModalOpen(id);
  };

  // useEffect(() => {
  //   setGlobalItem("allUsersData", [
  //     {
  //       username: "SunnyDhanwani",
  //       dob: "2018-12-31",
  //       age: "5",
  //       food: "PIZZA",
  //       hobbies: "TS",
  //       gender: "MALE",
  //       createdAt: "2023-09-21T17:37:33.256Z",
  //       updatedAt: "2023-09-21T17:37:33.256Z",
  //       id: 1583472685439,
  //     },
  //     {
  //       username: "Gudiya",
  //       dob: "2018-12-31",
  //       age: "5",
  //       food: "PIZZA",
  //       hobbies: "TS",
  //       gender: "MALE",
  //       createdAt: "2023-09-21T17:37:33.256Z",
  //       updatedAt: "2023-09-21T17:37:33.256Z",
  //       id: 1583472685438,
  //     },
  //     {
  //       username: "Mummy",
  //       dob: "2018-12-31",
  //       age: "5",
  //       food: "PIZZA",
  //       hobbies: "TS",
  //       gender: "MALE",
  //       createdAt: "2023-09-21T17:37:33.256Z",
  //       updatedAt: "2023-09-21T17:37:33.256Z",
  //       id: 1583472685437,
  //     },
  //     {
  //       username: "Papa",
  //       dob: "2018-12-31",
  //       age: "5",
  //       food: "PIZZA",
  //       hobbies: "TS",
  //       gender: "MALE",
  //       createdAt: "2023-09-21T17:37:33.256Z",
  //       updatedAt: "2023-09-21T17:37:33.256Z",
  //       id: 1583472685436,
  //     },
  //   ]);
  // }, []);

  return (
    <div className="App parent-container">
      <UserModal
        isOpen={modalDetails.isOpen}
        handleModalClose={handleUserModalClose}
        userDetails={modalDetails?.userDetails}
        isView={modalDetails.isView}
      />

      <Navbar />

      <div className="landing-page-header">
        <div>LIST OF USERS</div>
        <button onClick={() => handleUserModalOpen()} className="blue-btn">
          ADD USER
        </button>
      </div>

      <AllUsersList
        handleViewUser={handleViewUser}
        handleEditUser={handleEditUser}
        setTotal={setTotal}
        page={page}
        limit={limit}
        setLimit={setLimit}
      />

      {total > 0 && (
        <PaginationBar
          page={page}
          limit={limit}
          total={total}
          setLimit={setLimit}
          setPage={setPage}
        />
      )}
    </div>
  );
}

export default App;
