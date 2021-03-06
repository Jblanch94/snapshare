import FormField from '../shared-ui/FormField/FormField';
import {
  required,
  validPassword,
  validateEmail,
} from '../../utils/formValidation';
import { Form, Field, FieldRenderProps } from 'react-final-form';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './SignUp.css';

interface SignupValues {
  first_name: string;
  last_name: string;
  email: string;
  password_1: string;
}

//TODO: Want to add in icon for toggle password visibility and highlight red text if passwords do not match
const SignUp: React.FC = () => {
  const { signUpUser } = useActions();
  const auth = useTypedSelector((state) => state.auth);
  const onSubmit = (values: SignupValues) => {
    const registrationValues = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password_1,
    };

    // call action creator to sign user up with form values supplied
    signUpUser(registrationValues);
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
          onSubmit={onSubmit}
          render={({ submitting, handleSubmit, pristine }) => {
            return (
              <form onSubmit={handleSubmit} className="mt-4" autoComplete="off">
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
