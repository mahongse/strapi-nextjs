import React from "react";
import Articles from "../components/Articles";
import Query from "../components/query";
import ARTICLES_QUERY from "../apollo/queries/articles/articles";

const Home = () => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { posts } }) => {
              return <Articles posts={posts} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
