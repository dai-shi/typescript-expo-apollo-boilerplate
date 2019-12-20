import React from 'react';
import { FlatList, Text } from 'react-native';

import { gql, useQuery } from '@apollo/client';

const QUERY_POSTS = gql`
query queryPosts {
  posts {
    id
    text
  }
}
`;

type Data = {
  posts: {
    text: string;
    id: number;
  }[];
};

const PostList = () => {
  const { loading, error, data } = useQuery<Data>(QUERY_POSTS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error:{error}</Text>;
  if (!data) return <Text>No Data</Text>;
  return (
    <FlatList
      data={data.posts}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <Text>{item.text}</Text>}
    />
  );
};

export default PostList;
