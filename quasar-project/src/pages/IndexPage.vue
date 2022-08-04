<template>
  <q-page class="flex q-my-md">
    <div class="full-width">
      <div class="row q-ma-md">
        <q-btn color="primary" icon="add" label="Nueva tarea" @click="newTask()" />
      </div>
      <q-list class="q-mx-lg">
        <div v-for="task in tasks" :key="task.id" style="border: 1px solid black">
          <Task :id="task.id" :title="task.title" :description="task.description" :state="task.state" class="cursor-pointer" @edit-task="editTask" @save-task="saveTask" @delete-task="deleteTask" />
        </div>
      </q-list>
    </div>
    <editTaskPopupView ref="editTaskPopup" key="editTaskPopup" @save-task="saveTask" />
  </q-page>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import Task from 'src/components/Task.vue';
import EditTaskPopupView from 'src/components/EditPopup.vue';
import { useTasksStore } from 'src/stores/tasks';

const name = ref('IndexPage');
const editTaskPopup = ref(null);

const tasksStore = useTasksStore();

let tasks = ref([]);

onBeforeMount(() => {
  tasks.value = tasksStore.getTasks;  
});

const newTask = () => {
  editTaskPopup.value.show({
    id: '0',
    title: '',
    description: '',
    state: false,
  });
};

const editTask = (task) => {
  editTaskPopup.value.show({
    id: task.id,
    title: task.title,
    description: task.description,
    state: task.state,
  });
};

const saveTask = (newTask) => {
  if (newTask.id == 0) {
    tasksStore.createTask(newTask);
  } else {    
    tasksStore.updateTask(newTask);
  }
};

const deleteTask = (task) => {
  tasksStore.deleteTask(task);
};
</script>
