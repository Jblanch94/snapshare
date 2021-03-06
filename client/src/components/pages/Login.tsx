import { Form, Field, FieldRenderProps } from 'react-final-form';
import FormField from '../shared-ui/FormField/FormField';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './Login.css';

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const { loginUser } = useActions();
  const auth = useTypedSelector((state) => state.auth);

  const onSubmit = (values: LoginValues) => {
    loginUser({ email: values.email, password: values.password });
  };

  return (
    <main
      className="flex justify-center items-center h-screen bg-signUp bg-cover bg-no-repeat bg-center"
      id="main">
      <section className="bg-white rounded-md py-8 px-4 login-section sm:w-full md:h-3/6 6 md:w-3/6 lg:w-2/6 lg:h-3/6">
        {auth.error && (
          <h1 className="text-2xl text-center text-error">{auth.error}</h1>
        )}
        <h1 className="text-2xl text-center mb-6">Log into Snapshare</h1>
        <Form
          onSubmit={onSubmit}
          render={({ submitting, handleSubmit, pristine }) => {
            return (
              <form onSubmit={handleSubmit} className="mt-4" autoComplete="off">
                <Field name="email">
                  {(props: FieldRenderProps<any, HTMLElement>) => (
                    <FormField
                      {...props}
                      {...props}
                      id="email"
                      type="email"
                      value={props.input.value}
                      onHandleChange={props.input.onChange}>
                      Email
                    </FormField>
                  )}
                </Field>
                <Field name="password">
                  {(props) => (
                    <FormField
                      {...props}
                      id="password"
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
                  className="inline-block bg-blue-400 border-none outline-none text-white text-3xl w-full rounded-md  active:opacity-70 py-2 mt-4">
                  Login
                </button>
              </form>
            );
          }}></Form>
        <div className="my-4 text-center">
          <span className="text-lg">Not a Snapshare member?</span>
          <Link to="/sign-up" className="text-link">
            {' '}
            Sign up
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
