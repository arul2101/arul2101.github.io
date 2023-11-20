import { useLayoutEffect, useState } from 'react';
import './portfolio.css';

// Framer Motion
import { motion as m } from 'framer-motion';

// Data
import dataPortfolios from "./../../data/dataPortfolio";

// Components
import Categories from '../../components/categories/Categories';

// Helper
import PortfolioItem from '../../components/portfolio-item/PortfolioItem';


export default function Portfolio() {
  const [dataPortfolio, setDataPortfiolio] = useState(dataPortfolios);

  useLayoutEffect(() => {
    document.title = "Sidiq Yanuar | Portfolio";
  })

  const filterItems = (category) => {
    if(category === "All") {
        setDataPortfiolio(dataPortfolios);
        return;
    }
    const newItems = dataPortfolios.filter((item) => {
        return item.category === category;
    });
    setDataPortfiolio(newItems);
  };

  return (
    <m.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "linear" }}
    >
      <h3 className="title-portfolio">Portfolio</h3>
      <p className="desc-portfolio">Most Recent Work</p>

      <Categories filter={filterItems} />

      <div className="row-portfolio-2">
        {dataPortfolio.map(item => <PortfolioItem key={item.id} portfolio={item} />)}
      </div>
    </m.div>
  )
}
