<template>
  <div class="container pt-3">
    <div class="row">
      <div class="col">
        <st-add-user></st-add-user>
      </div>
      <div class="col-md-8">
        <st-users-list></st-users-list>
      </div>
    </div>
  </div>
</template>

<script>

  import StAddUser from './AddUser';
  import StUsersList from './UsersList';

  export default {
    name: 'st-users',
    components: {
      StAddUser,
      StUsersList,
    },
  };

</script>
