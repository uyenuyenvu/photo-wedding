import './../assets/scss/homePageStyle.scss'
// import Slider from 'infinite-react-carousel';
import imgDefault from './../assets/images/imageDefault.png'
import blanz from './../assets/images/blanz.png'
import campaign from './../assets/images/campaign.png'
import photoPlan from './../assets/images/photoPlan.png'
import iconMenu from './../assets/images/iconGamail.png'
// import Button from "../components/common/Button.jsx";
import Card from "../components/shareComponent/Card.jsx";
export default function Home(props) {
    // const settingsCarousel =  {
    //     arrows: false,
    //     arrowsBlock: false,
    //     dots: true,
    //     adaptiveHeight: true
    // };
    return <div className={'homePageWrap'}>
        {/*<div className={'carouselWrap'}>*/}
        {/*    <Slider { ...settingsCarousel }>*/}
        {/*        {[1,2,3,4,5,6,7].map((item, index) => (*/}
        {/*            <div className={'itemCarousel'} key={index}>*/}
        {/*                <img src={imgDefault} alt="" className={'imageBg'}/>*/}
        {/*                <div className={'titleCarousel'}>*/}
        {/*                    もっと、特別になる。ウェディング。*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        ))}*/}
        {/*    </Slider>*/}
        {/*</div>*/}
        <div className={'videoBannerWrap'}>
            <iframe src="https://www.youtube.com/embed/PEIgbYXgKQk"
                    title="OUR OFFICIAL WEDDING VIDEO!  | PUGLIA 2023" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>

        <div className={'descriptionWrap'}>
            <div className={'des1'}>
                まるで映画のワンシーンのような
                <br/>
                特別な空間
            </div>
            <div className={'des2'}>
                『日本の文化に浸る』<br/>
                フォトウェディングスタジオ
            </div>
            <div className={'des3'}>
                <img src={blanz} alt=""/>
            </div>
            <div className={'des1'}>
                まるで映画のワンシーンのような
                <br/>
                特別な空間
            </div>
            <div className={'des3'}>
                <img src={campaign} alt=""/>
            </div>

        </div>

        <div className={'introduceWrap'}>
            <img src={imgDefault} alt="" className={'imageBg'}/>
            {/*<div className={'introduceContent'}>*/}
            {/*    <div className={'titleIntroduce'}>*/}
            {/*        サービス紹介*/}
            {/*    </div>*/}
            {/*    <Button text={'詳しく見る'} style={{fontWeight: "bold"}}/>*/}
            {/*</div>*/}
        </div>
        <div className={'introduceWrap'}>
            <img src={imgDefault} alt="" className={'imageBg'} style={{opacity: '0'}}/>
        </div>
        <div className={'planeWrap'}>
            <div className={'title'}>
                <img src={photoPlan} alt=""/>
            </div>
            <div className={'cards'}>
                <div className={'itemCard'}>
                    <Card
                        thumbnail={imgDefault}
                        title={'スタジオ撮影'}
                        description={
                        ['日本最大級のフォトウェディング',
                            ' 専用スタジオでの撮影']
                    }
                        txtButton={'プラン詳細を見る'}
                    ></Card>
                </div>
                <div className={'itemCard'}>
                    <Card
                        thumbnail={imgDefault}
                        title={'ロケーション撮影'}
                        description={['お二人のお気に入りの場所へ出向いて撮影']}
                        txtButton={'プラン詳細を見る'}
                    ></Card>
                </div>
                <div className={'itemCard'}>
                    <Card
                        thumbnail={imgDefault}
                        title={'コンセプト撮影'}
                        description={['日本アニメの聖地に出向いて撮影']}
                        txtButton={'プラン詳細を見る'}
                    ></Card>
                </div>
            </div>
        </div>
        <div className={'contactWrap'}>
            <div className={'itemContact'}>
                <div className="title">
                    フォームからのご予約
                </div>
                <div className={'icon'}>
                    <img src={iconMenu} />
                </div>
                <div className={'directionWrap'}>
                    <div className={'directionItem'}>
                        フォームはこちら
                    </div>
                </div>
            </div>
            <div className={'itemContact'}>
                <div className="title">
                    サービスに関する ご質問
                </div>
                <div className={'icon'}>
                    <img src={iconMenu} alt="" className={'imageBg'} style={{opacity: '0'}}/>
                </div>
                <div className={'directionWrap'}>
                    <div className={'directionItem'}>
                        ご質問はこちら→
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
