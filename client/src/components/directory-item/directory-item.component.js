import React from 'react';
import './directory-item.styles.scss';
import { withRouter } from 'react-router-dom';

const DirectoryItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  match,
  chooseDirectoryItem,
}) => (
  <div
    className={`directory-item ${size ? size : ''}`}
    onClick={chooseDirectoryItem(match.url, `shop/${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">BUY NOW</span>
    </div>
  </div>
);

export default withRouter(DirectoryItem);
