// Import our Database Configuration (allows us to query database)
const { db } = require("../config/db");
const ApiError = require("../utilities/ApiError");
const {
  findUser,
  hashPassword,
  comparePassword,
  userDetailsToJSON,
  jwtSignUser,
} = require("../utilities/authServices");

module.exports = {
  // [1] GET ALL Users
  async listUsers(req, res, next) {
    // Store the document query in variable & call GET method
    const usersRef = db.collection("users");
    const snapshot = await usersRef.get();

    // [400 ERROR] Check for User Asking for Non-Existent Documents
    if (snapshot.empty) {
      return next(
        ApiError.badRequest("The users you were looking for do not exist")
      );
    } else {
      let users = [];
      snapshot.forEach((doc) => {
        users.push({
          id: doc.id,
          username: doc.data().username,
          email: doc.data().email,
          firstName: doc.data().firstName,
          lastName: doc.data().lastName,
          isAdmin: doc.data().isAdmin,
        });
      });
      res.send(users);
    }
  },

  // [2] REGISTER: POST
  async register(req, res, next) {
    try {
      // Destructure specific properties for use
      const { username, email, password, firstName, lastName } = req.body;

      // Validation: Block matching user email
      const userMatch = await findUser(email);
      if (userMatch.length === 1) {
        return next(ApiError.badRequest("This email is already in use"));
      }

      // Save new user to database
      const usersRef = db.collection("users");
      const response = await usersRef.add({
        username: username,
        email: email,
        password: await hashPassword(password),
        firstName: firstName,
        lastName: lastName,

        isAdmin: false,
      });

      // Confirm Registration & Convert user details to JSON
      console.log(`Success - User: ${response.id} registered!`);
      const userJSON = await userDetailsToJSON(response.id);

      // Return user object + token
      res.send({
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      return next(
        ApiError.internal("Your user profile could not be registered", err)
      );
    }
  },

  // [3] LOGIN: POST
  async login(req, res, next) {
    try {
      // (a) Destructure specific properties for use
      const { email, password } = req.body;

      // (b) Validation: Block non-matching user email
      const userMatch = await findUser(email);

      if (userMatch.length === 0) {
        return next(
          ApiError.badRequest(
            "The credentials entered are not correct (DEBUG: email)"
          )
        );
      }

      // (c) Validation: Block non-matching passwords
      const passwordMatch = await comparePassword(userMatch, password);
      if (!passwordMatch) {
        return next(
          ApiError.badRequest(
            "The credentials entered are not correct (DEBUG: password)"
          )
        );
      }

      // (d) Confirm Login & Convert User Details to JSON
      console.log(`Success - User: ${userMatch[0].id} is logged in!`);
      const userJSON = await userDetailsToJSON(userMatch[0].id);

      // (e) Return user object + token
      res.send({
        token: jwtSignUser(userJSON),
      });
    } catch (err) {
      return next(
        ApiError.internal(
          "Your user profile cannot be logged into at this time",
          err
        )
      );
    }
  },
};
