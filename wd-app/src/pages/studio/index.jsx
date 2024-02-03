import "../../assets/scss/studio.scss";
import bgTitle from "../../assets/images/bg-title.svg";
import Slider from "infinite-react-carousel";
import top from "../../assets/images/top-bg.svg";
import bottom from "../../assets/images/bottom-bg.svg";
import hemTop from "../../assets/images/hem-top-retouch.svg";
import hemBottom from "../../assets/images/hem-bottom-retouch.svg";
import img1 from "../../assets/images/studio/img1.svg";
import img2 from "../../assets/images/studio/img2.svg";
import img3 from "../../assets/images/studio/img3.svg";
import img4 from "../../assets/images/top/img1.png";
import img5 from "../../assets/images/studio/img5.svg";
import img6 from "../../assets/images/studio/img6.svg";
// import imgSum from "../../assets/images/studio/imgSum.svg";
import picture from "../../assets/images/studio/icon/picture.svg";
import kimono from "../../assets/images/studio/icon/kimono.svg";
import king from "../../assets/images/studio/icon/king.svg";
import makeup from "../../assets/images/studio/icon/makeup.svg";
import camera from "../../assets/images/studio/icon/camera.svg";
import wedding from "../../assets/images/studio/icon/wedding.svg";
import albumConcept2 from "../../assets/images/album-concept-2.jpg";
import albumConcept3 from "../../assets/images/album-concept-3.jpg";
import albumConcept4 from "../../assets/images/album-concept-4.jpg";
import BeforeFooter from "../../components/common/BeforeFooter";
import { useTranslation } from "react-i18next";
export default function Studio() {
  const { t } = useTranslation();
  const settingsCarousel = {
    arrows: false,
    arrowsBlock: false,
    dots: true,
    adaptiveHeight: true,
  };
  return (
    <>
      <div className="studio">
        <div className="title-page">
          <img src={bgTitle} alt="" />
          <div className={"contentTitle"}>
            <div className="title">{t("studio.title")}</div>
            <div className="sub-title">{t("studio.subtitle")}</div>
          </div>
        </div>
        <div className="text-page">
          {t("studio.text1")}
          <br />
          {t("studio.text2")}
        </div>
        <div className="content bgE7">
          <div className="detail-content flex">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="describe">
              <img src={hemTop} className="top" alt="" />
              <div className="text">{t("studio.text3")}</div>
              <div className="text-main">{t("studio.text4")}</div>
              <img src={hemBottom} className="bottom" alt="" />
              <div className="button-price">
                <span className={"text1"}>158</span>
                <span className={"text2"}>,000</span>
                <span className={"text3"}>
                  円 &nbsp; ({t("studio.included")}173,800円)
                </span>
              </div>
              <div className="introduce pc">
                {t("studio.text5")}
                <br />
                {t("studio.text6")}
              </div>
            </div>
          </div>
          <div className="list-suggest">
            <div className="item-suggest">
              <img src={camera} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button1")}</div>
              </a>
              <span>{t("studio.textButton1")}</span>
            </div>
            <div className="item-suggest">
              <img src={kimono} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button2")}</div>
              </a>
              <span>{t("studio.textButton2")}</span>
            </div>
            <div className="item-suggest">
              <img src={king} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button3")}</div>
              </a>
            </div>
            <div className="item-suggest">
              <img src={makeup} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button4")}</div>
              </a>
            </div>
            <div className="item-suggest">
              <img src={picture} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button5")}</div>
              </a>
              <span>{t("studio.textButton5")}</span>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="detail-content flex">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="describe">
              <img src={hemTop} className="top" alt="" />
              <div className="text">{t("studio.text7")}</div>
              <div className="text-main">{t("studio.text8")}</div>
              <img src={hemBottom} className="bottom" alt="" />
              <div className="button-price">
                <span className={"text1"}>238</span>
                <span className={"text2"}>,000</span>
                <span className={"text3"}>
                  円 &nbsp; ({t("studio.included")}216,800円)
                </span>
              </div>
              <div className="introduce pc">
                {t("studio.text9")}
                <br />
                {t("studio.text10")}
              </div>
            </div>
          </div>
          <div className="list-suggest">
            <div className="item-suggest">
              <img src={camera} alt="" />
              <a href={"/"}>
                <div className="btn-suggest">{t("studio.button1")}</div>
              </a>
              <span>3シーン/約100カット</span>
            </div>
            <div className="item-suggest">
              <img src={wedding} alt="" />
              <a href={"/"}>
                <div className="btn-suggest">{t("studio.button2")}</div>
              </a>
              <span>ドレス1着_タキシード1着</span>
            </div>
            <div className="item-suggest">
              <img src={kimono} alt="" />
              <a href={"/"}>
                <div className="btn-suggest">{t("studio.button3")}</div>
              </a>
              <span>
                白無垢もしくは色打掛1着/ <br /> 紋付き袴1着
              </span>
            </div>
            <div className="item-suggest">
              <img src={king} alt="" />
              <a href={"/"}>
                <div className="btn-suggest">{t("studio.button4")}</div>
              </a>
            </div>
            <div className="item-suggest">
              <img src={makeup} alt="" />
              <a href={"/"}>
                <div className="btn-suggest">{t("studio.button5")}</div>
              </a>
            </div>
            <div className="item-suggest">
              <img src={picture} alt="" />
              <a href={"/"}>
                <div className="btn-suggest">全データ</div>
              </a>
              <span>100カット</span>
            </div>
          </div>
        </div>
        <div className="content bgE7">
          <div className="detail-content flex">
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="describe">
              <img src={hemTop} className="top" alt="" />
              <div className="text">
                和装と洋装ロケ地2か所で撮影を満喫したい!
              </div>
              <div className="text-main">洋装1着 + 和装1着 . ロケ2ヶ所</div>
              <img src={hemBottom} className="bottom" alt="" />
              <div className="button-price">
                <span className={"text1"}>288</span>
                <span className={"text2"}>,000</span>
                <span className={"text3"}>
                  円 &nbsp; ({t("studio.included")}316,800円)
                </span>
              </div>
              <div className="introduce pc">
                ※土日祝日料金は＋22,000円申し受けます。
                <br />
                ※ロケーション撮影地によって料金が異なります。
              </div>
            </div>
          </div>
          <div className="list-suggest">
            <div className="item-suggest">
              <img src={camera} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button1")}</div>
              </a>
              <span>3シーン/約100カット</span>
            </div>
            <div className="item-suggest">
              <img src={wedding} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button2")}</div>
              </a>
              <span>ドレス1着_タキシード1着</span>
            </div>
            <div className="item-suggest">
              <img src={kimono} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button3")}</div>
              </a>
              <span>
                白無垢もしくは色打掛1着/ <br /> 紋付き袴1着
              </span>
            </div>
            <div className="item-suggest">
              <img src={king} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button4")}</div>
              </a>
            </div>
            <div className="item-suggest">
              <img src={makeup} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">{t("studio.button5")}</div>
              </a>
            </div>
            <div className="item-suggest">
              <img src={picture} alt="" />
              <a href={"/"}>
                <div className="btn-suggest white">全データ</div>
              </a>
              <span>100カット</span>
            </div>
          </div>
        </div>
      </div>
      <BeforeFooter />
    </>
  );
}
