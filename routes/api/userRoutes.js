const router = require("express").Router();
const {
  getUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
  addUserFriend,
  deleteUserFriend,
} = require("../../controllers/userController.js");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends
router.route("/:userId/friends/").post(addUserFriend);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(deleteUserFriend);

module.exports = router;
