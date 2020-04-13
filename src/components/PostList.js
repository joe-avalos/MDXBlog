import React from 'react'

import styles from '../css/postlist.module.css'
import PostCard from './PostCard'

const PostList = ({ posts }) => <section className={styles.posts}>
  <h1>Boloyde</h1>
  <h4>Personal Blog</h4>
  <div className={styles.center}>
    {posts.map(({node}) => <PostCard key={node.id} post={node} />)}
  </div>
</section>


export default PostList
