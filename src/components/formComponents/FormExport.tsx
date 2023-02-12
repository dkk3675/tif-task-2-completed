import { IFormSelectProps } from '@src/interface/forms';
import dynamic from 'next/dynamic';

const FormExport = dynamic(() => import('./FormSelect'), { ssr: false })

export default (props:IFormSelectProps) => <FormExport name={props.name} label={props.label} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onBlur={props.onBlur} error={props.error} touched={props.touched} selectProps={props.selectProps} children={props.children} helperText={props.helperText} wrapperProps={props.wrapperProps} options={props.options} />