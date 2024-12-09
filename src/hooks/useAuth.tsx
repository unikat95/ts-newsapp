import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserProps } from "../context/MainContextTypes";
import { auth, db } from "../config/firebase";
import { collection, doc, onSnapshot } from "firebase/firestore";

export default function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);
  const [userList, setUserList] = useState<UserProps[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  const sortedUsers = userList?.sort(
    (a, b) => new Date(b.joinedAt).getTime() - new Date(a.joinedAt).getTime()
  );

  useEffect(() => {
    const userUnsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user) {
        const currentUserUnsubscribe = onSnapshot(
          doc(db, "users", user.uid),
          (userData) => {
            setCurrentUser(
              userData.data() ? (userData.data() as UserProps) : null
            );
            setInitializing(false);
          }
        );

        return () => currentUserUnsubscribe();
      } else {
        setLoading(false);
        setInitializing(false);
      }
    });

    const userListUnsubscribe = onSnapshot(collection(db, "users"), (users) => {
      const usersData: UserProps[] = [];
      users.forEach((user) => {
        usersData.push(user.data() as UserProps);
      });
      setUserList(usersData);
    });

    return () => {
      userListUnsubscribe();
      userUnsubscribe();
    };
  }, [user]);

  return {
    user,
    setUser,
    currentUser,
    setCurrentUser,
    userList,
    setUserList,
    loading,
    setLoading,
    initializing,
    setInitializing,
    sortedUsers,
  };
}
