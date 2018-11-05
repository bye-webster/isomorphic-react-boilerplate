import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Alert, Tag, Heading, Checkbox, Label, Input } from '@components';

class Components extends Component {
  static propTypes = {
    theme: PropTypes.any,
  };
  static defaultProps = {};

  render() {
    return (
      <Fragment>
        <Alert
          type="info"
          title="Information message:"
          message="Information message goes here."
        />
        <Alert
          type="success"
          title="Success message:"
          message="Success message goes here!"
        />
        <Alert
          type="error"
          title="Error message:"
          message="Error message goes here."
        />
        <Alert
          type="warning"
          title="Warning message:"
          message="Warning message goes here."
        />
        <Alert
          type="warning"
          multiline
          title="Warning message:"
          message="Here is a clear explanation. It drops to next line if the content is long."
        />
        <div>
          <Tag>Default</Tag>
          <Tag checked={false}>Unchecked</Tag>
          <Tag color="red">Premium</Tag>
          <Tag fill={true} background="#288ad6" color="#fff">
            New
          </Tag>
        </div>
        <Heading>Components</Heading>
        <hr />
        <Heading level={3}>Label</Heading>
        <Heading level={5}>Inline</Heading>
        <Label>Testing Label</Label>
        <Label>Testing Label 2</Label>
        <hr />
        <Heading level={5}>Block</Heading>
        <Label display="block">Testing Label</Label>
        <Label display="block">Testing Label 2</Label>
        <hr />
        <Heading level={3}>Text Input</Heading>
        <Input placeholder="Placeholder text" />
        <hr />
        <Checkbox checked={false} label="Remember me" />
      </Fragment>
    );
  }
}

export default hot(module)(Components);