<template>
  <div class="list-group-item p-2">
    <span class="user-info d-flex align-items-center justify-content-between">
      <div class="user-data mx-3">
        <span class="user-name mr-3">{{ username }}</span>
        <span class="user-email text-info">{{ email }}</span>
      </div>
      <div class="buttons-container mx-3">
        <span class="view-user"
              @click="viewUserDetails"
        >
          <i class="fa fa-bar-chart mx-2" aria-hidden="true"></i>
          View Details
        </span>
        <span class="remove-item"
              @click="setSelectedUser"
              v-b-modal.modalDeleteUser>
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
    </span>
  </div>
</template>

<script>
  import mutations from '../../store/mutation-types';

  export default {
    name: 'mt-users-list-item',
    props: {
      _id: String,
      username: String,
      email: String,
    },
    methods: {
      setSelectedUser() {
          const currentUser = {
              _id: this._id,
              username: this.username,
              email: this.email
          };
          console.log(currentUser);
      },
      viewUserDetails(){
        console.log(this.id);
      }
    },
  };
</script>

<style scoped>

  .view-user {
    border-radius: 50%;
    background-color: #2b994f;
    font-size: 14px;
    border: 1px solid #217f3b;
    color: #fff;
    cursor: pointer;
  }

</style>
