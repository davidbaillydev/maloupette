import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">  
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/hero/2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Vente de la collection d'été</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shoppez</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/hero/1.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Faites de votre loulou un maloupette</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Shoppez</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Expédition gratuite</h4>
                <p>Sur les achats de plus de 50 €.</p>
              </div>
            </li>
            
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% de clients satisfaits</h4>
                <p>Les avis de nos clients parlent d'eux-mêmes</p>
              </div>
            </li>
            
            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Originalité garantie</h4>
                <p>30 jours de garantie pour chaque produit de notre magasin</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PageIntro