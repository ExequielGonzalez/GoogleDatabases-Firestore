import { realtimeDB } from 'src/config/firebase';
import * as Constants from 'src/constants';
import { update, push, onValue, remove } from 'firebase/database';
import { refs } from 'src/config/firebase/realtimeDatabase';

export async function createTaskAPI(task) {
  try {
    const key = push(refs.createTask(), task).key;
    await update(refs.updateTask(key), { id: key });
    return { status: 200 };
  } catch (error) {
    console.log(error);
    return { status: 400, error: error };
  }
}

export async function readTasksAPI() {
  try {
    return await new Promise((resolve, reject) => {
      onValue(
        refs.getTasks(),
        (tasksSnap) => {
          resolve({
            status: 200,
            data: tasksSnap.val(),
          });
        },
        { onlyOnce: true }
      );
    });
  } catch (e) {
    return {
      status: 400,
      data: e,
    };
  }
}

export async function updateTaskAPI(task) {
  await update(refs.updateTask(task.id), {
    id: task.id,
    title: task.title,
    description: task.description,
    state: task.state,
  });


}

  export async function deleteTaskAPI(task) {
    await remove(refs.deleteTask(task.id))
  }
