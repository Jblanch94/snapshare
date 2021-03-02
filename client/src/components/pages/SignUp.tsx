import FormField from '../shared-ui/FormField/FormField';
import {
  required,
  validPassword,
  validatePasswords,
  validateEmail,
} from '../../utils/formValidation';
import { Form, Field, FieldRenderProps } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import { signUpUser } from '../../state/action-creators/authActions';
import './SignUp.css';

//TODO: Want to add in icon for toggle password visibility and highlight red text if passwords do not match
const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth);
  const onSubmit = (values: any) => {
    const registrationValues = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password_1,
    };

    // implementation to submit form
    dispatch(signUpUser(registrationValues));
  };

  return (
    <main
      className=" h-screen bg-signUp bg-cover bg-center bg-no-repeat flex justify-center items-center"
      id="main">
      <section className="bg-white p-4 rounded-md signup-section">
        {auth.error && (
          <h1 className="text-error text-3xl text-center">{auth.error}</h1>
        )}
        <h1 className="text-center text-lg">Sign up for Snapshare</h1>
        <Form
          validate={validatePasswords}
          onSubmit={onSubmit}
          render={({ errors, submitting, handleSubmit, pristine }) => {
            return (
              <form onSubmit={handleSubmit} className="mt-4">
                <Field
                  name="first_name"
                  validate={(value) =>
                    required(value, 'First name cannot be left empty')
                  }>
                  {(props: FieldRenderProps<any, HTMLElement>) => (
                    <FormField
                      {...props}
                      {...props}
                      id="first_name"
                      type="text"
                      value={props.input.value}
                      onHandleChange={props.input.onChange}>
                      First Name
                    </FormField>
                  )}
                </Field>
                <Field
                  name="last_name"
                  validate={(value) =>
                    required(value, 'Last name cannot be left empty')
                  }>
                  {(props) => (
                    <FormField
                      {...props}
                      id="last_name"
                      type="text"
                      value={props.input.value}
                      onHandleChange={props.input.onChange}>
                      Last Name
                    </FormField>
                  )}
                </Field>
                <Field type="email" name="email" validate={validateEmail}>
                  {(props) => (
                    <FormField
                      {...props}
                      id="email"
                      type="email"
                      value={props.input.value}
                      onHandleChange={props.input.onChange}>
                      Email
                    </FormField>
                  )}
                </Field>
                <Field name="password_1" validate={validPassword}>
                  {(props) => (
                    <FormField
                      {...props}
                      id="password_1"
                      type="password"
                      value={props.input.value}
                      onHandleChange={props.input.onChange}>
                      Password
                    </FormField>
                  )}
                </Field>
                <Field
                  name="password_2"
                  validate={(value) => validPassword(value)}>
                  {(props) => (
                    <FormField
                      id="password_2"
                      type="password"
                      {...props}
                      value={props.input.value}
                      onHandleChange={props.input.onChange}>
                      Re-enter Password
                    </FormField>
                  )}
                </Field>
                <button
                  type="submit"
                  disabled={submitting || pristine}
                  className="inline-block bg-blue-400 border-none outline-none text-white text-3xl w-full rounded-md active:opacity-70 py-2">
                  Submit
                </button>
              </form>
            );
          }}></Form>
      </section>
    </main>
  );
};

export default SignUp;
