import React from 'react'
import {Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import {MDXRenderer} from 'gatsby-plugin-mdx'

import Layout from '../components/layout'
import styles from '../css/postTemplate.module.css'

const PostTemplate = ({data:{mdx:{body, frontmatter:{title, date, author, image}}}}) => <Layout>
  <section className={styles.template}>
    <Link to="/" className={styles.link}>back to all posts</Link>
    <div className={styles.info}>
      <h1>{title}</h1>
      <h4><span>by {author}</span> / <span>{date}</span></h4>
    </div>
    <Img fluid={image.childImageSharp.fluid} />
    <div className={styles.content}>
      <MDXRenderer>{body}</MDXRenderer>
    </div>
  </section>
</Layout>

export const getPost = graphql`
  query getPost($slug: String!){
    mdx(frontmatter:{slug:{eq:$slug}}){
      frontmatter{
        title
        date(formatString: "MMMM Do, YYYY")
        author
        image{
          childImageSharp{
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
