<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> {{ getTitlePage }} </q-toolbar-title>
        <q-btn color="secondary" label="unsuscribe" @click="unsuscribe()" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue';
import { useTitleStore } from 'src/stores/title';

const name = 'MainLayout';
let titleStore;

// const titlePage = ref('');

onBeforeMount(() => {
  titleStore = useTitleStore();
});

const getTitlePage = computed(() => {  
  return titleStore.getTitle;
});

const unsuscribe = () => {
  titleStore.unsuscribe();
}
</script>
