import { body } from "express-validator";

const ValidationRules = {
    register: () => {
        return [
            // Email
            body("email")
                .isEmail()
                .withMessage('must be an email.')
                .trim(),

            // Password
            body("password")
                .notEmpty()
                .withMessage('Password is required.')
                .isLength({ min: 6, max: 20 })
                .withMessage('must be 6 to 20 characters only.'),
        ];
    }
}

export {
    ValidationRules
}