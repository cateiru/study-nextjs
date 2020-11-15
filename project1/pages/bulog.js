// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
    return (
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    )
  }

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://.../bulog/posts')
    const posts = await res.json()

    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
        posts,
        },
    }
}

export default Blog
