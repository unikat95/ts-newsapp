import { useEffect, useState } from "react";

export default function useLoading(delay: number = 500) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);
  return loading;
}
