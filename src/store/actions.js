import API from '@/api';
import firebase from 'firebase/app';
import * as types from './mutation-types';

export default {
// Fetch via AJAX the boards from user
  fetchBoards({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST);
    API.getBoardsByUser(user)
      .then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() }))
      .catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }));
  },
  // Fetch via AJAX the lists from a board
  fetchLists({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST);
    API.getListsFromBoard(board)
      .then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }));
  },
  // Fetch via AJAX the tasks from a list
  fetchTasks({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST);
    API.getTasksFromList(list)
      .then(snap => commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() }))
      .catch(error => commit(types.FETCH_LISTS_FAILURE, { error }));
  },
  // Add a new board via AJAX
  addBoard({ commit }, { usuario, name }) {
    API.postBoard(usuario, name)
      .then(board => commit(types.ADD_BOARD, { board }));
  },
  // Add a new column/list to a board via AJAX
  addColumn({ commit }, { board, name }) {
    API.postList(board, name)
      .then(column => commit(types.ADD_COLUMN, { column }));
  },
  // Add a new tasks to a list/column via AJAX
  addTask({ commit }, { list, title }) {
    API.postTask(list, title)
      .then(task => commit(types.ADD_TASK, { task }));
  },
  // Delete a task from a list/AJAX via AJAX
  deleteTask({ commit }, { taskId }) {
    API.deleteTask(taskId)
      .then(() => commit(types.DELETE_TASK, { taskId }));
  },
  // Mark as completed a task via AJAX
  markAsCompleted({ commit }, { task }) {
    API.completedTask(task.id)
      .then(() => commit(types.MARK_AS_COMPLETED, { task }));
  },

  async login(store) {
    if (store.state.loggedIn) {
      return;
    }
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  },

  async logout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  },
};
