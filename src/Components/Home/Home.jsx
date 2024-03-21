import React, { useState } from 'react'
import './Home.scss'
import { FaLongArrowAltRight } from "react-icons/fa";
import Navbar from '../Navbar/Navbar'

const Home = () => {
    const [selectedCarousel, setSelectedCarousel] = useState(1);

    const handleCarouselClick = (number) => {
      // window.location.reload()
        setSelectedCarousel(number);
       
      };

      const renderCarouselContent = () => {
        switch (selectedCarousel) {
          case 1:
            return (
              <>
                <div className="col-lg-6 MainLeft">
                  <div className="img">
                    <img src="/fasionOne.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content">
                    <h4 className='object'>#Women Dress</h4>
                    <h1>Satin Dress</h1>
                    <h4>Shop Now <FaLongArrowAltRight /></h4>
                  </div>
                </div>
              </>
            );
          case 2:
            return (
              <>
                <div className="col-lg-6 MainLeft">
                  <div className="img">
                    <img src="/fasionTwo.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="content">
                    <h4>#Kids Dress</h4>
                    <h1>Linen Dress</h1>
                    <h4>Shop Now <FaLongArrowAltRight /></h4>
                  </div>
                </div>
              </>
            );
            case 3:
                return (
                  <>
                    <div className="col-lg-6 MainLeft">
                      <div className="img">
                        <img src="/fasionThree.png" alt="" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content">
                        <h4>#Mens Dress</h4>
                        <h1>Cotton  Dress</h1>
                        <h4>Shop Now <FaLongArrowAltRight /></h4>
                      </div>
                    </div>
                  </>
                );
          // Add cases for other carousel numbers if needed
          default:
            return null;
        }
      };
    
  return (
    <div className='HomeMainDiv'>
            <Navbar />
            <div className="hero-section">
                <div className="container-fluid">
                    <div className="row">
                        {renderCarouselContent()}
                    </div>
                </div>
                <div className="numbers">
                    <div className={`carousNumber ${selectedCarousel === 1 ? 'selected' : ''}`} onClick={() => handleCarouselClick(1)}>1</div>
                    <div className={`carousNumber ${selectedCarousel === 2 ? 'selected' : ''}`} onClick={() => handleCarouselClick(2)}>2</div>
                    <div className={`carousNumber ${selectedCarousel === 3 ? 'selected' : ''}`} onClick={() => handleCarouselClick(3)}>3</div>
                </div>
            </div>
        </div>
  )
}

export default Home
