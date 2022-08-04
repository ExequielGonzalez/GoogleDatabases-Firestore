<template>
  <q-dialog v-model="popUpStarted">
    <q-card style="max-width: 420px; width: 100%">
      <q-card-section class="row items-center q-pa-none text-primary">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-form @submit.prevent="saveTask">
          <div class="row">
            <div class="col-xs-12">
              <div class="text-primary text-h5 q-mb-md text-center">Editar tarea.</div>
            </div>
          </div>
          <div class="row q-mb-sm justify-center">
            <div class="col-xs-10 self-center">
              <div class="q-mb-md">
                <q-input outlined dense rounded type="text" v-model="title" label="Título" lazy-rules="ondemand"> </q-input>
              </div>
              <div class="q-mb-md">
                <q-input outlined dense rounded type="text" v-model="description" label="Descripción" lazy-rules="ondemand"> </q-input>
              </div>
            </div>
            <div class="col-xs-10 col-sm-auto text-center self-center">
              <q-btn rounded outline type="submit" color="primary" label="Guardar" />
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('PasswordRecoveryView');
const emit = defineEmits(['save-task']);
let popUpStarted = ref(false);

const title = ref('');
const description = ref('');

let task = {
  id: '0',
  title: '',
  description: '',
  state: false,
};

const show = (props) => {
  task = props;
  title.value = task.title;
  description.value = task.description;
  popUpStarted.value = true;
};
const hide = () => {
  popUpStarted.value = false;
};
const saveTask = () => {
  hide();
  emit('save-task', {
    ...task,
    title: title.value,
    description: description.value,
  });
};

defineExpose({
  show,
  hide,
});
</script>
