import React, { useEffect, useState } from "react";
import { getGlobalItem } from "../utils/helper";
import { UserCardProps } from "../interfaces/interfaces";
import UserCard from "./UserCard";
import UsersEmptyState from "./UsersEmptyState";

const AllUsersList = () => {
  const [users, setUsers] = useState<UserCardProps[]>([]);

  function fetchUsers() {
    const availableUsers = getGlobalItem("allUsersData");

    if (availableUsers?.length > 0) setUsers(availableUsers);
    else {
      setUsers([]);
    }
  }

  useEffect(() => {
    fetchUsers();
    window.addEventListener("storage", fetchUsers);

    return () => window.removeEventListener("storage", fetchUsers);
  }, []);

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
              key={user.createdAt?.toString()}
              createdAt={user.createdAt}
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
