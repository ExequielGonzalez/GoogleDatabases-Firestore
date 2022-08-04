import { realtimeDB } from 'src/config/firebase/index';
import { ref } from 'firebase/database';
import * as Constants from 'src/constants';

const refs = {
  createTask: () => ref(realtimeDB, `${Constants.NODES.TASKS}`),
  getTasks: () => ref(realtimeDB, `${Constants.NODES.TASKS}`),
  updateTask: (id) => ref(realtimeDB, `${Constants.NODES.TASKS}/${id}`),
  deleteTask: (id) => ref(realtimeDB, `${Constants.NODES.TASKS}/${id}`)
};
export { refs };
