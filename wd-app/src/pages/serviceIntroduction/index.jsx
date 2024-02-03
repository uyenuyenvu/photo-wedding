import '../../assets/scss/serviceIntroductionStyle.scss'
import imgDefault from '../../assets/images/imageDefault.png'
import Slider from 'infinite-react-carousel';
import Button from "../../components/common/Button.jsx";
import * as React from 'react';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import BeforeFooter from "../../components/common/BeforeFooter";
export default function ServiceIntroduction() {
  const settingsCarousel =  {
    arrows: false,
    arrowsBlock: false,
    dots: true,
    adaptiveHeight: true
};
const itemData = [
  {
    img: imgDefault,
    title: 'Breakfast',
  },
  {
    img: imgDefault,
    title: 'Burger',
  },
  {
    img: imgDefault,
    title: 'Camera',
  },
  {
    img: imgDefault,
    title: 'Coffee',
  },

];
  return (
    <>
    <div className={'service-introduction'}>
      <div className="main-content">
        <div className='img-content'>
          <img src={imgDefault} alt="" className='imageBg'/>
          <div className="title-img">
          フォトウェディング
          </div>
        </div>
        <div className='img-content'>
          <img src={imgDefault} alt="" className='imageBg'/>
          <div className="title-img">
          日本旅行セットプラン
          </div>
        </div>
      </div>
      <div className='title'>
            <div className="title-content">
            フォトウェディング
            </div>
      </div>
      <div className={'carouselWrap'}>
            <Slider { ...settingsCarousel }>
                {[1,2,3,4,5,6,7].map((item, index) => (
                    <div className={'itemCarousel'} key={index}>
                        <img src={imgDefault} alt="" className={'imageBg'}/>
                        <div className={'titleCarousel'}>
                            <div className='titleCarousel-child'>スタジオ撮影</div>
                            <div>特徴の説明</div>
                            <div>hogehoge</div>
                            <div>hogehoge</div>
                        </div>

                    </div>
                ))}
            </Slider>
      </div>
      <div className="explain-details">
        <div className="title-explain">
            詳細の説明
        </div>
        <div className="content-explain">
        hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge
        </div>
        <div className="itemButton">
        <Button text={'プランを確認'} style={{fontWeight: "bold"}} />
      </div>
      </div>
      <div className={'carouselWrap'}>
            <Slider { ...settingsCarousel }>
                {[1,2,3,4,5,6,7].map((item, index) => (
                    <div className={'itemCarousel'} key={index}>
                        <img src={imgDefault} alt="" className={'imageBg'}/>
                        <div className={'titleCarousel'}>
                            <div className='titleCarousel-child'>ロケーション撮影（日本の風景）</div>
                            <div>特徴の説明</div>
                            <div>hogehoge</div>
                            <div>hogehoge</div>
                        </div>

                    </div>
                ))}
            </Slider>
      </div>
      <div className="explain-details">
        <div className="title-explain">
            詳細の説明
        </div>
        <div className="content-explain">
        hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge
        </div>
        <div className="itemButton">
        <Button text={'プランを確認'} style={{fontWeight: "bold"}} />
      </div>
      </div>
      <div className={'carouselWrap'}>
            <Slider { ...settingsCarousel }>
                {[1,2,3,4,5,6,7].map((item, index) => (
                    <div className={'itemCarousel'} key={index}>
                        <img src={imgDefault} alt="" className={'imageBg'}/>
                        <div className={'titleCarousel'}>
                            <div className='titleCarousel-child'>ロケーション撮影（アニメ）</div>
                            <div>特徴の説明</div>
                            <div>hogehoge</div>
                            <div>hogehoge</div>
                        </div>

                    </div>
                ))}
            </Slider>
      </div>
      <div className="explain-details">
        <div className="title-explain">
            詳細の説明
        </div>
        <div className="content-explain">
        hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge
        </div>
        <div className="itemButton">
        <Button text={'プランを確認'} style={{fontWeight: "bold"}} />
      </div>
      </div>
      <div className="border">
      </div>
      <div className={'carouselWrap'}>
            <Slider { ...settingsCarousel } className="slider">
                {[1,2,3,4,5,6,7].map((item, index) => (
                    <div className={'itemCarousel'} key={index}>
                        <ImageList className={'imageBg'} sx={{ width: 500, height: 450 }} cols={2} rowHeight={'auto'}>
                          {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                              <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                              />
                            </ImageListItem>
                          ))}
                        </ImageList>
                        <div className={'titleCarousel'}>
                            <div className='titleCarousel-child'>日本旅行セットプラン</div>
                            <div>特徴の説明</div>
                            <div>hogehoge</div>
                            <div>hogehoge</div>
                        </div>

                    </div>
                ))}
            </Slider>
      </div>
      <div className="explain-details">
        <div className="title-explain">
            詳細の説明
        </div>
        <div className="content-explain">
        hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge
        </div>
        <div className="itemButton">
        <Button text={'プランを確認'} style={{fontWeight: "bold"}} />
      </div>
      </div>
      <div className="border">
      </div>
    </div>
      <BeforeFooter />
    </>
  );
}

