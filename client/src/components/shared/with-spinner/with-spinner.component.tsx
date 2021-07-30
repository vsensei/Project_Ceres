import React from 'react';
import Spinner from './spinner/spinner.component';

type Props = {
  isLoading: boolean;
};

const WithSpinner =
  (WrappedComponent: React.FC) =>
  ({ isLoading, ...otherProps }: Props) => {
    return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
  };

export default WithSpinner;
