import react from 'react';
import Helmet from 'react-helmet';

const postTemplate = (data) => {
  const {markdownRemark: post} = data;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
    </div>
  )
}

export default postTemplate;