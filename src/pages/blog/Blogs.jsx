import { useLayoutEffect } from 'react';

// My css
import './blogs.css';

// Framer Motion
import { motion as m } from 'framer-motion';

// My Components
import BlogItem from '../../components/blog-item/BlogItem';

// Data
import dataBlog from '../../data/dataBlog';

export default function Blogs(){
  useLayoutEffect(() => {
    document.title = "Sidiq Yanuar | My Blogs"
  })

  return (
    <m.div
      className="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75, ease: "linear" }}
    >
      <h3 className='title-blog'>Blog</h3>
      <p className='desc-blog'>Jadikan kamu menjadi lebih produktif dan terhibur melalui blog ini 🔥</p>

      <div className="row-blog">
        {dataBlog.map(item => <BlogItem blog={item} key={item.id} />)}
      </div>
    </m.div>
  )
}