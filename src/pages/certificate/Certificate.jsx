import { Image } from 'antd';
import './certificate.css';
import dataCertificate from '../../data/dataCertificate';
import { useLayoutEffect } from 'react';
import { motion as m } from 'framer-motion';

const images = dataCertificate.map(item => item.image);

export default function Certificate() {
  useLayoutEffect(() => {
    document.title = "Sidiq Yanuar | Certificate";
  })

  return (
    <m.div
      className="certificate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .75, ease: "linear" }}
    >
      <h3 className='title-certificate'>Certificate</h3>
      <p className='desc-certificate'>My certificate collection 💥</p>

      <div className="card-certificate">
        <div className="thumb-image-certificate">
          <Image.PreviewGroup items={images}>
            <Image src={images[0]} />
          </Image.PreviewGroup>
        </div>
      </div>
    </m.div>

  )
}
