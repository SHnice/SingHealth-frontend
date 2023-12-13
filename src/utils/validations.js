import passwordValidator from "password-validator";
import { toast } from "react-hot-toast";

export const signInValidate = (email,password) => {
  const errors = {};
  const schema = new passwordValidator();
  schema
    .is()
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits() // Must have digits
    .has()
    .symbols();

  if (!email) {
    errors.email = "Email is required";
    toast.error("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email format";
    toast.error("Invalid email format");
  }

  if (!password) {
    errors.password = "Password is required";
    toast.error("Password is required");

  } else if (password.length < 8) {
    errors.password = "Password must be 8 characters long.";
    toast.error("Password must be 8 characters long.");

  } else if (!schema.validate(password)) {
    errors.password = "Password must contain uppercase, lowercase, special letters, and digits."
    toast.error("Password must contain uppercase, lowercase, special letters, and digits.");
  }

  return errors;
};

//change password validate
export const changePasswordValidate = (newPassword, currentPassword) => {
  const errors = {};
  const schema = new passwordValidator();
  schema
    .is()
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits() // Must have digits
    .has()
    .symbols();

  if (!newPassword) {
    errors.newPassword = "Password is required";
    toast.error("New password is required");

  } else if (newPassword.length < 8) {
    errors.newPassword = "New password must be 8 characters long.";
    toast.error("New password must be 8 characters long.");

  } else if (!schema.validate(newPassword)) {
    errors.newPassword = "New password must contain uppercase, lowercase, special letters, and digits."
    toast.error("New password must contain uppercase, lowercase, special letters, and digits.");
  } else if (!currentPassword) {
    errors.currentPassword = "Current password is required";
    toast.error("Current password is required");
  }


  return errors;
}

export const signUpValidate = (name,email,password, confirmPassword) => {
  const errors = {};
  const schema = new passwordValidator();
  schema
    .is()
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits() // Must have digits
    .has()
    .symbols();

  if(!name){
    errors.name = "Name is required";
    toast.error("Name is required");
  }

  if (!email) {
    errors.email = "Email is required";
    toast.error("Email is required");

  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email format";
    toast.error("Invalid email format");
  }

  if (!password) {
    errors.password = "Password is required";
    toast.error("Password is required");

  } else if (password.length < 8) {
    errors.password = "Password must be 8 characters long.";
    toast.error("Password must be 8 characters long.");

  } else if (!schema.validate(password)) {
    errors.password = "Password must contain uppercase, lowercase, special letters, and digits."
    toast.error("Password must contain uppercase, lowercase, special letters, and digits.");
  } else if (password !== confirmPassword) {
    errors.password = "Passwords do not match";
    toast.error("Passwords do not match");
  }

  return errors;
};

export const forgotPasswordValidate = (email) => {
  const errors = {};

  if (!email) {
    errors.email = "Email is required";
    toast.error("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email format";
    toast.error("Invalid email format");
  }

  return errors;
};

export const resetPasswordValidate = (password, confirmPassword) => {
  const errors = {};
  const schema = new passwordValidator();
  schema
    .is()
    .has()
    .uppercase() // Must have uppercase letters
    .has()
    .lowercase() // Must have lowercase letters
    .has()
    .digits() // Must have digits
    .has()
    .symbols();

  if (!password) {
    errors.password = "Password is required";
    toast.error("Password is required");

  } else if (password.length < 8) {
    errors.password = "Password must be 8 characters long.";
    toast.error("Password must be 8 characters long.");

  } else if (!schema.validate(password)) {
    errors.password = "Password must contain uppercase, lowercase, special letters, and digits."
    toast.error("Password must contain uppercase, lowercase, special letters, and digits.");
  } else if (password !== confirmPassword) {
    errors.password = "Passwords do not match";
    toast.error("Passwords do not match");
  }

  return errors;
};