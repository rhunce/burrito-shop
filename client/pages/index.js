// import { withUrqlClient } from "next-urql";
// import { createUrqlClient } from "../utils/createUrqlClient";
// import { useMeQuery, usePostsQuery } from "../generated/graphql";
// import { Layout } from "../components/Layout";
// import {
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Link,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import NextLink from "next/link";
// import React from "react";
// import { UpvoteSection } from "../components/UpvoteSection";
// import { EditDeletePostButtons } from "../components/EditDeletePostButtons";
import NavBar from "./navbar";

export default function Index({ categories, products, variants, orders }) {
  // const [variables, setVariables] = React.useState({
  //   limit: 15,
  //   cursor: null as string | null,
  // });

  // const [{ data: meData }] = useMeQuery();
  // const [{ data, fetching, error }] = usePostsQuery({
  //   variables,
  // });

  // if (!fetching && !data) {
  //   return (
  //     <div>
  //       You either have no posts or something went wrong with your query for
  //       some reason...
  //       <div>{error?.message}</div>
  //     </div>
  //   );
  // }

  return (
    <>
      <NavBar categories={categories} />
    </>

    // <Layout>
    //   {fetching && !data ? (
    //     <div>Loading...</div>
    //   ) : (
    //     <Stack spacing={8}>
    //       {data!.posts.posts.map((p) =>
    //         !p ? null : (
    //           <Flex key={p.id} p={5} shadow="md" borderWidth="1px">
    //             <UpvoteSection post={p} />
    //             <Box flex={1}>
    //               <NextLink href={`/post/${p.id}`} passHref legacyBehavior>
    //                 <Link>
    //                   <Heading fontSize="xl">{p.title}</Heading>
    //                 </Link>
    //               </NextLink>
    //               <Text>posted by {p.creator.username}</Text>
    //               <Flex align="center">
    //                 <Text flex={1} mt={4}>
    //                   {p.textSnippet}
    //                 </Text>
    //                 {meData?.me?.id !== p.creator.id ? null : (
    //                   <EditDeletePostButtons id={p.id} />
    //                 )}
    //               </Flex>
    //             </Box>
    //           </Flex>
    //         )
    //       )}
    //     </Stack>
    //   )}
    //   {data && data.posts.hasMore ? (
    //     <Flex>
    //       <Button
    //         onClick={() => {
    //           setVariables({
    //             limit: variables.limit,
    //             cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
    //           });
    //         }}
    //         isLoading={fetching}
    //         m="auto"
    //         my={8}
    //       >
    //         Load more...
    //       </Button>
    //     </Flex>
    //   ) : null}
    // </Layout>
  );
}

export async function getStaticProps() {
  // Get Categories
  const categoriesRes = await fetch("http://localhost:8000/categories");
  const categories = await categoriesRes.json();

  // Get Products
  const productsRes = await fetch("http://localhost:8000/products");
  const products = await productsRes.json();

  // Get Variants
  const variantsRes = await fetch("http://localhost:8000/variants");
  const variants = await variantsRes.json();

  // Get Orders
  const ordersRes = await fetch("http://localhost:8000/orders");
  const orders = await ordersRes.json();

  return { props: { categories, products, variants, orders } };
}

// export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
