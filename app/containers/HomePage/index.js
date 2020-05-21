/* eslint-disable no-unused-vars,react/no-unused-prop-types */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectError,
  makeSelectLoading,
  makeSelectRepos,
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  username,
  loading,
  error,
  repos,
  onSubmitForm,
  // onChangeUsername,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  const reposListProps = {
    loading,
    error,
    repos,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        {/* <CenteredSection> */}
        {/* <H2> */}
        {/* <FormattedMessage {...messages.startProjectHeader} /> */}
        {/* </H2> */}
        {/* <p> */}
        {/* <FormattedMessage {...messages.startProjectMessage} /> */}
        {/* </p> */}
        {/* </CenteredSection> */}
        {/* <Section> */}
        {/* <H2> */}
        {/* <FormattedMessage {...messages.trymeHeader} /> */}
        {/* </H2> */}
        {/* <Form onSubmit={onSubmitForm}> */}
        {/* <label htmlFor="username"> */}
        {/* <FormattedMessage {...messages.trymeMessage} /> */}
        {/* <AtPrefix> */}
        {/* <FormattedMessage {...messages.trymeAtPrefix} /> */}
        {/* </AtPrefix> */}
        {/* <Input */}
        {/* id="username" */}
        {/* type="text" */}
        {/* placeholder="mxstbr" */}
        {/* value={username} */}
        {/* onChange={onChangeUsername} */}
        {/* /> */}
        {/* </label> */}
        {/* </Form> */}
        {/* <ReposList {...reposListProps} /> */}
        {/* </Section> */}
        <h1> hello this is home </h1>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
