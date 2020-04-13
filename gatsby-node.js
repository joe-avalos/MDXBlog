const path = require('path')

exports.createPages = async ({actions, graphql}) =>{
  const {createPage} = actions
  const {data:{allMdx:{edges:posts}}} = await graphql(`
    {
      allMdx{
        edges{
          node{
            frontmatter{
              slug
            }
          }
        }
      }
    }
  `)
  posts.forEach(({node}) => {
    const {slug} = node.frontmatter
    createPage({
      path: slug,
      component: path.resolve('./src/templates/post-template.js'),
      context: {slug}
    })
  })
}
