import dynamic from 'next/dynamic';
import React from 'react';

const FormExport = dynamic((props) => import('./FormSelect'), { ssr: false })

export default (props) => <FormExport name={props.name} label={props.label} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onBlur={props.onBlur} error={props.error} touched={props.touched} selectProps={props.selectProps} children={props.children} helperText={props.helperText} wrapperProps={props.wrapperProps} options={props.options} />