import { NavLink } from 'react-router-dom';
import './blogitem.css';
import { AiOutlineDoubleRight } from "react-icons/ai";
import PropTypes from 'prop-types';

export default function BlogItem({ blog }) {
  return (
    <div className="card-blog" key={blog.id}>
      <div className="thumb-image-blog">
          <img src={blog.img} alt="thumbnail" />
      </div>
      <h3 className='title-inner-blog'>{blog.title}</h3>
      <p className='desc-inner-blog'>{blog.desc[0]}</p>
      <NavLink to={`${blog.id}`} className="link-inner-blog">Read More<AiOutlineDoubleRight className='icon-inner-link' /></NavLink>
    </div>
  )
}

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
}
