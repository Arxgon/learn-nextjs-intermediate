import AllPosts from "../../components/posts/all-posts";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.jpg",
    excerpt: "lorem ipsum",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.jpg",
    excerpt: "lorem ipsum",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.jpg",
    excerpt: "lorem ipsum",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-with-nextjs.jpg",
    excerpt: "lorem ipsum",
    date: "2022-02-10",
  },
];

function AllPostPage() {
  return <AllPosts posts={DUMMY_POST} />;
}

export default AllPostPage;
