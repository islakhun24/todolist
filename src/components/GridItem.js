/* eslint-disable react/jsx-no-undef */
/* eslint-disable eqeqeq */
import { Button, Grid } from "@mui/material";
import React from "react";
import "../assets/style.scss";
import DialogNew from "./DialogNew";

const GridItem = (props) => {
  const { data, count } = props;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid item xs={6} md={6} lg={3} xl={3}>
      <DialogNew open={open} handleClose={handleClose} />
      <div className="rounded-box">
        <div className="header-card ">
          <span className="title-card">
            {data == 0 ? "Belum selesai" : "Selesai"}
          </span>
          <span className="chip-badge"> {count} </span>
        </div>
        {data == 0 ? (
          <Button onClick={handleClick} variant="contained">
            + Tambah task
          </Button>
        ) : null}

        {props.children}
      </div>
    </Grid>
  );
};

export default GridItem;
