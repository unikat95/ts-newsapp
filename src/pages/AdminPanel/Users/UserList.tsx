import React, { useState } from "react";

import useMainContext from "../../../hooks/useMainContext";
import useLoading from "../../../hooks/useLoading";
import APLoading from "../../../components/AdminPanel/APLoading";
import APSearch from "../../../components/AdminPanel/APSearch";
import APUserDropdown from "../../../components/AdminPanel/APUserDropdown";
import ListItem from "../../../components/ListItem/ListItem";
import APHeading from "../../../components/AdminPanel/APHeading";
import ListLoader from "../../../components/ListLoader/ListLoader";

export default function UserList() {
  const { userList, editLoading } = useMainContext();
  const [userLoading, setUserLoading] = useState(false);
  const [usersToDisplay, setUsersToDisplay] = useState(userList);

  const loading = useLoading();
  if (loading) return <APLoading />;

  return (
    <>
      {usersToDisplay && (
        <div className="w-full h-full flex flex-col">
          <div
            className={`w-full h-full flex flex-col justify-start items-start rounded-xl overflow-auto gap-5
            ${!location.pathname.includes("users") && "p-5"}`}
          >
            <APHeading text="User list" />
            <APSearch
              setLoading={setUserLoading}
              setUsersToDisplay={setUsersToDisplay}
              userList={userList}
              placeholder="search for user..."
            />
            <div className="w-full h-full flex flex-col justify-start items-center gap-1">
              {userLoading || editLoading ? (
                <>
                  <ListLoader size={30} color="blue" />
                </>
              ) : (
                <>
                  {usersToDisplay?.length === 0
                    ? "There is no articles do display"
                    : usersToDisplay
                        .map((user) => (
                          <ListItem
                            key={user.id}
                            user={user}
                            Dropdown={APUserDropdown}
                            link="/users/user/"
                            setArrayToDisplay={setUsersToDisplay}
                          />
                        ))
                        .slice(0, 5)}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
