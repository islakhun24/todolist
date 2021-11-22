import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import { addTodo } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux'

const DialogNew = (props) => {
  const { handleClose, open } = props;
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const dispatch = useDispatch()
  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }
   const onChangeDesc = (e) => {
    setDesc(e.target.value)
   }
  const handleSubmit = () => {
    const date = new Date();
    dispatch(  addTodo( {id: date.getMilliseconds(), title: title, description: desc, status: 0, createdAt: date.toISOString() }));
    setTitle('')
    setDesc('')
    return handleClose()
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Tambah task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          untuk membuat task baru,silahkan isi form dibawah ini. lalu simpan.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Judul"
          type="text"
          fullWidth
          value={title}
          onChange={onChangeTitle}
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Deskripsi"
          type="text"
          onChange={onChangeDesc}
          value={desc}
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Keluar</Button>
        <Button onClick={handleSubmit}>Simpan</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogNew;
