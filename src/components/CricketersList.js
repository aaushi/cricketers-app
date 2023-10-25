import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import useFetchPlayersData from "../utils/customHooks/useFetchCricketersData";
import useAge from "../utils/customHooks/useAge";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";

export default function CricketersList() {

  const [rowData, setRowData] = useState([]);
  const { data, loading, error } = useFetchPlayersData();
  const [searchInput,setSearchInput]=useState();
  const [allData,setAllData]=useState(data);
  const ageCalculator = useAge();

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: "headerClass",
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
      headerClassName: "headerClass",
    },
    {
      field: "points",
      headerName: "Points",
      flex: 1,
      headerClassName: "headerClass",
    },
    {
      field: "rank",
      headerName: "Rank",
      flex: 1,
      headerClassName: "headerClass",
    },
    {
      field: "age",
      headerName: "Age",
      flex: 1,
      headerClassName: "headerClass",
    },
    {
      field: "details",
      headerName: "Details",
      flex: 1,
      renderCell: (params) => <Link to={`/details/${params.id}`}>Know More</Link>,
      headerClassName: "headerClass",
    },
  ];

   useEffect(() => {
    if (data.length > 0) {
      const newRowData = data.map((item) => {
        const age = ageCalculator(item.dob); 
        return {
          id: item.id,
          name: item.name,
          type: item.type,
          points: item.points,
          age: age,
          rank: item.rank,
        };
      });
      setRowData(newRowData);
      setAllData(newRowData)
    }
  }, [data]);

  const handleSearch=(e)=>{
    e.preventDefault();
    setSearchInput(e.target.value)
    let searchResults = allData.filter((item) => {
      let listName = item.name.toLowerCase();
      let search = e.target.value.toLowerCase();
      return listName.includes(search);
    });
    setRowData(searchResults);
  }
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "15px" }}
      >
        <TextField
          id="outlined-basic"
          label="Search By Name"
          variant="outlined"
          onChange={(e) => handleSearch(e)}
          value={searchInput}
        />
      </div>
      <Box
        sx={{
          height: 650,
          width: "98%",
          '& .headerClass': {
            fontWeight: "bold",
          },
        }}
      >
        {data && (
          <DataGrid
            rows={rowData}
            columns={columns}
            getRowId={(row) => row.id}
            pageSizeOptions={[10]}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
          />
        )}
      </Box>
    </>
  );
}
