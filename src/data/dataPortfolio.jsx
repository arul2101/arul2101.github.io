import Image1 from './img/portfolio/todolist.png'
import Image2 from './img/portfolio/coffee-shop.png';
import Image3 from './img/portfolio/tour-travel.png';
import Image4 from './img/portfolio/company-website.png';

// Image Dashboard
import Pict1 from './img/portfolio/dashboard-company/pict-1.png';
import Pict2 from './img/portfolio/dashboard-company/pict-2.png';
import Pict3 from './img/portfolio/dashboard-company/pict-3.png';
import Pict4 from './img/portfolio/dashboard-company/pict-4.png';
import Pict5 from './img/portfolio/dashboard-company/pict-5.png';
import Pict6 from './img/portfolio/dashboard-company/pict-6.png';
import Pict7 from './img/portfolio/dashboard-company/pict-7.png';
import Pict8 from './img/portfolio/dashboard-company/pict-8.png';

// Image My Anime Chan
import PictAnime1 from './img/portfolio/my-anime-chan/1.png';
import PictAnime2 from './img/portfolio/my-anime-chan/2.png';
import PictAnime3 from './img/portfolio/my-anime-chan/3.png';
import PictAnime4 from './img/portfolio/my-anime-chan/4.png';

export default [
  {
    id: 7,
    category: "Web",
    title: "Dashboard Booking Management",
    img: [
      Pict1,
      Pict2,
      Pict3,
      Pict4,
      Pict5,
      Pict6,
      Pict7,
      Pict8,
    ],
    link: "https://skuy-hotels.vercel.app",
    github: "https://github.com/arul2101/skuy-hotels",
    config: {
      title: "App Information",
      width: "1000px",
      content: (
        <div className='modal-portfolio'>
          <ul>
            <h3>Tech Stack : </h3>
            <li>React JS (React Query, React Router)</li>
            <li>TailwindCSS</li>
            <li>Supabase</li>
            <li>Ant Design</li>
          </ul>
          <ul>
            <h3>Features : </h3>
            <li>Employee can create user login</li>
            <li>Employee can update full name and password</li>
            <li>Employee can create and delete a booking</li>
            <li>Employee can create, update, delete a cabin</li>
            <li>Employee can update status to the checked in or checked out</li>
            <li>Employee can filter booking by status</li>
            <li>Employee can sort booking by dates and amount</li>
            <li>Employee can filter cabin by discount</li>
            <li>Employee can sort cabin by price, discount and max capacity</li>
            <li>Employee can search cabin by name</li>
          </ul>
        </div>

      ),
      okType: "default"
    },
  },
  {
    id: 6,
    category: "Web",
    title: "My Anime Chan",
    img: [PictAnime1, PictAnime2, PictAnime3, PictAnime4],
    link: "https://my-anime-chan.vercel.app/",
    github: "https://github.com/arul2101/my-anime-chan",
    config: {
      title: "App Information",
      width: "800px",
      content: (
        <div className='modal-portfolio'>
          <ul>
            <h3>Tech Stack : </h3>
            <li>Next JS</li>
            <li>TailwindCSS</li>
            <li>Axios</li>
            <li>Framer Motion</li>
            <li>TypeScript</li>
          </ul>
        </div>
      ),
      okType: "default"
    },
  },
  {
    id: 5,
    category: "Web",
    title: "Company Website",
    img: [
      Image4
    ],
    link: "https://arul2101.github.io/rizer-digital",
    github: "https://github.com/arul2101/rizer-digital",
    config: {
      title: "App Information",
      width: "800px",
      content: (
        <div className='modal-portfolio'>
          <ul>
            <h3>Tech Stack : </h3>
            <li>React Js</li>
            <li>React Router</li>
            <li>Framer Motion</li>
            <li>React Slick</li>
            <li>Vanilla CSS</li>
          </ul>
        </div>
      ),
      okType: "default"
    }
  },
  {
    id: 4,
    category: "Web",
    title: "Coffe Shop Website",
    img: [Image2],
    link: "https://arul2101.github.io/warkop-sobat-website",
    github: "https://github.com/arul2101/warkop-sobat-website",
    config: {
      title: "App Information",
      width: "800px",
      content: (
        <div className='modal-portfolio'>
          <ul>
            <h3>Tech Stack : </h3>
            <li>React Js</li>
            <li>React Router</li>
            <li>Vanilla CSS</li>
          </ul>
        </div>
      ),
      okType: "default"
    }
  },
  {
    id: 3,
    category: "Web",
    title: "Tour & Travel Website",
    img: [Image3],
    link: "https://arul2101.github.io/tour-id",
    github: "https://github.com/arul2101/tour-id",
    config: {
      title: "App Information",
      width: "800px",
      content: (
        <div className='modal-portfolio'>
          <ul>
            <h3>Tech Stack : </h3>
            <li>React Js</li>
            <li>React Router</li>
            <li>Vanilla CSS</li>
          </ul>
        </div>
      ),
      okType: "default"
    }
  },
  {
    id: 2,
    category: "rest-api",
    title: "Rest api forum diskusi",
    img: ["https://placehold.co/1080x720"],
    github: "https://github.com/arul2101/forum-diskusi-restapi",
    config: {
      title: "App Information",
      width: "800px",
      content: (
        <div className='modal-portfolio'>
          <ul>
            <h3>Tech Stack : </h3>
            <li>Laravel 10</li>
          </ul>
        </div>
      ),
      okType: "default"
    }
  },
  {
    id: 1,
    category: "Web",
    title: "Todolist App",
    img: [Image1],
    link: "https://arul2101.github.io/todolist-app",
    github: "https://github.com/arul2101/todolist-app",
    config: {
      title: "App Information",
      width: "800px",
      content: (
        <div className='modal-portfolio'>
          <ul>
            <h3>Tech Stack : </h3>
            <li>React Js (useReducer)</li>
            <li>Vanilla CSS</li>
          </ul>
        </div>

      ),
      okType: "default"
    }
  },
]