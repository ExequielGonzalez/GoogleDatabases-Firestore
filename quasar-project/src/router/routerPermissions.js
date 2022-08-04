import { useTasksStore } from "src/stores/tasks";
import { useTitleStore } from 'src/stores/title';

export default async function (to, from, next, store) {
  await getInitialData(store);
  return next()
}

async function getInitialData(store) {
  const tasks = useTasksStore()
  await tasks.readTasks()
  const title = useTitleStore()
  await title.setListenerTitle()
}
