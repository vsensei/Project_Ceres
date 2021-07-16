import React from 'react';
import DirectoryItem from 'components/directory-item/directory-item.component';
import './directory.styles.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectDirectorySections } from 'redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections, history }) => {
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

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(withRouter(Directory));
