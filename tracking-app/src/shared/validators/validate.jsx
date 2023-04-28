const TYPE_REQUIRE = "require";
const TYPE_MINLENGTH = "minlength";
const TYPE_MAXLENGTH = "maxlength";
const TYPE_MINNUM = "minnum";
const TYPE_MAXNUM = "maxnum";
const TYPE_EMAIL = "email";

export const VALIDATE_REQUIRE = () => ({ type: TYPE_REQUIRE });
export const VALIDATE_MINLENGTH = (val) => ({ type: TYPE_MINLENGTH, val: val });
export const VALIDATE_MAXLENGTH = (val) => ({ type: TYPE_MAXLENGTH, val: val });
export const VALIDATE_MINNUM = (val) => ({ type: TYPE_MINNUM, val: val });
export const VALIDATE_MAXNUM = (val) => ({ type: TYPE_MAXNUM, val: val });
export const VALIDATE_EMAIL = () => ({ type: TYPE_EMAIL });

export const validate = (val, validators) => {
  let isValid = true;
  for (const validator of validators) {
    if (validator.type === TYPE_REQUIRE) {
      isValid = isValid && val.trim().length > 0;
    }
    if (validator.type === TYPE_MINLENGTH) {
      isValid = isValid && val.trim().length >= validator.val;
    }
    if (validator.type === TYPE_MAXLENGTH) {
      isValid = isValid && val.trim().length <= validator.val;
    }
    if (validator.type === TYPE_MINNUM) {
      isValid = isValid && +val >= validator.val;
    }
    if (validator.type === TYPE_MAXNUM) {
      isValid = isValid && +val <= validator.val;
    }
    if (validator.type === TYPE_EMAIL) {
      const regex = /^\S+@+\S+\.(?:com|net)+$/i;
      isValid = isValid && regex.test(val);
    }
  }
  return isValid;
};
