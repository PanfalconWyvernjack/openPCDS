
<template>
  <Menubar :model="menuitems" />
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
    <DataTable v-else-if="control.controlType === 'table'">
      <Column field="vin" header="Vin"></Column>
      <Column field="year" header="Year"></Column>
      <Column field="brand" header="Brand"></Column>
      <Column field="color" header="Color"></Column>
    </DataTable>
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
    &nbsp;
    <Button label="Add" @click="addTable()">
      <i class="pi pi-plus"></i> Table
    </Button>
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

import Menubar from 'primevue/menubar';

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

const addTable = () => {
  controls.value.push({
    controlType: 'table',
    label: 'Table'
  });
}

const menuitems = [
  {
    label:'File',
    icon:'pi pi-fw pi-file',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-plus',
        items:[
          {
            label:'Bookmark',
            icon:'pi pi-fw pi-bookmark'
          },
          {
            label:'Video',
            icon:'pi pi-fw pi-video'
          }
        ]
      },
      {
        label:'Delete',
        icon:'pi pi-fw pi-trash'
      },
      {
        separator:true
      },
      {
        label:'Export',
        icon:'pi pi-fw pi-external-link'
      }
    ]
  },
  {
    label:'Add Field',
    icon:'pi pi-fw pi-file',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-plus',
        items:[
          {
            label:'Bookmark',
            icon:'pi pi-fw pi-bookmark'
          },
          {
            label:'Video',
            icon:'pi pi-fw pi-video'
          }
        ]
      },
      {
        label:'Delete',
        icon:'pi pi-fw pi-trash'
      },
      {
        separator:true
      },
      {
        label:'Export',
        icon:'pi pi-fw pi-external-link'
      }
    ]
  },
  {
    label:'Edit',
    icon:'pi pi-fw pi-pencil',
    items:[
      {
        label:'Left',
        icon:'pi pi-fw pi-align-left'
      },
      {
        label:'Right',
        icon:'pi pi-fw pi-align-right'
      },
      {
        label:'Center',
        icon:'pi pi-fw pi-align-center'
      },
      {
        label:'Justify',
        icon:'pi pi-fw pi-align-justify'
      }
    ]
  },
  {
    label:'Users',
    icon:'pi pi-fw pi-user',
    items:[
      {
        label:'New',
        icon:'pi pi-fw pi-user-plus',

      },
      {
        label:'Delete',
        icon:'pi pi-fw pi-user-minus',

      },
      {
        label:'Search',
        icon:'pi pi-fw pi-users',
        items:[
          {
            label:'Filter',
            icon:'pi pi-fw pi-filter',
            items:[
              {
                label:'Print',
                icon:'pi pi-fw pi-print'
              }
            ]
          },
          {
            icon:'pi pi-fw pi-bars',
            label:'List'
          }
        ]
      }
    ]
          },
          {
    label:'Events',
    icon:'pi pi-fw pi-calendar',
    items:[
      {
        label:'Edit',
        icon:'pi pi-fw pi-pencil',
        items:[
          {
            label:'Save',
            icon:'pi pi-fw pi-calendar-plus'
          },
          {
            label:'Delete',
            icon:'pi pi-fw pi-calendar-minus'
          }
        ]
      },
      {
        label:'Archieve',
        icon:'pi pi-fw pi-calendar-times',
        items:[
          {
            label:'Remove',
            icon:'pi pi-fw pi-calendar-minus'
          }
        ]
      }
    ]
          },
          {
    label:'Quit',
    icon:'pi pi-fw pi-power-off'
          }
]

const items = [
    {
        label: 'Add',
        icon: 'pi pi-pencil',
        command: () => {
          console.log('add');
            //this.$toast.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
    },
    {
        label: 'Update',
        icon: 'pi pi-refresh',
        command: () => {
            console.log('update');
            //this.$toast.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
          console.log('delete');  
          // this.$toast.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
          console.log('upload')
            //this.$router.push('fileupload');
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
