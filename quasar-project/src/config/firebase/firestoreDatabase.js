import { firestoreDB } from 'src/config/firebase/index';
import { doc, collection } from 'firebase/firestore';
import * as Constants from 'src/constants';

const refs = {
  createTask: () => doc(collection(firestoreDB, Constants.NODES.TASKS)),  
  getTasks: () => collection(firestoreDB, Constants.NODES.TASKS),
  updateTask: (id) => doc(firestoreDB, Constants.NODES.TASKS, id),
  deleteTask: (id) => doc(firestoreDB, Constants.NODES.TASKS,id),
};

export { refs };
