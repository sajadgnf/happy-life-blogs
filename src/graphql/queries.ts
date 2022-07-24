import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
    query {  
      posts {
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
        avatar {
          url
        }
        field
      }
      coverPhoto {
        url
      }
      slug
      title
      content {
        html
      }
    }
}
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO }