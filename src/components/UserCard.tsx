import React from "react";
import { UserCardProps } from "../interfaces/interfaces";

const UserCard = ({
  username,
  age,
  gender,
  dob,
  food,
  hobbies,
  createdAt,
}: UserCardProps) => {
  return (
    <div
      className="user-card"
      //   style={{
      //     border: "1px solid black",
      //     borderRadius: "10px",
      //     maxWidth: "360px",
      //     boxShadow: "2px 6px 4px 0px rgba(0, 0, 0, 0.25)",
      //   }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            maxWidth: "70%",
          }}
          className="ellipsis"
        >
          {username}
        </div>
        <div
          style={{
            height: "30px",
            width: "30px",
            backgroundColor:
              age > 0 && age < 25
                ? "#1A7318"
                : age >= 25 && age < 50
                ? "#F41B9E"
                : "#FEA41D",
            borderRadius: "100%",
          }}
        ></div>
      </div>

      <div
        style={{
          padding: "20px 30px",
          borderBottom: "1px solid black",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            // gridTemplateRows: 4,
            gap: "20px",
            textAlign: "left",
          }}
        >
          <div>Age</div>
          <div>{age}</div>
          <div>DOB</div>
          <div>{dob.toString()}</div>
          <div>Gender</div>
          <div>{gender}</div>
          <div>Food</div>
          <div>{food}</div>
          <div>Hobbies</div>
          <div className="ellipsis">{hobbies || "-"}</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 30px",
        }}
      >
        <button className="orange-btn">Delete</button>
        <button className="blue-btn">View</button>
        <button className="blue-btn">Edit</button>
      </div>
    </div>
  );
};

export default UserCard;
