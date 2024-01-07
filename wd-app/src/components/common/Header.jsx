import '../../assets/scss/headerStyle.scss'
import cn from './../../assets/images/cn.png'
import us from './../../assets/images/us.jpeg'
import jp from './../../assets/images/jp.jpeg'
import menu from './../../assets/images/iconMenu.png'
import {useState} from "react";

export default function Header(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return <div className={'headerWrap'}>
      <div className={'companyLogo'}>
        Company logo
      </div>
    <div className={'headerRight'}>
      <div className={isOpenMenu ? 'listMenu not_active' : 'listMenu active'}>
        <img src={us} alt=""/>
        <img src={cn} alt=""/>
        <img src={jp} alt=""/>
        <img src={menu} onClick={()=>setIsOpenMenu(true)} alt=""/>
      </div>
      <div className={!isOpenMenu ? 'listMenu not_active' : 'listMenu active'}>
        <div className={'itemMenu'}>
          <a href="/">TOP</a>
        </div>
        <div className={'itemMenu'}>
          <a href="/">サービス紹介</a>
        </div>
        <div className={'itemMenu'}>
          <a href="/">プラン</a>
        </div>
        <div className={'itemMenu'}>
          <a href="/">お問い合わせ</a>
        </div>
      </div>
    </div>

  </div>;
}
