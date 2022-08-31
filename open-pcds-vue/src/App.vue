
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
    <Textarea v-else-if="control.controlType === 'textarea'" rows="5" cols="30" />
  </div>
  <div id="add-btn">
    <Button label="Add" @click="addAmt()">
      <i class="pi pi-plus"></i> Input
    </Button>
    &nbsp;
    <Button label="Add" @click="addDatePicker()">
      <i class="pi pi-plus"></i> Datepicker
    </Button>
    &nbsp;
    <Button label="Add" @click="addTextArea()">
      <i class="pi pi-plus"></i> TextArea
    </Button>

    <DataTable :value="cars">
      <Column field="vin" header="Vin"></Column>
      <Column field="year" header="Year"></Column>
      <Column field="brand" header="Brand"></Column>
      <Column field="color" header="Color"></Column>
    </DataTable>
    <DataTable>
      <Column header="test">Something</Column>
    </DataTable>
    <div>
      <Toast />

      <SpeedDial :model="items" />
    </div>
  </div>
</template>

<script setup lang="ts">
//import PrimeVue from 'primevue/config';
//import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import DataTable from 'primevue/datatable';

import Column from 'primevue/column';
//import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
//import Row from 'primevue/row';                     //optional for row
import SpeedDial from 'primevue/speeddial';
import { ref } from 'vue';

const controls = ref([{controlType: '', label: ''}]);
const cars = ref();
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
const addTextArea = () => {
  controls.value.push({
    controlType: 'textarea',
    label: 'Text Area'
  });
}

const items = [
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
            this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            this.$router.push('fileupload');
        }
    },
    {
        label: 'Vue Website',
        icon: 'pi pi-external-link',
        command: () => {
            window.location.href = 'https://vuejs.org/'
        }
    }
]


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
