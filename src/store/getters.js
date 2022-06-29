export default {
  getListsByBoard: (state) => (boardId) => {
    Object.values(state.lists)
      .filter(list => list.board === boardId);
  },
  getTasksFromList: (state) => (listId) => {
    Object.values(state.tasks)
      .filter(task => task.list === listId);
  },
};
