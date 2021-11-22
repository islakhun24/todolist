/* eslint-disable react-hooks/rules-of-hooks */
import { DragHandle, Edit, Delete } from "@mui/icons-material";
import { Button, Stack, IconButton } from "@mui/material";
import React from "react";
import DialogEdit from "./DialogEdit";

import { deleteTodo, updateTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

const CardTask = (props) => {
  const [detail, setDetail] = React.useState({});
  const { data, status } = props;
  status === 0
    ? data.sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt, undefined, {
          caseFirst: "upper",
        })
      )
    : data.sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt, undefined, {
          caseFirst: "upper",
        })
      );

  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSelesai = async (val) => {
    console.log(val);
    dispatch(
      updateTodo({
        ...val,
        status: 1,
      })
    );
  };
  const editClick = (value) => {
    setDetail(data.find((post) => post.id === value));
    setOpen(true);
  };
  const hapusClick = async (value) => {
    dispatch(deleteTodo(value));
  };

  return data.map((val, index) => {
    return (
      <div key={index} className="card-item">
        <DialogEdit detail={detail} open={open} handleClose={handleClose} />

        <div className="card-item-header">
          <div className="title-card-item">{val.title}</div>
          <div className="action-card-item">
            <Stack direction="row" spacing={2}>
              <IconButton
                onClick={() => editClick(val.id)}
                aria-label="delete"
                size="small"
              >
                <Edit fontSize="inherit" />
              </IconButton>
              {val.status == 0 ? (
                <IconButton
                  onClick={() => hapusClick(val.id)}
                  aria-label="delete"
                  size="small"
                >
                  <Delete fontSize="inherit" />
                </IconButton>
              ) : null}
            </Stack>
          </div>
        </div>
        <div className="desc">{val.description}</div>
        <div className="footer-card">
          {val.status === 0 ? (
            <Button
              onClick={() => handleSelesai(val)}
              variant="contained"
              color="success"
              size="small"
            >
              Selesai
            </Button>
          ) : (
            <div></div>
          )}

          <div className="action-card-item">{val.createdAt}</div>
        </div>
      </div>
    );
  });
};

export default CardTask;
