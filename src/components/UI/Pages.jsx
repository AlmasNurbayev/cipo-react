import React from 'react';
import { useState } from 'react';


export default function Pages({ array, limit, currentPage, onClick }) {


  const [activeIndex, setActiveIndex] = useState(1);

  if (activeIndex != currentPage) { setActiveIndex(currentPage) }

  console.log('rerender pagination ', currentPage);

  return (
    <ul className={'pagination'}>
      <strong>Страницы:</strong>

      <li
        onClick={() => {
          {
            if (activeIndex > 1) {
              setActiveIndex(activeIndex - 1);
              onClick(activeIndex - 1);
            }
          }
        }}
        className={'page-item'}
        style={{ cursor: 'pointer' }}
        key={'page<'}>
        <a className="page-link"
          style={{ fontWeight: 'normal' }}>
          {'<'}
        </a>
      </li>

      {array.map((element, index) =>

        <li
          onClick={() => {
            setActiveIndex(index + 1);
            onClick(index + 1);
            //loadingPosts(index+1);
          }}
          className={index + 1 === activeIndex ? 'page-item-active' : 'page-item'}


          style={{ cursor: 'pointer' }}
          key={'page' + index + 1}>
          <a className="page-link"
            style={index + 1 === activeIndex ? { fontWeight: 'bold' } : { fontWeight: 'normal' }}>
            {element.page}
          </a>
        </li>
      )}

      <li
        onClick={() => {
          {
            if (activeIndex < array.length) {
              setActiveIndex(activeIndex + 1);
              onClick(activeIndex + 1);
            }
          }
        }}
        className={'page-item'}
        style={{ cursor: 'pointer' }}
        key={'page>'}>
        <a className="page-link"
          style={{ fontWeight: 'normal' }}>
          {'>'}
        </a>
      </li>

    </ul>
  )
}
