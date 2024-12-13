import React from "react";

import useLoading from "../../../hooks/useLoading";
import APLoading from "../../../components/AdminPanel/APLoading";

export default function Archive() {
  const loading = useLoading();
  if (loading) return <APLoading />;

  return <div>Archive</div>;
}
