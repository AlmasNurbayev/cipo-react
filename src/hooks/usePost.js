import { useMemo } from "react";

export function useSortedPosts(posts, sort) {
    const sortedPosts = useMemo(() => {
        console.log('sorting...');
        if (sort) {
          console.log(sort);
          if (sort === 'id') {
            return [...posts].sort((a, b) => a[sort] - b[sort]);
          } else {
            console.log('string');
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
          }
        } else {
          return posts;
        }
      }, [sort, posts])

      return sortedPosts;
}

export function usePosts(posts, sort, query) {
  const sortedPosts = useSortedPosts(posts, sort);
  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
  }, [query, sortedPosts])

  return sortedSearchedPosts;
}