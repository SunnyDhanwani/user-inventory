import React, { useState } from "react";
import Modal from "./Modal";
import { getGlobalItem, setGlobalItem } from "../utils/helper";
import { UserModalProps } from "../interfaces/interfaces";

const UserModal = ({ isOpen, handleModalClose }: UserModalProps) => {
  const defaultDetails = {
    username: "",
    dob: "",
    age: "",
    food: "",
    hobbies: "",
    gender: "",
  };
  const [userDetails, setUserDetails] = useState(defaultDetails);
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
    const newUser = {
      ...userDetails,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const users = getGlobalItem("allUsersData");

    if (users) setGlobalItem("allUsersData", [...users, newUser]);
    else setGlobalItem("allUsersData", [newUser]);

    handleClose();
  };

  const handleClose = () => {
    setUserDetails(defaultDetails);
    handleModalClose();
    window.dispatchEvent(new Event("storage"));
  };

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
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UserModal;
