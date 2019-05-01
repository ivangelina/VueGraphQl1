<template>
 <div class="container pt-3">
    <div class="row">
      <div class="col-md-12">
  <b-card>
    <b-form-group
      label="Objectname"
      label-for="objectname"
    >
      <b-form-input id="objectname" v-model="objectname" placeholder="Objectname"></b-form-input>
    </b-form-group>
    <b-form-group
      label="title"
      label-for="title"
    >
      <b-form-input id="title" v-model="title" placeholder="Title"></b-form-input>
    </b-form-group>
    <b-form-group
      label="Area"
      label-for="area"
    >
      <b-form-input
        id="area"
        v-model="area"
        type="area"
        placeholder="Area"
      ></b-form-input>
    </b-form-group>
    <b-form-group
      label="Price"
      label-for="price"
    >
      <b-form-input
        id="price"
        v-model="price"
        type="price"
        placeholder="Price"
      ></b-form-input>
    </b-form-group>
    <b-form-group
      label="Description"
      label-for="description"
    >
      <b-form-input
        id="description"
        v-model="description"
        type="description"
        placeholder="Description"
      ></b-form-input>
    </b-form-group>
    <b-form-group
      label="Location"
      label-for="location"
    >
      <b-form-input
        id="location"
        v-model="location"
        type="location"
        placeholder="Location"
      ></b-form-input>
    </b-form-group>
    <b-btn block @click="addobject" variant="success">Добави</b-btn>
  </b-card>
      </div>
    </div>
    <br>
    <div class="row">
     <div class="col-md-12"> 
     <div>
        

</div>
       </div>
    </div>
    <br>
 </div>
</template>

<script>

  export default {
    name: 'st-object',
    components: {
     
    },
  };

</script>
