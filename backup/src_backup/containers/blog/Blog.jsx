import React from 'react';
import './Blog.css';
import { Article } from "../../components"
import { blog01, blog02, blog03,blog04,blog05 } from './imports'

const Blog = () => {
  return (
<div className="fgproject__blog section__padding" id="blog">
    <div className="fgproject__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="fgproject__blog-container">
      <div className="fgproject__blog-container_groupA">
        <Article imageUrl={blog01} date="Sep 26, 2021" title="F.G. Project content is in the future. Come back soon for more!" />
      </div>
      <div className="fgproject__blog-container_groupB">
        <Article imageUrl={blog02} date="Sep 26, 2021" title="F.G. Project content is in the future. Come back soon for more!" />
        <Article imageUrl={blog03} date="Sep 26, 2021" title="F.G. Project content is in the future. Come back soon for more!" />
        <Article imageUrl={blog04} date="Sep 26, 2021" title="F.G. Project content is in the future. Come back soon for more!" />
        <Article imageUrl={blog05} date="Sep 26, 2021" title="F.G. Project content is in the future. Come back soon for more!" />
      </div>
    </div>
  </div>
  )
}
export default Blog
