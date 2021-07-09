import React from 'react';
import DirectoryItem from 'components/directory-item/directory-item.component';
import './directory.styles.scss';
import { withRouter } from 'react-router-dom';
import sections from 'dummies/sectionsDummy';

const Directory = ({ history }) => {
  const chooseDirectoryItem = (url, link) => () =>
    history.push(`${url}${link}`);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <DirectoryItem
          key={id}
          {...otherSectionProps}
          chooseDirectoryItem={chooseDirectoryItem}
        />
      ))}
    </div>
  );
};

export default withRouter(Directory);
