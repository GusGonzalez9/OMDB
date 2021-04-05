export const errForm = function (
  firstName = false,
  lastName = false,
  email,
  password
) {
  const err = {};

  if (!firstName.length) {
    err.firstName = true;
  }
  if (!lastName.length) {
    err.lastName = true;
  }
  if (!email.length) {
    err.email = true;
  }
  if (!password.length) {
    err.password = true;
  }
  return err;
};
