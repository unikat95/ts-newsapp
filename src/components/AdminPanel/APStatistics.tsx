import React, { useEffect, useState } from "react";

import useMainContext from "../../hooks/useMainContext";

import { FaNewspaper, FaUsers } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";

import APUserCard from "./APUserCard";
import APStatisticsItem from "./APStatisticsItem";
import APHeading from "./APHeading";

export default function APStatistics() {
  const { articles, userList } = useMainContext();
  const [totalLikes, setTotalLikes] = useState<number>();
  const [totalComments, setTotalComments] = useState<number>();

  useEffect(() => {
    const allLikesCount = articles.reduce(
      (total, article) => total + article.likes.length,
      0
    );

    const allComentsCount = articles.reduce(
      (total, article) => total + article.comments.length,
      0
    );

    setTotalLikes(allLikesCount);
    setTotalComments(allComentsCount);
  }, [articles]);

  return (
    <>
      <APHeading text="Welcome Back!" />
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <APUserCard />

        <APStatisticsItem
          text="Total articles"
          Icon={FaNewspaper}
          variant="blue"
        >
          {articles.length}
        </APStatisticsItem>
        <APStatisticsItem text="Total users" Icon={FaUsers} variant="green">
          {userList?.length}
        </APStatisticsItem>
        <APStatisticsItem
          text="Total comments"
          Icon={FaQuoteLeft}
          variant="yellow"
        >
          {totalComments}
        </APStatisticsItem>
        <APStatisticsItem text="Total likes" Icon={FaQuoteLeft} variant="red">
          {totalLikes}
        </APStatisticsItem>
      </div>
    </>
  );
}
