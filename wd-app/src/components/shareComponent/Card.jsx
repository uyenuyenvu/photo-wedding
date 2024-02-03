import "../../assets/scss/Card.scss";
import Button from "../common/Button.jsx";
import { useTranslation } from "react-i18next";

export default function Card(props) {
  const { t } = useTranslation();
  return (
    <div className={"cardWrap"}>
      <div className="thumbnail">
          {(props.iscomingsoon? (
              <span>coming soon...</span>
          ) : (
              <img src={props.thumbnail} alt="" className={"imgThumbnail"} />

          ))}
      </div>
      <div className={"contentCard"}>
        <div className="titleCard">{t(`${props.title}`)}</div>
        <div className="descriptionCard">
          {props.description?.map((item) => {
            return <p className={"itemDes"}>{t(`${item}`)}</p>;
          })}
        </div>

        <div className="buttonCard">
          <a href={props.url}>
              <Button type={props.iscomingsoon ? 1 : 0} text={t(`${props.txtButton}`)} />
          </a>
        </div>
      </div>
    </div>
  );
}
