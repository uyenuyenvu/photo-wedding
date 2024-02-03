import "../../assets/scss/CardContact.scss";
import Button from "../common/Button.jsx";
import { useTranslation } from "react-i18next";

export default function CardContact(props) {
  const { t } = useTranslation();
  return (
    <div className={`cardWrapContact ${props.isHorizone ? "horizone" : ""}`}>
      <div className={"thumbnail"}>
        <img src={props.thumbnail} alt="" className={"imgThumbnail"} />
      </div>
      <div className={"content"}>
        <div className="button1">{t(`${props.txtButton1}`)}</div>
        <div className={"contentCard"}>
          <div className="descriptionCard">{t(`${props.description}`)}</div>
          <a href={props.url}>
            <div className="buttonCard">{t(`${props.txtButton}`)}</div>
          </a>
        </div>
      </div>
    </div>
  );
}
