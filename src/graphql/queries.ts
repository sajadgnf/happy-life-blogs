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

export { GET_BLOGS_INFO, GET_AUTHORS_INFO }