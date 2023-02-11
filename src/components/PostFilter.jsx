import React from 'react'
import MyInput from './UI/MyInput'
import MySelect from './UI/MySelect'

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
            <MyInput          
          value={filter.query}
          type='text'
          onChange={event => setFilter({...filter, query: event.target.value})}
          placeholder='Поиск по названию...' />
      <MySelect 
        list={[{value: 'id', name: 'by id'}, {value: 'title',name: 'by title'}, {value: 'body', name: 'by body'}]} 
        default={'sort...'}
        value = {filter.sort}
        onChange = {selectedSort => setFilter({...filter, sort: selectedSort})}
      />
    </div>
  )
}
