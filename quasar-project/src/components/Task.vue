<template>
  <q-item class="q-my-sm items-center">
    <q-item-section avatar top>
      <q-checkbox v-model="state" @update:model-value="saveTask(this)" />
    </q-item-section>

    <q-item-section top @click="editTask(this)">
      <q-item-label lines="1">
        <span class="text-weight-medium">{{ title }}</span>
      </q-item-label>
      <q-item-label caption lines="1">{{ description }} </q-item-label>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn size="12px" flat dense round icon="delete" color="red" @click="deleteTask(this)" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { defineComponent, ref } from 'vue';

const name = ref('Task');
const $emit = defineEmits(['delete-task', 'edit-task', 'save-task']);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  state: {
    type: Boolean,
    required: true,
  },
});

const saveTask = (task) => {
  $emit('save-task', task);
};

const editTask = (task) => {
  $emit('edit-task', task);
};

const deleteTask = (task) => {
  $emit('delete-task', task);
};
</script>
