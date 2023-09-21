import { UserCardProps, UserDetail } from "../interfaces/interfaces";
import "./../styles/UserCard.scss";

const UserCard = ({
  username,
  age,
  gender,
  dob,
  food,
  hobbies,
  createdAt,
  id,
  handleDeleteUser,
  handleViewUser,
  handleEditUser,
}: UserDetail & UserCardProps) => {
  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="ellipsis">{username}</div>
        <div
          className="circle-30"
          style={{
            backgroundColor:
              +age >= 0 && +age < 25
                ? "#1A7318"
                : +age >= 25 && +age < 50
                ? "#F41B9E"
                : "#FEA41D",
          }}
        ></div>
      </div>

      <div className="user-card-body">
        <div>Age</div>
        <div className="value">{age}</div>
        <div>DOB</div>
        <div className="value">{dob.toString()}</div>
        <div>Gender</div>
        <div className="value">{gender}</div>
        <div>Food</div>
        <div className="value">{food}</div>
        <div>Hobbies</div>
        <div className="ellipsis value">{hobbies || "-"}</div>
      </div>

      <div className="user-card-footer">
        <button className="orange-btn" onClick={() => handleDeleteUser(id)}>
          DELETE
        </button>
        <button className="blue-btn" onClick={() => handleViewUser(id)}>
          VIEW
        </button>
        <button className="blue-btn" onClick={() => handleEditUser(id)}>
          EDIT
        </button>
      </div>
    </div>
  );
};

export default UserCard;
