import { useEffect, useState } from 'react';
import './blogdetail.css'

// Framer Motion
import { motion as m } from 'framer-motion';

// React Router
import { NavLink, useParams } from 'react-router-dom';

// Data
import dataBlog from '../../data/dataBlog';

// Pages
import NotFound from '../../components/notfound/NotFound';

export default function BlogDetail(){
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
      let blog = dataBlog.find((blog) => blog.id === parseInt(id));

      if (blog) {
          setBlog(blog);
      }
    }, [id]);

    return (
      <m.div
        className="article-blog"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .75, ease: "linear" }}
      >
        {blog ? (
            <>
                <NavLink to="/blog">&#8592; Back</NavLink>
                <h3>{blog.title}</h3>
                <div className="thumb-image-article">
                    <img src={blog.img} alt="image" className='image-article' />
                </div>

                <div className="article-inner-blog">
                    {blog.desc.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
            </>
        ) : (
            <NotFound />
        )}
      </m.div>
    )
}