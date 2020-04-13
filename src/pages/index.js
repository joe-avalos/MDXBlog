import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/PostList'

export default () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  console.log(response)
  return <Layout>
    <PostList posts={posts}/>
  </Layout>
}

export const getPosts = graphql`
  query{
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do, YYYY")
            author
            slug
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
