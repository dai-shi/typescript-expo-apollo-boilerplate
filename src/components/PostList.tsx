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

interface Data {
  posts: {
    text: string;
    id: number;
  }[];
}

class QueryPosts extends Query<Data> {}

const PostList = () => (
  <QueryPosts query={QUERY_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error:{error}</Text>;
      if (!data) return <Text>No Data</Text>;
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
