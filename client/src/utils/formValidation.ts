export const validPassword = (value: any): string | undefined => {
  if (value) {
    if (value.length < 6) {
      console.log('Password is too short');
      return 'Password is too short';
    } else if (value.length > 100) {
      return 'Password is too long';
    } else {
      return undefined;
    }
  }

  if (!value) return 'Password is required';
};

export const required = (value: any, message: string): string | undefined => {
  if (value) return undefined;
  return message;
};

export const validateEmail = (value: any): string | undefined => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validEmail = regex.test(value);
  if (validEmail) return undefined;
  return 'Please enter a valid email address';
};
