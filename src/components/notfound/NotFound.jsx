import "./notfound.css";
import { TfiFaceSad } from "react-icons/tfi";

export default function NotFound() {
  return (
    <div className='notfound'>
        <div className='not-found-emoji'>
            <TfiFaceSad />
        </div>
        <h3 className='not-found-desc'>404 Page Not Found </h3>
    </div>
  )
}
