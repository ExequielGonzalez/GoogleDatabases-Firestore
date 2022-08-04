import { deleteDoc, updateDoc, setDoc, getDocs } from 'firebase/firestore';
import { refs } from 'src/config/firebase/firestoreDatabase';

export async function createTaskAPI(task) {
  try {
    const ref = refs.createTask();
    task.id = ref.id;
    await setDoc(ref, task);
    return { status: 200 };
  } catch (error) {
    console.log(error);
    return { status: 400, error: error };
  }
}

export async function readTasksAPI() {
  const tasksSnap = await getDocs(refs.getTasks());
  const tasks = tasksSnap.docs.map((doc) => doc.data());
  if (tasks.length > 0) {
    return { status: 200, data: tasks };
  } else {
    return { status: 400, error: 'No tasks found' };
  }
}

export async function updateTaskAPI(task) {
  try {
    await updateDoc(refs.updateTask(task.id), {
      id: task.id,
      title: task.title,
      description: task.description,
      state: task.state,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTaskAPI(task) {
  await deleteDoc(refs.deleteTask(task.id));
}


