import { defineStore } from 'pinia';
import { createTaskAPI, readTasksAPI, updateTaskAPI, deleteTaskAPI } from 'src/services/taskService';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    getTasks: (state) => state.tasks,
  },
  actions: {
    async readTasks(){
      const response = await readTasksAPI();      
      if (response.status === 200) {
        this.saveTasks(Object.values(response.data));
      }
    },
    createTask(task) {
      this.tasks.push(task);
      createTaskAPI(task);
    },
    updateTask(task) {      
      const index = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks[index] = task;      
      updateTaskAPI(task);
    },
    saveTasks(tasks) {      
      this.tasks = tasks;
    },

    deleteTask(task) {
      const index = this.tasks.findIndex((t) => t.id === task.id);
      this.tasks.splice(index, 1);
      deleteTaskAPI(task)
    },
  },
});
