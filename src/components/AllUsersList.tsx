import React, { useEffect, useState } from "react";
import {
  dispatchStorageEvent,
  getGlobalItem,
  setGlobalItem,
} from "../utils/helper";
import { UserDetail } from "../interfaces/interfaces";
import UserCard from "./UserCard";
import UsersEmptyState from "./UsersEmptyState";

const AllUsersList = ({
  handleViewUser,
  handleEditUser,
  setTotal,
  page,
  limit,
}: any) => {
  const [users, setUsers] = useState<UserDetail[]>([]);

  function fetchUsers() {
    const availableUsers = getGlobalItem("allUsersData");

    if (availableUsers?.length > 0) {
      const paginatedUsers = availableUsers.slice(
        (page - 1) * +limit,
        page * (+limit + 0)
      );
      setUsers(paginatedUsers);
      setTotal(availableUsers?.length);
    } else {
      setUsers([]);
      setTotal(0);
    }
  }

  useEffect(() => {
    fetchUsers();
    window.addEventListener("storage", fetchUsers);

    return () => window.removeEventListener("storage", fetchUsers);
  }, [page, limit]);

  const handleDeleteUser = (id: String) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setGlobalItem("allUsersData", updatedUsers);
    dispatchStorageEvent();
  };

  if (users?.length === 0) return <UsersEmptyState />;
  return (
    <div
      style={{
        marginTop: "36px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "20px 90px",
        gap: "20px",
      }}
    >
      {users?.length ? (
        users.map((user) => {
          return (
            <UserCard
              username={user.username}
              age={user.age}
              gender={user.gender}
              dob={user.dob}
              food={user.food}
              hobbies={user.hobbies}
              key={`${user.id}`}
              createdAt={user.createdAt}
              id={user.id}
              handleDeleteUser={handleDeleteUser}
              handleViewUser={handleViewUser}
              handleEditUser={handleEditUser}
            />
          );
        })
      ) : (
        <>
          <UsersEmptyState />
        </>
      )}
    </div>
  );
};

export default AllUsersList;
