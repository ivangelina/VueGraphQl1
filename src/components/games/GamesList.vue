<template>
  <div class="col mt-5">
    <b-card>
      <b-form-group label="Using options array:">
          <b-form-checkbox-group
            id="checkbox-group-1"
            v-model="selected"
            :options="getGamesList"
            name="flavour-1"
          ></b-form-checkbox-group>
        </b-form-group>
    </b-card>
  </div>
</template>

<script>

  import actions from '../../store/action-types';
  import mutations from  '../../store/mutation-types';

  export default {
    name: 'st-games-list',
    data() {
      return {
        selected: []
      };
    },
    watch: {
      selected: function(val){
        this.$store.commit(mutations.SET_USER_GAMES, val);
      }
    },
    computed: {
      getGamesList() {
        const mappedGames = this.$store.state.gamesList.map(game => {
          return {
            text: game.name,
            value: game._id
          }
        });
        console.log(mappedGames);
        return mappedGames;
      }
    },
    created() {
      this.getGames();
    },
    methods: {
      getGames() {
        this.$store.dispatch(actions.GET_GAMES_LIST);
      },
    },
  };

</script>

<style>

</style>
