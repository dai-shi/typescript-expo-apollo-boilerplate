import * as React from 'react';
import { FlatList, Text } from 'react-native';

import graphqlTag from 'graphql-tag';
import { Query } from 'react-apollo';

const QUERY_POSTS = graphqlTag`
query queryPosts {
  posts {
    id
    text
  }
}
`;

interface IData {
  posts: Array<{ text: string, id: number }>;
}

class QueryPosts extends Query<IData> {}

const PostList = () => (
  <QueryPosts query={QUERY_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error: ${error}`;
      if (!data) return 'No Data';
      return (
        <FlatList
          data={data.posts}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Text>{item.text}</Text>}
        />
      );
    }}
  </QueryPosts>
);

export default PostList;
