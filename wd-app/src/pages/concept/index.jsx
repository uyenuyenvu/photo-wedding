import "../../assets/scss/conceptStyle.scss";
import bgTitle from "../../assets/images/bg-title.svg";
import Slider from "infinite-react-carousel";
import "../../assets/scss/homePageStyle.scss";
import top from "../../assets/images/top-bg.svg";
import bottom from "../../assets/images/bottom-bg.svg";
import hemTop from "../../assets/images/hem-top-retouch.svg";
import hemBottom from "../../assets/images/hem-bottom-retouch.svg";
import albumConcept from "../../assets/images/album-concept-1.jpg";
import albumConcept2 from "../../assets/images/album-concept-2.jpg";
import albumConcept3 from "../../assets/images/album-concept-3.jpg";
import albumConcept4 from "../../assets/images/album-concept-4.jpg";
import BeforeFooter from "../../components/common/BeforeFooter";
export default function Concept() {
  const settingsCarousel = {
    arrows: false,
    arrowsBlock: false,
    dots: true,
    adaptiveHeight: true,
  };
  return (
    <>
    <div className="concept">
      <div className="title-page">
        <img src={bgTitle} alt="" />
        <div className={'contentTitle'}>
          <div className="title">CONCEPT</div>
          <div className="sub-title">-コンセプト-</div>
        </div>
      </div>
      <div className="text-page">
        ウェディング演出・空間プロデュースの名団体が手掛けるこだわりのフォトウェディング
        <br />
        特別な節目に、最高の撮影体験で美しく豊かな人生の始まりを。
      </div>
      <div className="describe-page">
        <img src={top} alt="" />
        <div className="text-describe">
          オープニングキャンペーン　特賞のお客様
        </div>
        <img src={bottom} alt="" />
      </div>
      <div className="content">
        <div className="detail-content flex">
          <div className="img">
            <div className={"carouselWrap"}>
              <Slider {...settingsCarousel}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className={"itemCarousel"} key={index}>
                    <img src={albumConcept} alt="" className={"imageBg"} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="describe">
            <img src={hemTop} className="top" alt="" />
            <div className="text">関西最大級のシーン数のスタジオ</div>
            <img src={hemBottom} className="bottom" alt="" />
            <div className="introduce">
              関西最大級のフォトウェディングスタジオを保有するBLANZでは、ラグジュアリーな空間からシャビーシックな空間まで多彩なシーンを取り揃え、幸せのフォトトラベルを体験いただけます。
            </div>
          </div>
        </div>
        <div className="detail-content flex">
          <div className="describe">
            <img src={hemTop} className="top" alt="" />
            <div className="text">関西最大級のシーン数のスタジオ</div>
            <img src={hemBottom} className="bottom" alt="" />
            <div className="introduce">
              関西最大級のフォトウェディングスタジオを保有するBLANZでは、ラグジュアリーな空間からシャビーシックな空間まで多彩なシーンを取り揃え、幸せのフォトトラベルを体験いただけます。
            </div>
          </div>
          <div className="img">
            <div className={"carouselWrap"}>
              <Slider {...settingsCarousel}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className={"itemCarousel"} key={index}>
                    <img src={albumConcept} alt="" className={"imageBg"} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="detail-content flex">
          <div className="img">
            <div className={"carouselWrap"}>
              <Slider {...settingsCarousel}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className={"itemCarousel"} key={index}>
                    <img src={albumConcept2} alt="" className={"imageBg"} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="describe">
            <img src={hemTop} className="top" alt="" />
            <div className="text">関西最大級のシーン数のスタジオ</div>
            <img src={hemBottom} className="bottom" alt="" />
            <div className="introduce">
              関西最大級のフォトウェディングスタジオを保有するBLANZでは、ラグジュアリーな空間からシャビーシックな空間まで多彩なシーンを取り揃え、幸せのフォトトラベルを体験いただけます。
            </div>
          </div>
        </div>
      </div>
      <div className="describe-page">
        <img src={top} alt="" />
        <div className="text-describe">
          何年もよみがえる
          <br />
          楽しい記憶を刻む
          <br />
          -<br />
          一生大切にしたい
          <br />
          思い出を形に残します
          <br />
        </div>
        <img src={bottom} alt="" />
      </div>
      <div className="content">
        <div className="detail-content flex">
          <div className="describe">
            <img src={hemTop} className="top" alt="" />
            <div className="text">花嫁の憧れを叶える衣装</div>
            <img src={hemBottom} className="bottom" alt="" />
            <div className="introduce">
              流行に敏感な花嫁の憧れの世界観を叶えるため、最先端のブランドドレスから定番の華やかなドレスまでこだわり衣装を豊富にご用意しております。
              <br />
              おふたりにぴったりの最高のスタイリングをご提案いたします。
            </div>
          </div>
          <div className="img">
            <div className={"carouselWrap"}>
              <Slider {...settingsCarousel}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className={"itemCarousel"} key={index}>
                    <img src={albumConcept3} alt="" className={"imageBg"} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="detail-content flex">
          <div className="img">
            <div className={"carouselWrap"}>
              <Slider {...settingsCarousel}>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div className={"itemCarousel"} key={index}>
                    <img src={albumConcept4} alt="" className={"imageBg"} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="describe">
            <img src={hemTop} className="top" alt="" />
            <div className="text">
              ハイクオリティの
              <br />
              ビューティーレタッチ
            </div>
            <img src={hemBottom} className="bottom" alt="" />
            <div className="introduce">
              BLANZのレタッチは写真を1枚の作品として美しさや質感にこだわって仕上げます。
              <br />
              写真補正のプロがおふたりの魅力を引き出し、何度でも見返したくなる美しい一枚一枚に仕上げます。
            </div>
          </div>
        </div>
      </div>
      <div className="move">
        <iframe
          className="move"
          src="https://www.youtube.com/embed/tI_jv1KSy3U?si=06jc34KOMVfMv-gj&amp;start=690"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  <BeforeFooter />
</>
  );
}
