import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import {
  dispatchStorageEvent,
  getGlobalItem,
  setGlobalItem,
  uniqueID,
} from "../utils/helper";
import { UserDetail, UserModalProps } from "../interfaces/interfaces";

const UserModal = ({
  isOpen,
  handleModalClose,
  userDetails: existingUserDetails,
  isView = false,
}: UserModalProps) => {
  const defaultDetails = {
    username: "",
    dob: "",
    age: "",
    food: "",
    hobbies: "",
    gender: "",
    id: "",
  };

  const [userDetails, setUserDetails] = useState<UserDetail>(defaultDetails);
  const handleChange = (
    e: React.FormEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { value, name } = e.currentTarget;

    if (name === "dob") {
      const currentYear = new Date().getFullYear();
      const inputYear = Number(value.split("-")[0]);
      const age = (currentYear - inputYear).toString();

      setUserDetails({ ...userDetails, [name]: value, age });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const users = getGlobalItem("allUsersData");

    if (userDetails?.id) {
      const updatedUsers: any = users.map((el: UserDetail, idx: number) => {
        if (el.id === userDetails.id) {
          return userDetails;
        } else {
          return el;
        }
      });
      setGlobalItem("allUsersData", updatedUsers);
    } else {
      const newUser = {
        ...userDetails,
        createdAt: new Date(),
        updatedAt: new Date(),
        id: uniqueID(),
      };

      if (users) setGlobalItem("allUsersData", [...users, newUser]);
      else setGlobalItem("allUsersData", [newUser]);
    }
    handleClose();
  };

  const handleClose = () => {
    setUserDetails(defaultDetails);
    handleModalClose();
    dispatchStorageEvent();
  };

  useEffect(() => {
    if (existingUserDetails?.id && isOpen) {
      setUserDetails(existingUserDetails);
    }
  }, [existingUserDetails, isOpen]);

  return (
    <Modal isModalOpen={isOpen} handleModalClose={handleModalClose}>
      <div
        style={{
          padding: "36px 36px 18px 36px",
          width: "50vw",
          height: "70vh",
          overflow: "auto",
        }}
      >
        <div style={{ fontSize: "40px", marginBottom: "36px" }}>ADD USER</div>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "start",
                width: "40%",
              }}
            >
              <label htmlFor="username">
                NAME
                <sup className="red">*</sup>
              </label>
              <input
                id="username"
                className="custom-input"
                name="username"
                onChange={handleChange}
                value={userDetails.username}
                required
                title="Please enter user name"
                disabled={isView}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "start",
                width: "40%",
              }}
            >
              <label htmlFor="age">
                AGE<sup className="red invisible">*</sup>
              </label>
              <input
                id="age"
                className="custom-input"
                name="age"
                onChange={handleChange}
                value={userDetails.age}
                disabled={true}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "start",
                width: "40%",
              }}
            >
              <label htmlFor="dob">
                DOB<sup className="red">*</sup>
              </label>
              <input
                id="dob"
                className="custom-input"
                name="dob"
                type="date"
                onChange={handleChange}
                value={userDetails.dob}
                max={new Date().toISOString().split("T")[0]}
                required
                title="Please select dob"
                disabled={isView}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "start",
                width: "40%",
              }}
            >
              <label htmlFor="gender">
                GENDER<sup className="red">*</sup>
              </label>
              <div style={{ display: "flex", gap: "30px" }}>
                <div>
                  <input
                    id="male"
                    className="custom-input"
                    name="gender"
                    value={"MALE"}
                    checked={userDetails.gender === "MALE"}
                    type="radio"
                    onChange={handleChange}
                    required
                    title="Please select any one gender"
                    disabled={isView}
                  />{" "}
                  <label htmlFor="male">MALE</label>
                </div>

                <div>
                  <input
                    id="female"
                    className="custom-input"
                    name="gender"
                    value={"FEMALE"}
                    checked={userDetails.gender === "FEMALE"}
                    type="radio"
                    onChange={handleChange}
                    required
                    disabled={isView}
                  />{" "}
                  <label htmlFor="female">FEMALE</label>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "start",
                width: "40%",
              }}
            >
              <label htmlFor="username">
                FAVOURITE FOOD<sup className="red">*</sup>
              </label>
              <select
                className="custom-input"
                placeholder="Select favourite food"
                value={userDetails.food}
                onChange={handleChange}
                name="food"
                required
                title="Please select favourite food"
                disabled={isView}
              >
                <option value={""} disabled={true}>
                  Select favourite food
                </option>
                <option value={"PIZZA"}>PIZZA</option>
                <option value={"BURGER"}>BURGER</option>
                <option value={"PASTA"}>PASTA</option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                alignItems: "start",
                width: "40%",
              }}
            >
              <label htmlFor="hobbies">
                HOBBIES<sup className="red invisible">*</sup>
              </label>
              <textarea
                id="hobbies"
                className="custom-input"
                name="hobbies"
                onChange={handleChange}
                value={userDetails.hobbies}
                style={{ width: "80%" }}
                rows={5}
                disabled={isView}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              gap: "24px",
              position: "absolute",
              bottom: "24px",
              right: "24px",
            }}
          >
            {isView ? (
              <button
                type="button"
                className="blue-btn"
                onClick={() => handleClose()}
              >
                Close
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="orange-btn"
                  onClick={() => handleClose()}
                >
                  Cancel
                </button>

                <button type="submit" className="blue-btn">
                  Submit
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UserModal;
