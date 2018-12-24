<template>
  <section id="CompletedService">
   <div class="container-fluid">
      <div class="row">
      <div class="col-12 main-title">
        <h2>Services</h2>
      </div>
       <div class="col-12 content_section">

          <div class="vehicle_tlt d-flex flex-row">
            <div class="col-12 d-flex flex-column align-items-start p-0">
            <h4>Completed Service</h4>
            </div>
          </div>

          <mdb-datatable
            :data="data"
            striped />
  </div>
  </div>
  </div>
</section>
</template>

<script>
import { mdbDatatable } from 'mdbvue';

export default {
  name: 'DatatablePage',
  components: {
    mdbDatatable
  },
  data() {
    return {
      data: {
        columns: [
          {
            label: '#',
            field: 'number',
            sort: 'asc'
          },
          {
            label: 'Vehicle Name',
            field: 'VehicleName',
            sort: 'asc'
          },
          {
            label: 'Specialist Name',
            field: 'SpecialistName',
            sort: 'asc'
          },
          {
            label: 'Service Type',
            field: 'ServiceType',
            sort: 'asc'
          },
          {
            label: 'Price',
            field: 'Price',
            sort: 'asc'
          },
          {
            label: 'Action',
            field: 'Action',
            sort: 'asc'
          }
        ],
        rows: [
          {
            number : '1',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Rodgriguez',
            ServiceType: 'Routine',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '2',
            VehicleName: 'Sandero',
            SpecialistName: 'Benjamin',
            ServiceType: 'Maintenance',
            Price: '$ 3,52,000',
            Action: '$321'
          },
          {
             number : '3',
            VehicleName: 'Renault',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,60,000',
            Action: '$322'
          },
          {
            number : '4',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '5',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
             number : '6',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
           number : '7',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '8',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number: '9',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '10',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '11',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
             number : '12',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '13',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '14',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
             number : '15',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
           number : '16',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number : '17',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          },
          {
            number: '18',
            VehicleName: 'Renault Sandero',
            SpecialistName: 'Benjamin Rodgriguez',
            ServiceType: 'Routine Maintenance',
            Price: '$ 3,50,000',
            Action: '$320'
          }
          
        ]
      }
    }
  }
};
</script>

<style scoped>

</style>