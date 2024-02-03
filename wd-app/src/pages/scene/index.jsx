import "../../assets/scss/sceneStyle.scss";
import bgTitle from "../../assets/images/bg-title.svg";
import down from "../../assets/images/down.svg";
import scene1 from "../../assets/images/scene1.jpg";
import scene2 from "../../assets/images/scene2.jpg";
import scene3 from "../../assets/images/scene3.jpg";
import BeforeFooter from "../../components/common/BeforeFooter";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
//useEffect

export default function Scene() {
  const { t } = useTranslation();
  useEffect(() => {
    const hashtag = window.location.hash;
    if (hashtag) {
      const currentURL = window.location.href;
      const ele = currentURL.split("#")[1];
      console.log(ele);
      const element = document.getElementById(ele);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      // window.history.replaceState("", "Lunch", newURL)
    }
  });
  return (
    <>
      <div className="scene">
        <div className="title-page">
          <img src={bgTitle} alt="" />
          <div className="contentTitle">
            <div className="title">{t("scene.title")}</div>
            <div className="sub-title">{t("scene.subTitle")}</div>
          </div>
        </div>
        <div className="text-page">
          {t("scene.text1")}
          <br />
          {t("scene.text2")}
        </div>
        <div className="notion">
          <a href={"#studio"} className="item">
            {t("scene.studio")}
            <img src={down} alt="" />
          </a>
          <a href={"#location"} className="item">
            {t("scene.location")}
            <img src={down} alt="" />
          </a>
        </div>
        <div className="content" id="color-bg">
          <div className="title-content" id="studio">
            STUDIO
          </div>
          <div className="sub-title">クリックで拡大されます</div>
          <div className="list-content">
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
          </div>
        </div>
        <div className="content" id="location">
          <div className="title-content">LOCATION</div>
          <div className="sub-title">クリックで拡大されます</div>
          <div className="list-content">
            <div className="item">
              <div className="index">Scene 1</div>
              <div className="title-item">FLOWER WALL</div>
              <div className="sub-title">フラワーウォール</div>
              <img src={scene1} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 2</div>
              <div className="title-item">CHAPEL</div>
              <div className="sub-title">チャペル</div>
              <img src={scene2} alt="" />
            </div>
            <div className="item">
              <div className="index">Scene 3</div>
              <div className="title-item">BOUGAINVILLEA STREET</div>
              <div className="sub-title">ブーゲンビリア ストリート</div>
              <img src={scene3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <BeforeFooter />
    </>
  );
}
