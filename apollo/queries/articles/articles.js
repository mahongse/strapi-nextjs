import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query posts {
    posts {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
