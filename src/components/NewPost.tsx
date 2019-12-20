import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { gql, useMutation } from '@apollo/client';

const ADD_POST = gql`
mutation addPost($text: String!) {
  addPost(text: $text)
}
`;

const NewPost = () => {
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: ['queryPosts'],
  });
  const [text, setText] = useState('');
  const onSubmit = () => {
    addPost({ variables: { text } });
    setText('');
  };
  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      placeholder="Enter text..."
      onSubmitEditing={onSubmit}
      onChangeText={setText}
      value={text}
    />
  );
};

export default NewPost;
