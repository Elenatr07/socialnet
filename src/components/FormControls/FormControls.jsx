import React from 'react';
import style from './FormControls.module.css'
import { Field } from 'redux-form';

export  function Textarea({input, meta, ...props}) {
  //  debugger
  const hasError = meta.touched && meta.error
  //touched,error встроенные в redux-form функции, располагается в meta в компоненте Field*, touched проверяет коснулись ли поля ввода
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <div>
            <textarea {...input} {...props}/>
        </div>
        { hasError && <span>{meta.error}</span>} 
        
        
        
    </div>
  )
}

export  function Input({input, meta, ...props}) {
    //  debugger
    const hasError = meta.touched && meta.error
    //touched,error встроенные в redux-form функции, располагается в meta в компоненте Field*, touched проверяет коснулись ли поля ввода
    return (
      <div className={style.formControl + " " + (hasError ? style.error : "")}>
          <div>
              <input {...input} {...props}/>
          </div>
          { hasError && <span>{meta.error}</span>} 
          
          
          
      </div>
    )
  }

  export const createField = (placeholder, name, validators, component, props={}, text = '') => (
    <div>
      <Field placeholder={placeholder} name={name}
      validate={validators}
      component={component}
      {...props} /> {text}
    </div>
  )