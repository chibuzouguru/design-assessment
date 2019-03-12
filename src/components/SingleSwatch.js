import React from 'react';
import lightenOrDarken from '../utils';


const SingleSwatch = ({ item, closeSwatch }) => {
  return (
    <article className="singlecolor">
      <div className="singlecolor__content">
        <div className="card card--big">
          <div className="card__color card--big__color" style={{backgroundColor: item.color}}></div>
          <div className="card__caption  card--big__caption">
            <p className="card__text card--big__text">{item.color.toLowerCase()}</p>
          </div>
        </div>
        <ul className="lower-grid">
          <li className="lower-grid__item">
            <div className="card card--lowergrid">
              <div className="card__color card--lowergrid__color" style={{backgroundColor: lightenOrDarken(item.color, -40)}}></div>
              <div className="card__caption">
                <p className="card__text">{lightenOrDarken(item.color, -40)}</p>
              </div>
            </div>
          </li>
          <li className="lower-grid__item">
            <div className="card card--lowergrid">
              <div className="card__color card--lowergrid__color" style={{backgroundColor: lightenOrDarken(item.color, -20)}}></div>
              <div className="card__caption">
                <p className="card__text">{lightenOrDarken(item.color, -20)}</p>
              </div>
            </div>
          </li>
          <li className="lower-grid__item">
            <div className="card card--lowergrid">
              <div className="card__color card--lowergrid__color" style={{backgroundColor: item.color}}></div>
              <div className="card__caption">
                <p className="card__text">{item.color.toLowerCase()}</p>
              </div>
            </div>
          </li>
          <li className="lower-grid__item">
            <div className="card card--lowergrid">
              <div className="card__color card--lowergrid__color" style={{backgroundColor: lightenOrDarken(item.color, 40)}}></div>
              <div className="card__caption">
                <p className="card__text">{lightenOrDarken(item.color, 40)}</p>
              </div>
            </div>
          </li>
          <li className="lower-grid__item">
            <div className="card card--lowergrid">
              <div className="card__color card--lowergrid__color" style={{backgroundColor: lightenOrDarken(item.color, 70)}}></div>
              <div className="card__caption">
                <p className="card__text">{lightenOrDarken(item.color, 70)}</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="singlecolor__button">
          <button onClick={closeSwatch} className="button button--clear">Clear</button>
        </div>
      </div>
    </article>
  )
}

export default SingleSwatch;