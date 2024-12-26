import React from "react";

import UserList from "./AdminPanel/Users/UserList";
import PageContainer from "../components/PageContainer/PageContainer";

export default function Users() {
  return (
    <PageContainer>
      <UserList />
    </PageContainer>
  );
}
