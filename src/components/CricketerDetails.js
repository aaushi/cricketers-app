import  { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import useFetchPlayersData from "../utils/customHooks/useFetchCricketersData";
import useAge from "../utils/customHooks/useAge";

export default function CricketerDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetchPlayersData();
  const [cricketer, setCricketer] = useState([]);
  const [age,setAge]=useState();
  const ageCalculator = useAge();
 
  useEffect(() => {
    console.log(data);
    const selectedCricketer = data.filter(
      (cricketer) => id === cricketer.id
    );
    if (selectedCricketer) {
        setCricketer(selectedCricketer)
        const a = ageCalculator(selectedCricketer[0]?.dob);
        setAge(a);
    }
  },[id,data]);
 
  return (
    <>
      <Card sx={{ minWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {cricketer[0]?.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {cricketer[0]?.description}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Type: {cricketer[0]?.type}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Points: {cricketer[0]?.points}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Rank: {cricketer[0]?.rank}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Age: {age}
          </Typography>
        </CardContent>
      </Card>
      <Link to={`/`}>Back to Cricketers</Link>
    </>
  );
}
