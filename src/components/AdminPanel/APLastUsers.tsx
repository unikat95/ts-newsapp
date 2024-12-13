import React from "react";

import useMainContext from "../../hooks/useMainContext";
import APLastUser from "./APLastUser";
import APHeading from "./APHeading";

export default function APLastUsers() {
  const { sortedUsers } = useMainContext();

  return (
    <>
      <APHeading text="Last Users" />
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 justify-start items-start gap-5">
        {sortedUsers
          ?.map((user) => <APLastUser key={user.id} user={user} />)
          .slice(0, 4)}
      </div>
    </>
  );
}
