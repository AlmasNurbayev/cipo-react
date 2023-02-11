import React from 'react'

export default function Select(props) {

    const options = props.list.map((obj) =>  {
        return <option key={obj.value} value={obj.value}>{obj.name}</option>
    }) 

  return (
    <select
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
    >
        <option disabled={true} value=''>{props.default}</option>
        {options}
    </select>    
  )
}
