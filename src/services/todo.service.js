import axios from 'axios';
import {TODO_LIST} from '../constants/API'
const Todo =  {
    getData:  async () => {
      const res = await axios(TODO_LIST, { method: 'GET' })
      return res?.data
   },
   
}

export default Todo;