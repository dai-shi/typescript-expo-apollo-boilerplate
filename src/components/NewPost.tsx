import * as React from 'react';
import { TextInput } from 'react-native';

import graphqlTag from 'graphql-tag';
import { Mutation } from 'react-apollo';

interface IProps {
  onSubmit: (text: string) => void;
}

interface IState {
  text: string;
}

class MyTextInput extends React.Component<IProps, IState> {
  public state = {
    text: '',
  };

  public render() {
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter text..."
        onSubmitEditing={this.onSubmit}
        onChangeText={this.onChange}
        value={this.state.text}
      />
    );
  }

  private onSubmit = () => {
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  }

  private onChange = (text: string) => {
    this.setState({ text });
  }
}

const ADD_POST = graphqlTag`
mutation addPost($text: String!) {
  addPost(text: $text)
}
`;

const NewPost = () => (
  <Mutation mutation={ADD_POST} refetchQueries={['queryPosts']}>
    {(addPost) => {
      const add = (text: string) => {
        addPost({ variables: { text } });
      };
      return (
        <MyTextInput onSubmit={add} />
      );
    }}
  </Mutation>
);

export default NewPost;
