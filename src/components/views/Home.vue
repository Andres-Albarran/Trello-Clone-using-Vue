<!-- eslint-disable no-underscore-dangle -->
<template>
  <div>
    <h3>My Boards</h3>
    <div class="boards-collection">
      <template v-if="fetchingData">
        <span>Loading...</span>
      </template>
      <input
        type="text"
        placeholder= "Add new board"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id">
      </board-card>
    </div>
  </div>
</template>

<script>
import BoardCard from '@/components/BoardCard';
import state from '@/store/state';

import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'home-view',
  components: { BoardCard },
  data() {
    return {
      boardName: '',
    };
  },
  computed: {
    ...mapState([
      'boards',
      'fetchingData',
    ]),
    ...mapGetters({
      userProfile: 'userProfile',
      loggedIn: 'loggedIn',
    }),
  },
  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard',
    ]),
    add() {
      this.addBoard({ usuario: this.userProfile.email, name: this.boardName });
      this.boardName = '';
    },
  },
  created() {
    this.fetchBoards({ user: this.userProfile.email });
  },
};
</script>

<style lang="scss" scoped>
 h3 {
    text-align: left;
    margin: 1.5rem;
  }

  .boards-collection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid #546E7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: 0;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546E7A;
    }

    &::placeholder {
      color: white;
    }
  }
</style>
