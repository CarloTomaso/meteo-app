import './Input.scss'
import React, {useState} from 'react'




function InputSearch ({onChange,children}) {
  const [value,setvalue] = useState('');


console.log(value)

  return (
    <div className="input">
    <input type="text" placeholder='Inserisci la città' value={value} onChange={function (ev) {
            setvalue(ev.target.value);
            onChange(ev.target.value);
        }}
      
        />
   {children}
    </div>
  )
}

export default InputSearch