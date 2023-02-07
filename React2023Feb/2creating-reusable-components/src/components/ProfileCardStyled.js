import React from 'react';

export default function ProfileCardStyled({ name, imageSource }) {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={imageSource} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={imageSource} alt="Placeholder" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">@{name}</p>
            </div>
          </div>

          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis mauris. <a href="https://www.google.com/">@bulmaio</a>.
            <a href="https://www.google.com/">#css</a>{' '}
            <a href="https://www.google.com/">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  );
}
