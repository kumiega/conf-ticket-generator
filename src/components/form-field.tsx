import { UseFormRegisterReturn } from 'react-hook-form';

type FormFieldProps = {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
  type?: string;
};

const FormField = ({ label, placeholder, register, error, type = 'text' }: FormFieldProps) => {
  return (
    <div className="flex flex-col justify-center w-full">
      <label htmlFor={register.name} className="block text-lg font-medium mb-2">
        {label}
      </label>
      <input
        id={register.name}
        className="w-full px-4 py-2 text-lg border border-neutral-700 rounded-md focus:outline-none focus:border-orange-500 hover:border-[var(--color-orange-500)]"
        type={type}
        placeholder={placeholder}
        {...register}
      />

      {error && <p className="text-orange-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default FormField;
