import * as React from 'react';
import { TextInput } from 'react-native';

import graphqlTag from 'graphql-tag';
import { Mutation } from 'react-apollo';

interface Props {
  onSubmit: (text: string) => void;
}

interface State {
  text: string;
}

class MyTextInput extends React.Component<Props, State> {
  public state = {
    text: '',
  };

  private onSubmit = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    onSubmit(text);
    this.setState({ text: '' });
  }

  private onChange = (text: string) => {
    this.setState({ text });
  }

  public render() {
    const { text } = this.state;
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter text..."
        onSubmitEditing={this.onSubmit}
        onChangeText={this.onChange}
        value={text}
      />
    );
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
