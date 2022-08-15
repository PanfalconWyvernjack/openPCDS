
<template>
  <div>
    User Name
    <InputText />
    <Button label="Greet"></Button>
  </div>

  <div v-for="control, index in controls">
    {{index}} : {{control.label}}: 
    <InputText v-if="control.controlType === 'input'"/>
    <Calendar v-else-if="control.controlType === 'date'"/>
  </div>
  <div id="add-btn">
    <Button label="Add" @click="addAmt()">
      <i class="pi pi-plus"></i> Input
    </Button>
    <Button label="Add" @click="addDatePicker()">
      <i class="pi pi-plus"></i> Datepicker
    </Button>
  </div>
</template>

<script setup lang="ts">
//import PrimeVue from 'primevue/config';
//import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const controls = ref([{controlType: '', label: ''}]);

const addAmt = () => {
  controls.value.push({
    controlType: 'input',
    label: 'Input Text'
  });
}

const addDatePicker = () => {
  controls.value.push({
    controlType: 'date',
    label: 'Pick a Date'
  });
}

</script>




<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
#add-btn {
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
}
</style>
