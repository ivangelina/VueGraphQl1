<template>
  <div>
    <b-card>
      <ul class="list-group">
        <p v-show="!getUsersList.length" class="text-center p-3">Добави потребители в списъка</p>
        <st-users-list-item v-if="getUsersList.length"
                               v-for="(user) in getUsersList"
                               :key="user._id"
                               :_id="user._id"
                               :username="user.username"
                               :email="user.email"
        ></st-users-list-item>
      </ul>
    </b-card>
    <b-modal id="modalDeleteUser"
             ref="modal"
             title="Изтрий потребител"
             @ok="deleteUser"
             ok-title="Да"
             cancel-title="Откажи"
    >
      <st-confirm-delete :question="modalTitle"
                         :data="userName"></st-confirm-delete>
    </b-modal>
  </div>
</template>

<script>

  import StUsersListItem from './UsersListItem';
  import StConfirmDelete from '../common/ConfirmDelete';
  import actions from '../../store/action-types';

  export default {
    name: 'mt-students-list',
    components: {
      StUsersListItem,
      StConfirmDelete,
    },
    data() {
      return {
        modalTitle: 'Сигурен ли си, че искаш да изтриеш',
        searchName: '',
      };
    },
    computed: {
      getUsersList() {
        return this.$store.state.usersList;
      },
      userName(){
          return this.$store.state.selectedUser.username;
      }
    },
    created() {
      this.getUsers();
    },
    methods: {
      getUsers() {
          console.log('query get users')
      },
      deleteUser() {
          console.log(this.$store.state.currentUser);
      },
    },
  };

</script>

<style>

</style>
