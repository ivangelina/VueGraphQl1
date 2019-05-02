<template>
<div class="container pt-3">
    <div class="row">
      <div class="col-md-12">
  <div>
    <b-table :items="items" :fields="fields" striped>
      <template slot="show_details" slot-scope="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
          Details via check
        </b-form-checkbox>
      </template>

      <template slot="row-details" slot-scope="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b><Area> Price : </Area></b></b-col>
            <b-col>{{ row.item.price }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template>
    </b-table>
  </div>
      </div>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        fields: ['objectname', 'title', 'show_details'],
        items: [
          { isActive: true, price: 120000, objectname: 'Апартамент №1', title: 'house' },
          { isActive: false, price: 80000, objectname: 'Магазин №1', title: 'store' },
          { isActive: true, price: 100000,objectname: 'Апартамент №2',title: 'house' },
          { isActive: true, price: 65000, objectname: 'Офис', title: 'office' }
        ]
      }
    }
  }
</script>

<style>

  .view-price {
    border-radius: 50px;
    background-color: #2aee8c;
    font-size: 14px;
    border: 5px solid #217f3b;
    color: #217f3b;
    cursor: pointer;
  }

</style>

