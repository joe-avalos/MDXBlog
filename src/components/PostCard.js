import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

import styles from '../css/postcard.module.css'

const PostCard = ({post:{excerpt, frontmatter:{title, date, author, slug, image}}}) => <article className={styles.card}>
  <div className={styles.image}>
    <Img fluid={image.childImageSharp.fluid} />
  </div>
  <div className={styles.info}>
    <div>
      <h2>{title}</h2>
      <h6><span>by {author}</span> / <span>{date}</span></h6>
      <p>{excerpt}</p>
      <Link to={slug} className={styles.link}>Read more</Link>
    </div>
  </div>
</article>

export default PostCard
