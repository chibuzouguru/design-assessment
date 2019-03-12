import React from 'react';

const Colors = ({ colors, numbers, handlePageChange, showSingleSwatch }) => {
  return (
    <article className="grid">
      <ul className="grid__list">
        {colors.map(item => (
          <li key={item.id} className="grid__listItem" onClick={() => showSingleSwatch(item.id)}>
            <div className="card">
              <div className="card__color" id={`item-${item.id}`} style={{backgroundColor: item.color}}></div>
              <div className="card__caption">
                <p className="card__text">{item.color.toLowerCase()}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <ul className="pagination">
        {numbers.map(value => {
          return (
            <li
              key={value}
              id={value}
              onClick={handlePageChange}
              className="pagination__number"
            >
              {value}
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default Colors;