import Logo from './Logo';
import background from '../background_cropped.png';
import './styles/Home.scss';

export default function Home() {
  return (
    <div>
      <div class='front-page'>
        <img src={background} alt='main_photo' className='main_photo'></img>
        <div className='main_words'>
          <p>Find the style just right for you</p>
          <button type="button" className="btn btn-outline-dark">Book Your Visit</button>
          <button type="button" className="btn btn-outline-dark">Shop the Selection</button>
        </div>
      </div>
    </div>
    )
  }
  