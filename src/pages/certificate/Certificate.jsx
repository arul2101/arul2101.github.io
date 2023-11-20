import { Image } from 'antd';
import './certificate.css';
import dataCertificate from '../../data/dataCertificate';
import { useLayoutEffect } from 'react';

const images = dataCertificate.map(item => item.image);

export default function Certificate() {
  useLayoutEffect(() => {
    document.title = "Sidiq Yanuar | Certificate";
  })

  return (
    <div className="certificate"> 
      <h3 className='title-certificate'>Certificate</h3>
      <p className='desc-certificate'>Kumpulan sertifikat ku 💥</p>

      <div className="card-certificate">
        <div className="thumb-image-certificate">
          <Image.PreviewGroup items={images}>
            <Image src={images[0]} />
          </Image.PreviewGroup>
        </div>
      </div>
    </div>
    
  )
}
