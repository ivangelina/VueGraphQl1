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
        let selectedGames = [];

        for(let i = 0; i < val.length; i++){
          const matchedGame = this.$store.state.gamesList.filter(game => {
            return game._id == val[i]
          })

          const gameToAdd = matchedGame.map(game => {
            return {
              _id: game._id,
              name: game.name,
              description: game.description,
              image: game.image
            }
          })
          selectedGames.push(gameToAdd[0])
        }

        this.$store.commit(mutations.SET_USER_GAMES, selectedGames);
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
