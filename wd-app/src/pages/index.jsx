import "./../assets/scss/homePageStyle.scss";
import Slider from "infinite-react-carousel";
import imgDefault from "./../assets/images/imageDefault.png";
import slide from "./../assets/images/top/img1.png";
import video from  './../assets/images/top/BLANZ_pv.mp4'
import card1 from "./../assets/images/top/img2.png";
import card2 from "./../assets/images/top/img3.png";
import img4 from "./../assets/images/top/img4.png";
import blanz from "./../assets/images/top/blanzlogodark.png";
import blanz1 from "./../assets/images/top/blanz1.png";
import blanz2 from "./../assets/images/top/blanz2.png";
import blanz3 from "./../assets/images/top/blanz3.png";
import blanz4 from "./../assets/images/top/blanz4.png";
import blanz5 from "./../assets/images/top/blanz5.png";
import blanz6 from "./../assets/images/top/blanz6.png";
import concep1 from './../assets/images/top/concept1.png'
import concep2 from './../assets/images/top/concept2.png'
import concep3 from './../assets/images/top/concept3.png'
import iconMenu from "./../assets/images/iconGamail.png";
import mask1 from "./../assets/images/top/mask1.svg";
import mask2 from "./../assets/images/top/mask2.svg";
import mask3 from "./../assets/images/top/mask3.svg";
import mask4 from "./../assets/images/top/mask4.svg";
import card3 from "./../assets/images/top/card1.png";
import card4 from "./../assets/images/top/card2.png";
import card5 from "./../assets/images/top/card3.png";
import review1 from "./../assets/images/top/review1.png";
import review2 from "./../assets/images/top/review2.png";
import review3 from "./../assets/images/top/review3.png";
import { useTranslation } from "react-i18next";
import Card from "../components/shareComponent/Card.jsx";
import CardContact from "../components/shareComponent/CardContact";
export default function Home(props) {
  const { i18n, t } = useTranslation();
  const settingsCarousel = {
    arrows: false,
    arrowsBlock: false,
    dots: false,
    adaptiveHeight: true,
  };
  const settingsCarousel2 = {
    arrows: false,
    arrowsBlock: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 3,
    centerPadding: 50,
  };
  return (
    <div className={"homePageWrap"}>
      <div className={"carouselWrap"}>
        {/*<Slider {...settingsCarousel}>*/}
        {/*  {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (*/}
        {/*    <div className={"itemCarousel"} key={index}>*/}
        {/*      <img src={slide} alt="" className={"imageBg"} />*/}
        {/*      /!*<div className={'titleCarousel'}>*!/*/}
        {/*      /!*    もっと、特別になる。ウェディング。*!/*/}
        {/*      /!*</div>*!/*/}
        {/*    </div>*/}
        {/*  ))}*/}
        {/*</Slider>*/}
        <video muted autoPlay={true} loop={true} controls={true}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className={"descriptionWrap"}>
        <img src={mask1} alt="" />
        <div className={"des1"}>まるで映画のワンシーンのような 特別な空間</div>
        <div className={"des2"}>『日本の文化に浸る』</div>
        <div className="des2_sub">フォトウェディングスタジオ</div>
        <img src={mask2} alt="" />
        <div className={"des3"}>
          <img src={blanz} alt="" />
        </div>
        <div className="des4">
          <img src={mask3} alt="" className={"mask3"} />
          <img src={mask4} alt="" className={"mask4"} />
          「自分史上、最高にキレイ！」を残す
          <br />
          ドラマチックな撮影体験
        </div>
        <div className="des5">
          <div className="title">CONCEPT</div>
          <div className="user">-コンセプト-</div>
          <div className="poem">
            この文はダミーですこの文はダミーです <br />
            この文はダミーです <br />
            この文はダミーですこの文はダミーです <br />
            この文はダミーです <br />
          </div>
        </div>
      </div>
      <div className={"carouselWrap2"}>
        <div className="carouselThin">
          <Slider {...settingsCarousel2}>
            {[concep1, concep2, concep3,concep1, concep2, concep3].map((item, index) => (
              <div className={"itemCarousel"} key={index}>
                <img src={item} alt="" className={"imageBg"} />
                {/*<div className={'titleCarousel'}>*/}
                {/*    もっと、特別になる。ウェディング。*/}
                {/*</div>*/}
              </div>
            ))}
          </Slider>
        </div>
        <a href="/concept" className="buttonAfterCarousel">
          {t("home.onDetails")}
        </a>
      </div>
      <div className="special">
        <div className="title">{t("home.title")}</div>
        <div className="user">{t("home.subTitle")}</div>
        <img src={img4} alt="" />
        <a href={"/plans"}>
          <div className="buttonAfterCarousel">{t("home.onCampaignList")}</div>
        </a>
      </div>
      <div className={"planeWrap"}>
        <div className="title">{t("home.planeWrapTitle")}</div>
        <div className="user" style={{ color: "##9a845b" }}>
          {t("home.planeWrapSubTitle")}
        </div>
        <div className={"cards"}>
          <div className={"itemCard"}>
            <Card
              thumbnail={card1}
              title={"home.titleCard1"}
              url={"/scene#location"}
              description={["home.descriptionCard1"]}
              txtButton={"home.textbtn1"}
            ></Card>
          </div>
          <div className={"itemCard"}>
            <Card
              thumbnail={card2}
              url={"/scene#studio"}
              title={"home.titleCard2"}
              description={["home.descriptionCard21", "home.descriptionCard22"]}
              txtButton={"home.textbtn2"}
            ></Card>
          </div>
          <div className={"itemCard"}>
            <Card
              thumbnail={imgDefault}
              title={"home.titleCard3"}
              description={["home.descriptionCard3"]}
              txtButton={"coming soon..."}
              iscomingsoon={true}
            ></Card>
          </div>
        </div>
      </div>
      <div className="blanzWrap">
        <div className="title">{t("home.blanzWrapTitle")}</div>
        <div className="user">{t("home.blanzWrapSubTitle")}</div>
        <div className="content">
          <img src={blanz1} className={"width50"} alt="" />
          <img src={blanz2} className={"width29"} alt="" />
          <img src={blanz3} className={"width21"} alt="" />
          <img src={blanz4} className={"width22"} alt="" />
          <img src={blanz5} className={"width38"} alt="" />
          <img src={blanz6} className={"width40"} alt="" />
        </div>
        <a href="/scene" className="buttonAfterCarousel">
          もっと写真を見る
        </a>
      </div>
      <div className="conceptWrap">
        <div className="title">{t("home.titleConcept")}</div>
        <div className="user">{t("home.subTitleConcept")}</div>
        <div className="user_2">{t("home.subTitleConcept2")}</div>
        <div className="movie">
          <iframe
              src="https://www.youtube.com/embed/z8U-UHilOsI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          ></iframe>
        </div>
        <div className="buttonAfterCarousel">
          {t("home.buttonAfterCarousel")}
        </div>
      </div>
      <div className="aboutWrap">
        <div className="title">{t("home.about")}</div>
        <div className="user">{t("home.subAbout")}</div>
        <div className="cardsContact">
          <div className="itemCardContact">
            <CardContact
              thumbnail={card3}
              txtButton1={"home.txtButtonCardContact1"}
              description={"home.descriptionCardContact1"}
              txtButton={"home.txtButtonCardContact"}
              isHorizone={true}
              url={"/produce-crew"}
            ></CardContact>
          </div>
          <div className="itemCardContact">
            <CardContact
              thumbnail={card4}
              txtButton1={"home.txtButtonCardContact2"}
              description={"home.descriptionCardContact2"}
              txtButton={"home.txtButtonCardContact"}
              url={"/dress"}
              isHorizone={true}
            ></CardContact>
          </div>
          <div className="itemCardContact">
            <CardContact
              thumbnail={card5}
              txtButton1={"home.txtButtonCardContact3"}
              description={"home.descriptionCardContact3"}
              txtButton={"home.txtButtonCardContact"}
              isHorizone={true}
            ></CardContact>
          </div>
        </div>
      </div>
      <div className="conceptWrap">
        <div className="title">{t("home.review")}</div>
        <div className="user">{t("home.subReview")}</div>
        <div className="user_2">{t("home.subReview2")}</div>
        <div className="review">
          <div className="itemReview">
            <img src={review1} />
            <div className="txt">{t("home.textReview1")}</div>
          </div>
          <div className="itemReview">
            <img src={review2} />
            <div className="txt">{t("home.textReview2")}</div>
          </div>
          <div className="itemReview">
            <img src={review3} />
            <div className="txt">{t("home.textReview3")}</div>
          </div>
        </div>
        <a href={"/report"}>
          <div className="buttonAfterCarousel"> {t("home.btnReview")} </div>
        </a>
      </div>
      <div className="accessWrap">
        <div className="title">{t("home.access")}</div>
        <div className="user">{t("home.subAccess")}</div>
        <div className="user_2" style={{ color: "black" }}>
          {t("home.subAccess2")}
        </div>
        <div className="user_2">{t("home.textAccess")}</div>
        <div className="map">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d820.3372624325475!2d135.496087!3d34.671139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e70fcf0ff00d%3A0xa071587cf6d00c36!2z5pel5pys44CB44CSNTUwLTAwMTUg5aSn6Ziq5bqc5aSn6Ziq5biC6KW_5Yy65Y2X5aCA5rGf77yR5LiB55uu77yZ4oiS77yRIEdFTkRBSSBPUkFOR0UgQkxE!5e0!3m2!1sja!2s!4v1706865918452!5m2!1sja!2s"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="buttonAfterCarousel"> {t("home.btnReview")} </div>
      </div>
    </div>
  );
}
