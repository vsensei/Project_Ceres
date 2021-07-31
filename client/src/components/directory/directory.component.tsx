import React from 'react';
import DirectoryItem from 'components/directory-item/directory-item.component';
import './directory.styles.scss';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectDirectorySections } from 'redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';
import { RouteComponentProps } from 'react-router';

type Section = {
  id: number;
};

type PathParamsType = {};

type Props = RouteComponentProps<PathParamsType> & {
  sections: Array<Section>;
  history: any;
};

const Directory: React.FC<Props> = ({ sections, history }) => {
  const chooseDirectoryItem = (url: string, link: string) => () =>
    history.push(`${url}${link}`);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <DirectoryItem
          key={id}
          chooseDirectoryItem={chooseDirectoryItem}
          {...otherSectionProps}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(withRouter(Directory));
