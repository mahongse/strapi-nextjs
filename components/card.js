import React from "react";
import Link from "next/link";

const Card = ({ post }) => {
  const imageUrl = process.env.API_URL + post.image.url;
  // const imageUrl =
  //   process.env.NODE_ENV !== "development"
  //     ? post.image.url
  //     : process.env.API_URL + post.image.url;
  return (
    <Link href={{ pathname: "article", query: { id: post.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <img src={imageUrl} alt={post.image.url} height="100" />
          </div>
          <div className="uk-card-body">
            <p id="category" className="uk-text-uppercase">
              {post.category.name}
            </p>
            <p id="title" className="uk-text-large">
              {post.title}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
