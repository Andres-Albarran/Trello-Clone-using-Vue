export default {
  user: null,
  fetchingData: true,
  error: null,
  userProfile: {},
  loggedIn: false,

  boards: {/*
    id: {
        id,
        owner,
        name
    }
    */},
  lists: {/*
    id: {
        id,
        board,
        name
    }
    */},
  tasks: {/*
    id: {
        id,
        list,
        title,
        completed
    }
    */},
};
