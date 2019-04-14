<template>
  <div class="container">
      <div class="row">
          <div class="col-4 mt-5">
              <div class="card p-3">

<div>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="User email"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Username: " label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.username"
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
            <b-form-group id="input-group-3" 
            label="Password: " label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="success">Запази</b-button>
    </b-form>
  </div>

              </div>
          </div>
      </div>
  </div>
</template>
<script>

  export default {
    name: 'st-user-details',
    data() {
        return {
            form: {
            email: '',
            username: '',
            password: '',
            }
        }
    },
    methods: {
      onSubmit(evt) {
        console.log('save');
      },
    },
  };

</script>
