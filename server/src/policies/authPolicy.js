// Import Joi Validation module
const Joi = require("joi");
const ApiError = require("../utilities/ApiError");
const debugJoi = require("debug")("app:joi");

module.exports = {
  // [1] AUTH POST Validation
  validateAuth(req, res, next) {
    debugJoi(req.body);
    const schema = Joi.object({
      username: Joi.string().alphanum().min(3).max(30),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
      firstName: Joi.string().min(1).max(50).optional(),
      lastName: Joi.string().min(1).max(50).optional(),
      salutation: Joi.string().valid("Mr.", "Miss", "Mrs.", "Ms.").optional(),
    });

    // Return one of two values
    const { error, value } = schema.validate(req.body);

    // ON VALIDATION ERROR: We call Error Middleware & Pass Bad Request with Dynamic Validation Error Message
    if (error) {
      debugJoi(error);
      const key = error.details[0].context.key;

      switch (key) {
        case "username":
          next(ApiError.badRequest("You must provide a valid username"));
          break;

        case "email":
          next(ApiError.badRequest("You must provide a valid email"));
          break;

        case "password":
          next(ApiError.badRequest("You must provide a valid password"));
          break;

        case "firstName":
          next(ApiError.badRequest("You must provide a valid first name"));
          break;

        case "lastName":
          next(ApiError.badRequest("You must provide a valid last name"));
          break;

        case "salutation":
          next(ApiError.badRequest("You must provide a valid salutation"));
          break;

        default:
          next(
            ApiError.badRequest(
              "Invalid Form Information - please check form information and submit again"
            )
          );
      }
    } else {
      // On success: Pass to next middleware
      next();
    }
  },
};
