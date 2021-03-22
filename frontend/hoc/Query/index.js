// You are going to use Apollo to fetch your data from different pages.
// We don't want you to rewrite the same code every time in your pages.
// This is why you are going to write a Query component that will be reusable!
import { useQuery } from "@apollo/client";

const Query = ({ children, query, queryvariables }) => {
  // We are sending an id if it exists
  const { loading, error, data } = useQuery(query, {
    variables: { ...queryvariables }
  });

  // This should be a styled spinner/loader
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  // Return the child component with the retrieved data as prop.
  return children({ data });
};

export default Query;
