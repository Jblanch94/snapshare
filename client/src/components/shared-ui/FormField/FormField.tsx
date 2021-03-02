import { FieldRenderProps } from 'react-final-form';
import './FormField.css';

interface FormFieldProps extends FieldRenderProps<any, HTMLElement> {
  type: string;
  id: string;
  children: string;
  onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const FormField: React.FC<FormFieldProps> = (props) => {
  return (
    <div className="my-2 relative ">
      <input
        {...props.input}
        onChange={props.onHandleChange}
        value={props.value}
        id={props.id}
        name={props.id}
        type={props.type}
        className={`outline-none rounded-md border border-inputUnfocused focus:border-inputFocused inline-block w-full p-2 pt-6 h-12 ${
          props.meta.error && props.meta.touched ? 'error' : ''
        }`}
      />
      <label
        className={`absolute left-1.5 top-2.5 text-formLabel ${
          props.meta.touched ? 'active' : ''
        }`}
        htmlFor={props.id}>
        {props.children}{' '}
      </label>
      {props.meta.error && props.meta.touched && (
        <span className="error-text">{props.meta.error}</span>
      )}
    </div>
  );
};

export default FormField;
