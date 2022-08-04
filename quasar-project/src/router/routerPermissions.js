import { useTasksStore } from "src/stores/tasks";

export default async function (to, from, next, store) {
  await getInitialData(store);
  return next()
}

async function getInitialData(store) {
  const tasks = useTasksStore()
  await tasks.readTasks()
}
