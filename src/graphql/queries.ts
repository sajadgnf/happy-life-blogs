import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
    query getBlogsInfo($last:Int! = 12){  
      posts(first: $last) {
        author {
          name
          avatar {
            url
          }
        } 
        id
        slug
        title
        coverPhoto {
          url
        }
      }
    }
`

const GET_AUTHORS_INFO = gql`
  query{
    authors {
      avatar {
        url
      }
      slug
      id
      name
    }
  }
`

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!){
    author(where: {slug: $slug}) {
      name
      field
      avatar {
        url
      }
      description {
        html
      }
      posts {
        id
        slug
        title
        coverPhoto {
          url
        }
      }
    }
}
`

const GET_BLOG_INFO = gql`
 query getBlogInfo($slug: String!) {
    post(where: {slug: $slug}) {
      author {
        name
        slug
        avatar {
          url
        }
        field
      }
      coverPhoto {
        url
      }
      title
      content {
        html
      }
    }
}
`

const GET_POST_COMMENTS = gql`
 query getPostComments($slug: String!)  {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO, GET_POST_COMMENTS }
