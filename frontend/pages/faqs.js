import FAQs from "../components/Faqs";
import Layout from "../hoc/Layouts/Masterpage";
import PostList from "../components/example/PostList";
import { ALL_POSTS_QUERY, allPostsQueryVars } from "../queries/postlist";
import { initializeApollo, addApolloState } from "../lib/apolloClient";

function FAQsPage() {
  return (
    <Layout>
      <FAQs />
      <PostList />
    </Layout>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars
  });

  return addApolloState(apolloClient, {
    props: {}
  });
}

export default FAQsPage;
