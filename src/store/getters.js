export default {
  getUserIndex: (usersList, _id) =>
    usersList.findIndex(user => user._id === _id)
};
