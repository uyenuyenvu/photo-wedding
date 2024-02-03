import "../../assets/scss/reportStyle.scss";
import bgTitle from "../../assets/images/bg-title.svg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import BeforeFooter from "../../components/common/BeforeFooter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function PlanList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  return (
    <>
      <div className={"customer-report"}>
        <div className="title-page">
          <img src={bgTitle} alt="" />
          <div className="contentTitle">
            <div className="title">{t("planList.title")}</div>
            <div className="sub-title">{t("planList.subtitle")}</div>
          </div>
        </div>
        <div className="list-event">
          <div className="item">
            <img src={img1} alt="" />
            <div className="content">
              <div className="content-item">
                【公式HP予約限定★ご来店は撮影日のみ】 スマートニ
              </div>
              <div className="read-more">
                撮影対象期間: お申し込みから1ヶ月以内で撮影可能 な方
              </div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="content">
              <div className="content-item">
                【公式HP予約限定★ご来店は撮影日のみ】 スマートニ
              </div>
              <div className="read-more">
                撮影対象期間: お申し込みから1ヶ月以内で撮影可能 な方
              </div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="content">
              <div className="content-item">
                【公式HP予約限定★ご来店は撮影日のみ】 スマートニ
              </div>
              <div className="read-more">
                撮影対象期間: お申し込みから1ヶ月以内で撮影可能 な方
              </div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="content">
              <div className="content-item">
                【公式HP予約限定★ご来店は撮影日のみ】 スマートニ
              </div>
              <div className="read-more">
                撮影対象期間: お申し込みから1ヶ月以内で撮影可能 な方
              </div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="content">
              <div className="content-item">
                【公式HP予約限定★ご来店は撮影日のみ】 スマートニ
              </div>
              <div className="read-more">
                撮影対象期間: お申し込みから1ヶ月以内で撮影可能 な方
              </div>
            </div>
          </div>
          <div className="item">
            <img src={img1} alt="" />
            <div className="content">
              <div className="content-item">
                【公式HP予約限定★ご来店は撮影日のみ】 スマートニ
              </div>
              <div className="read-more">
                撮影対象期間: お申し込みから1ヶ月以内で撮影可能 な方
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          {[1, 2, 3, 4].map((page, i) => {
            return (
              <div
                key={i}
                onClick={() => setCurrentPage(page)}
                className={`index ${page === currentPage ? "select" : ""}`}
              >
                {page}
              </div>
            );
          })}
          <div className="index">{`>>`}</div>
        </div>
      </div>
      <BeforeFooter />
    </>
  );
}
