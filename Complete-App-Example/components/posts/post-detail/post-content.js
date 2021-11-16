import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DUMMY_POSTS = {
  slug: "getting-started-with-nextjs2",
  title: "Getting started with NextJS",
  image: "getting-started-with-nextjs.jpg",
  date: "2022-02-10",
  content: "# This is a first post",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      {DUMMY_POSTS.content}
    </article>
  );
}

export default PostContent;
