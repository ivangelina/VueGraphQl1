<template>
  <b-card>
    <b-form-group
      label="Username"
      label-for="username"
    >
      <b-form-input id="username" v-model="username" placeholder="Type username"></b-form-input>
    </b-form-group>
    <b-form-group
      label="Email"
      label-for="email"
    >
      <b-form-input id="email" v-model="email" placeholder="Type email"></b-form-input>
    </b-form-group>
    <b-form-group
      label="Password"
      label-for="password"
    >
      <b-form-input
        id="password"
        v-model="password"
        type="password"
        placeholder="Type password"
      ></b-form-input>
    </b-form-group>
    <b-btn block @click="addUser" variant="success">Добави</b-btn>
  </b-card>
</template>

<script>
  import actions from '../../store/action-types';

  export default {
    name: 'st-add-user',
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      addUser() {
          //TODO
        console.log(this.username, this.email, this.password);

      },
    }
  };
</script>

<style scoped>

</style>
