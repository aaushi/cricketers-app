import { useEffect, useState } from "react";
import getPlayers from "../../get-players"; 

function useFetchPlayersData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlayerData() {
      try {
        const res = await getPlayers();
        setData(res);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchPlayerData();
  }, []);
  return { data, loading, error };
}

export default useFetchPlayersData;
