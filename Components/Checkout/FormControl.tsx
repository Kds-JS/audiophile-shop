import React from 'react';

import { FieldError } from 'react-hook-form';

interface Props {
  onChange: (value: any) => void;
  value: string;
  error: FieldError | undefined;
  name: string;
  type: string;
  title: string;
  placeholder: string;
}

const FormControl = ({
    onChange,
    value,
    error,
    name,
    type,
    title,
    placeholder,
  }: Props) => {

    return (
        <div>
            <label htmlFor={name} className='flex justify-between items-center' >
                <span className='font-medium'>{title}</span>
                <span className='text-red-600 text-[14px]'>{error?.message && error.message}</span>
            </label>
            
            <input value={value} onChange={(e) => onChange(e.target.value)} type={type} id={name} className='form-input mt-[15px] border-2 border-gray-300 font-medium text-sm rounded-lg focus:border-primary-800 focus:ring-0 w-full pl-[20px] py-[20px] placeholder-secondary-600' placeholder={placeholder} />
            
        </div>
    );
};

export default FormControl;