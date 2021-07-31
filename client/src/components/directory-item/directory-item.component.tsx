import React from 'react';
import './directory-item.styles.scss';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

type PathParamsType = {};

type Props = RouteComponentProps<PathParamsType> & {
  title?: string;
  imageUrl?: string;
  size?: number;
  linkUrl?: string;
  match: any;
  chooseDirectoryItem: Function;
};

const DirectoryItem: React.FC<Props> = ({
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
      <h1 className="title">{title ? title.toUpperCase() : null}</h1>
      <span className="subtitle">BUY NOW</span>
    </div>
  </div>
);

export default withRouter(DirectoryItem);
