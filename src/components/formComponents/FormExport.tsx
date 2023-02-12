import { IFormSelectProps } from '@src/interface/forms';
import dynamic from 'next/dynamic';

const FormExport = dynamic(() => import('./FormSelect'), { ssr: false })

FormExport.displayName = 'FormExport';

export default ({
    name,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
    selectProps,
    children,
    helperText,
    wrapperProps,
    options,}:IFormSelectProps) => <FormExport name={name} label={label} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} error={error} touched={touched} selectProps={selectProps} children={children} helperText={helperText} wrapperProps={wrapperProps} options={options} />