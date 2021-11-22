import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import { updateTodo } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux'

const DialogEdit = (props) => {
  const { handleClose, open, detail } = props;
  const [judul, setJudul] = React.useState('')
  const [deskripsi, setDeskripsi] = React.useState()
  const dispatch = useDispatch()
  const changeJudul = (e) => {
    setJudul(e.target.value)
  }
  
  const changeDeskripsi= (e) => {
    setDeskripsi(e.target.value)
  }

  const handleSubmit = (e) => {
    dispatch(updateTodo({
      ...detail,
      title: judul,
      description: deskripsi
    }))
    return handleClose()
  }
  React.useEffect(() => {
      setJudul(detail.title)
      setDeskripsi(detail.description);
  }, [detail.description, detail.title])
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle> Edit Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          untuk membuat task baru,silahkan isi form dibawah ini. lalu simpan.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="judul"
          label="judul"
          type="text"
          onChange={changeJudul}
          defaultValue={judul}
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="Deskripsi"
          label="Deskripsi"
          type="text"
           onChange={changeDeskripsi}
          defaultValue={deskripsi}
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

export default DialogEdit
