/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Stack, Typography } from "@mui/material";
import GridItem from "./components/GridItem";
import CardTask from "./components/CardTask";
import groupBy from "./utils/groupArray";
import Todo from "./services/todo.service";
import { useEffect, useState } from "react";
import { addTodo } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let data = useSelector((state) => state);
  const [dataSource, setDataSource] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    Todo.getData().then((res) => {
      res.map((val) => {
        dispatch(addTodo(val));
      });
    });
  }, []);
  useEffect(() => {
    setDataSource(groupBy(data, "status"));
  }, [data]);
  return (
    <div className="padding">
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom component="div">
          Todo List
        </Typography>
        <Grid container spacing={2}>
          {Object.keys(dataSource).map((val, index) => {
            return (
              <GridItem key={index} data={val} count={dataSource[val].length}>
                <CardTask status={val} data={dataSource[val]} />
              </GridItem>
            );
          })}
        </Grid>
      </Stack>
    </div>
  );
}

export default App;
