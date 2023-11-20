import PropTypes from 'prop-types';
import { FiSend, FiInfo, FiGithub } from "react-icons/fi";
import './portfolio-item.css';
import { Modal, Tooltip } from 'antd';
import { Image } from 'antd';


export default function PortfolioItem({ portfolio }) {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <div className="card" key={portfolio.id}>
      <div className="thumb-image-portfolio">
        <Image.PreviewGroup items={portfolio.img}>
          <Image src={portfolio.img[0]} height={250} />
        </Image.PreviewGroup>
      </div>

      <div className="card-desc-portfolio">
        <h3>{portfolio.title}</h3>

        <div className={portfolio.link ? 'inner-portfolio' : 'align-end'}>
          {portfolio.link && (
            <a
            href={portfolio.link}
            target="_blank"
            rel="noreferrer"
            className='inner-link-demo'
            >Demo <FiSend /></a>
          )}
          <div>
            {portfolio.github !== "none" && (
              <a
                href={portfolio.github}
                target="_blank" 
                rel="noreferrer"
              ><FiGithub className='button-info' /></a>
            )}
            

            <Tooltip
              title="info"
            >
              <FiInfo
                onClick={() => {
                  modal.info(portfolio.config);
                }}
                className='button-info'
              />
              {contextHolder}
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  portfolio: PropTypes.object.isRequired
}
