import '../../assets/scss/headerStyle.scss'
import menu from './../../assets/images/icon_menu.svg'
import logo from './../../assets/images/logo.svg'
import close from './../../assets/images/close.svg'
import email from './../../assets/images/menu_email.svg'
import chat from './../../assets/images/menu_chat.svg'
import insta from './../../assets/images/menu_insta.svg'
import youtube from './../../assets/images/menu_yt.svg'
import tiktok from './../../assets/images/menu_tt.svg'
import ChatBtn from './../../assets/images/chat.svg'
import closeChat from './../../assets/images/closeChat.svg'
import leftChat from './../../assets/images/leftChatAdmin.svg'
import rightChat from './../../assets/images/rightChatUser.svg'
import arrOption from './../../assets/images/arrOptionChat.svg'
import Button from "../common/Button.jsx";
import { useTranslation } from "react-i18next";
import {useState} from "react";
import { LANGUAGES } from "../../constants";
import phone from "../../assets/images/menu_phone.png";
import menu_ from "../../assets/images/menu_.png";
export const DATA_CHAT = [
  {
    id: 1,
    path: 1,
    click: true,
    content: 'ご予約について'
  },
  {
    id: 2,
    click: true,
    path: 1,
    content: '撮影プランについて'
  },
  {
    id: 3,
    click: true,
    path: 1,
    content: '料金プランについて'
  },
  {
    id: 4,
    click: true,
    path: 1,
    content: ' 衣装・撮影時の持ち物について'
  },
  {
    id: 5,
    click: true,
    path: 1,
    content: '写真・アルバムについて'
  },
  {
    id: 6,
    click: true,
    path: 1,
    content: 'カメラマン・ヘアメイクについて'
  },
  {
    id: 7,
    click: true,
    path: 1,
    content: 'BLANZについて'
  },
  {
    id: 8,
    click: true,
    path: 2,
    parent_id: 1,
    content: 'ご予約方法について'
  },
  {
    id: 9,
    click: true,
    path: 2,
    parent_id: 1,
    content: 'ご予約開始日について'
  },
  {
    id: 10,
    click: true,
    path: 2,
    parent_id: 1,
    content: 'ご予約期限について'
  },
  {
    id: 11,
    click: true,
    path: 2,
    parent_id: 1,
    content: '事前打ち合わせのご予約について'
  },
  {
    id: 12,
    click: true,
    path: 2,
    parent_id: 1,
    content: '撮影予約日の変更について'
  },
  {
    id: 13,
    click: true,
    path: 2,
    parent_id: 1,
    content: 'ご予約のキャンセル料について'
  },
  {
    id: 14,
    click: true,
    path: 2,
    parent_id: 1,
    content: 'はじめに戻る'
  },
  {
    id: 15,
    click: false,
    path: 3,
    parent_id: 8,
    content: '以下の順番でご希望をお聞かせください。<br>' +
      '❶ご希望の撮影日時（期間）をお選びください。<br>' +
      '❷撮影プランをお選びください。（撮影プランの変更は14日前まで相談可能です）<br>' +
      '❸撮影場所をお選びください。（ロケーション撮影が可能な候補地を別途お知らせします。）<br>' +
      '➍お申し込み前金33,000円を事前クレジット決済ください。決済完了のお知らせメールにてお申し込み完了となります。<br>' +
      '❺撮影お申し込み完了後、申し込み内容確認ページでご確認いただけます。確認できない場合にはお手数ですが所定フォームよりお問い合わせください。<br>' +
      '注）撮影日時の空き状況確認カレンダーは30スタジオシーンでの空き状況をご確認いただけます。ロケーション撮影は希望地での空き状況確認後に可能な候補地をお知らせいたします。<br>' +
      '※ ページ遷移あり(→撮影プランページ)'
  },
  {
    id: 16,
    click: false,
    path: 3,
    parent_id: 9,
    content: 'スタジオや撮影ロケ地に空きがあれば直前でのご案内も可能です。<br>' +
      '桜・新緑や秋のシーズンの予約は混み合うため、２〜３ヶ月前までのご予約をお勧めしております。<br>' +
      '予約可能日のご確認はこちらのページをご確認ください。<br>' +
      '※ ページ遷移あり(→RESERVA予約フォーム)'
  },
  {
    id: 17,
    click: false,
    path: 3,
    parent_id: 10,
    content: '期限は特段ございませんが1週間前後でのご希望の場合には、撮影空き状況カレンダーにてお申し込み後、最終相互確認をさせていただきお申し込み完了させていただく場合があります。 <br>' +
      'お申し込みは先着順となります。季節や場所によっては3か月間から完売いたしますのでお早めのご予約をお薦めいたします。 <br>' +
      'ご不明点等はお気軽に下記お問い合わせフォームよりご連絡ください。 <br>' +
      '※ ページ遷移あり(→メールフォーム)'
  },
  {
    id: 18,
    click: false,
    path: 3,
    parent_id: 11,
    content: '撮影する前に事前に来館見学予約（打ち合わせ）をご希望の場合は、こちらの【見学予約フォーム】よりご予約ください。 <br>' +
      'ご相談打ち合わせには、オンライン（ZOOM・GoogleMEET・We chat他）も可能です。お問い合わせフォームよりお気軽にご連絡ください。 <br>' +
      '※ ページ遷移あり(→メールフォーム)'
  },
  {
    id: 19,
    click: false,
    path: 3,
    parent_id: 12,
    content: '★撮影日を含む31日前までは無料で延期（日程変更）が可能です。 <br>' +
    '延期（日程変更）の場合には、31日前までは無料で変更可能です。30日前より一律33,000円の変更手数料を申し受けます。順延される日時をご決定いただけない場合はキャンセル取扱いとなります。キャンセル料金が発生いたしますので予めご了承ください。 <br>' +
    'ロケーション撮影では、雨天予報その他天災等のやむを得ない事情がある場合には、前日の19時時点での判断をさせていただきます。 <br>' +
    '天気予報が雨天で降水確率80%以上、降水量200㎜の場合、撮影日時の変更を無料で承ります。雨天以外でのお客様都合による変更は上記変更料金（一律33,000円）を申し受けます。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　 <br>' +
    '撮影可能枠は数に限りがあります。お早めのお申し込みをオススメします。 <br>' +
    '※ ページ遷移あり(→RESERVA予約フォーム)'
},
{
  id: 20,
    click: false,
  path: 3,
  parent_id: 13,
  content: '★撮影お申し込みキャンセルの場合には、撮影日を含む31日前まで無料。30日～10日前では30%、9日前～１日前では50%、当日100%のキャンセル料を申し受けます。 <br>' +
  '撮影可能枠は数に限りがございます。お早めのお申し込みをオススメします。 <br>' +
  '予約可能日のご確認はこちらのページをご確認ください。 <br>' +
  '※ ページ遷移あり(→RESERVA予約フォーム)'
},
{
  id: 21,
    click: false,
  path: 3,
  parent_id: 14,
  content: 'はじめに戻る <br>' +
  '※ ページ遷移あり(→チャットボット1階層選択肢表示)'
  },
  {
    id: 22,
    click: true,
    path: 2,
    parent_id: 2,
    content: 'スタジオ撮影について'
  },
  {
    id: 23,
    click: true,
    path: 2,
    parent_id: 2,
    content: 'ロケーション撮影について'
  },
  {
    id: 24,
    click: true,
    path: 2,
    parent_id: 2,
    content: 'コンセプト撮影について'
  },
  {
    id: 25,
    click: true,
    path: 2,
    parent_id: 2,
    content: 'はじめに戻る'
  },
  {
    id: 26,
    click: true,
    path: 3,
    parent_id: 22,
    content: '撮影セットについて'
  },
  {
    id: 27,
    click: true,
    path: 3,
    parent_id: 22,
    content: '衣装レンタルについて'
  },
  {
    id: 28,
    click: true,
    path: 3,
    parent_id: 22,
    content: '所要時間について'
  },
  {
    id: 29,
    click: true,
    path: 3,
    parent_id: 22,
    content: 'はじめに戻る'
  },
  {
    id: 30,
    click: true,
    path: 3,
    parent_id: 23,
    content: '撮影ロケ地について'
  },
  {
    id: 31,
    click: true,
    path: 3,
    parent_id: 23,
    content: '衣装レンタルについて'
  },
  {
    id: 32,
    click: true,
    path: 3,
    parent_id: 23,
    content: '所要時間について'
  },
  {
    id: 33,
    click: true,
    path: 3,
    parent_id: 23,
    content: '雨天の場合について'
  },
  {
    id: 34,
    click: true,
    path: 3,
    parent_id: 23,
    content: 'はじめに戻る'
  },
  {
    id: 35,
    click: true,
    path: 3,
    parent_id: 24,
    content: 'はじめに戻る'
  },
  {
    id: 36,
    click: true,
    path: 3,
    parent_id: 24,
    content: '撮影ロケ地について'
  },
  {
    id: 37,
    click: true,
    path: 3,
    parent_id: 24,
    content: '衣装レンタルについて'
  },
  {
    id: 38,
    click: true,
    path: 3,
    parent_id: 24,
    content: '所要時間について'
  },
  {
    id: 39,
    click: true,
    path: 3,
    parent_id: 24,
    content: '雨天の場合について'
  },
  {
    id: 40,
    click: true,
    path: 3,
    parent_id: 24,
    content: 'はじめに戻る'
  },
  {
    id: 41,
    click: false,
    path: 4,
    parent_id: 26,
    content: 'スタジオ内の撮影セットに関してはこちらのページをご確認ください。<br>'+
      '※ ページ遷移あり(→スタジオセット掲載ページ)'
  },
  {
    id: 42,
    click: false,
    path: 4,
    parent_id: 27,
    content: '和装、ウェディングドレス、タキシード、コスチュームなど、様々なスタイルからお選びいただけます。<br>'+
    '世界的ドレスデザイナーYUMI KATURA PREMIUM DRESS PLAN をはじめ各種ブランドドレス等さまざまご用意しております。<br>'+
    '詳しくはこちらのページをご確認ください。<br>'+
    '※ ページ遷移あり(→撮影プランページ)'
  }
  ,
  {
    id: 43,
    click: false,
    path: 4,
    parent_id: 28,
    content: 'ヘアメイクなどお支度を含めて3時間～となります。撮影プランによって所要時間は異なります。<br>' +
      'ご予約可能日のご確認はこちらのページをご確認ください。<br>' +
      '本撮影プランは大変人気のプランのため、お早めのご予約をオススメします。<br>' +
      '予約可能日のご確認はこちらのページをご確認ください。<br>' +
      '※ ページ遷移あり(→RESELVA予約フォーム)'
  },
  {
    id: 44,
    click: false,
    path: 4,
    parent_id: 29,
    content: 'はじめに戻る<br>' +
      '※ ページ遷移あり(→チャットボット1階層選択肢表示)'
  },
  {
    id: 45,
    click: false,
    path: 4,
    parent_id: 30,
    content: '基本的にはHP上に掲載してある場所となりますが、お客様のご希望の場所で撮影許可の下りる場所でしたら出張可能な場合もあります。<br>' +
          '尚、場所によって基本料金や使用料は異なります。ご相談ください。<br>' +
        'ロケーション撮影イメージはこちらのページをご確認ください。<br>' +
        '※ ページ遷移あり(→ロケ地掲載ページ)'
    },
  {
    id: 46,
    click: false,
    path: 4,
    parent_id: 31,
    content: 'レンタル可能な衣装に関してはこちらのページをご確認ください。<br>' +
      '※ ページ遷移あり(→衣装ページ)'
  },
  {
    id: 47,
    click: false,
    path: 4,
    parent_id: 32,
    content: 'ヘアメイクなどの支度も含めて3時間以上となります。<br>' +
      '尚、プランによって所要時間は異なります。<br>' +
      'ご予約可能日のご確認はこちらのページをご確認ください。'
  },
    {
      id: 48,
        click: false,
      path: 4,
      parent_id: 33,
      content: '基本的に雨天でも撮影は可能です。<br>' +
        '雨天を避けたい場合は、前日までに天気予報をチェックし、ご連絡頂きますと日程変更等の対応をいたします。<br>' +
          '★撮影日を含む31日前までは無料で延期（日程変更）が可能です。<br>' +
          '延期（日程変更）の場合は、延期日時がご決定の場合は、理由やプラン内容に関わらず30日前～一律33,000円を申し受けます。<br>' +
          'ロケーション撮影では、雨天予報その他天災等のやむを得ない事情がある場合には、前日の19時時点での判断をさせていただきます。<br>' +
          '天気予報が雨天で降水確率80%以上、降水量200㎜の場合、撮影日時の変更を無料で承ります。雨天以外でのお客様都合による変更は上記変更料金（一律33,000円）を申し受けます。<br>' +　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
          '撮影可能枠は数に限りがあります。お早めのお申し込みをオススメします。<br>' +
          '※ ページ遷移あり(→RESERVA予約フォーム)'
          },
  {
    id: 49,
    click: false,
    path: 4,
    parent_id: 34,
    content: 'はじめに戻る<br>' +
      '※ ページ遷移あり(→チャットボット1階層選択肢表示)'
  },
  {
    id: 50,
    click: false,
    path: 4,
    parent_id: 35,
    content: '基本的にはHP上に掲載してある場所となりますが、お客様のご希望の場所で撮影許可の下りる場所でしたら出張可能な場合もあります。場所によって基本料金や使用料は異なります。ご相談ください。 <br>' +
      'ロケーション撮影イメージはこちらのページをご確認ください。<br>' +
      '※ ページ遷移あり(→ロケ地掲載ページ)'
  },
  {
    id: 51,
    click: false,
    path: 4,
    parent_id: 36,
    content: 'レンタル可能な衣装に関してはこちらのページをご確認ください。<br>' +
      '※ ページ遷移あり(→衣装ページ)'
  },
  {
    id: 41,
    click: false,
    path: 4,
    parent_id: 37,
    content: 'ヘアメイクなどの支度も含めて3時間以上となります。<br>' +
      '尚、プランによって所要時間は異なります。<br>' +
      'ご予約可能日のご確認はこちらのページをご確認ください。'
  },
  {
    id: 52,
    click: false,
    path: 4,
    parent_id: 38,
    content: '基本的に雨天でも撮影は可能です。<br>' +
      '雨天を避けたい場合は、前日までに天気予報をチェックし、ご連絡頂きますと日程変更等の対応をいたします。<br>' +
      '★撮影日を含む31日前までは無料で延期（日程変更）が可能です。<br>' +
      '延期（日程変更）の場合は、延期日時がご決定の場合は、理由やプラン内容に関わらず30日前～一律33,000円を申し受けます。<br>' +
      'ロケーション撮影では、雨天予報その他天災等のやむを得ない事情がある場合には、前日の19時時点での判断をさせていただきます。<br>' +
      '天気予報が雨天で降水確率80%以上、降水量200㎜の場合、撮影日時の変更を無料で承ります。雨天以外でのお客様都合による変更は上記変更料金（一律33,000円）を申し受けます。　<br>' +
      '撮影可能枠は数に限りがあります。お早めのお申し込みをオススメします。<br>' +
      '※ ページ遷移あり(→RESERVA予約フォーム)'
  },
  {
    id: 53,
    click: false,
    path: 4,
    parent_id: 39,
    content: 'はじめに戻る<br>' +
      '※ ページ遷移あり(→チャットボット1階層選択肢表示)'
  },
  {
    id: 54,
    click: false,
    path: 3,
    parent_id: 25,
    content: 'はじめに戻る<br>' +
      '※ ページ遷移あり(→チャットボット1階層選択肢表示)'
  }
]

export default function Header(props) {
  const { i18n, t } = useTranslation();
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenChat, setIsOpenChat] = useState(false)
  const [listChat, setListChat] = useState([])
  function renderListQuesttion(id){
    if (id === 0){
      return DATA_CHAT.filter(item=>item.path===1)
    }else{
      return DATA_CHAT.filter(item=>item.parent_id===id)
    }
  }
  function addQuestion(id){
    setListChat(listChat=>[...listChat, id])
  }
  const onChangeLang = (code) => {
    i18n.changeLanguage(code);
  };

  return <div className={'headerWrap'}>
    <div className={'headerTop'}>
      {isOpenMenu}
      <img src={menu} onClick={() => setIsOpenMenu(true)} alt=""/>
      <a href="/"><img src={logo} alt=""/></a>
      <a href="https://reserva.be/blanz"><Button text={'Reserve'}></Button></a>
    </div>
    <div className={'headerBot'}>
      <div className={'itemMenu'}>
        <a href="/concept">コンセプト</a>
      </div>
      <div className={'itemMenu'}>
        <a href="/studio">撮影プラン</a>
      </div>
      <div className={'itemMenu'}>
        <a href="/scene">シーン</a>
      </div>
      <div className={'itemMenu'}>
        <a href="/scene">アクティビティ</a>
      </div>
      <div className={'itemMenu'}>
        <a href="https://www.google.com/maps/place/%E3%80%92550-0015+%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E8%A5%BF%E5%8C%BA%E5%8D%97%E5%A0%80%E6%B1%9F%EF%BC%91%E4%B8%81%E7%9B%AE%EF%BC%99%E2%88%92%EF%BC%91+GENDAI+ORANGE+BLD/@34.671139,135.496087,19z/data=!4m6!3m5!1s0x6000e70fcf0ff00d:0xa071587cf6d00c36!8m2!3d34.6712165!4d135.4960653!16s%2Fg%2F12hmh853p?hl=ja&entry=ttu">アクセス</a>
      </div>
    </div>
    <div className={`menuDetail ${isOpenMenu ? 'active' : ''}`} >
      <div className="menuDetailTop">
        <div className="closeImage">
          <a href="/"><img src={logo} alt=""/></a>

          <img src={close} onClick={() => setIsOpenMenu(false)} alt=""/>
        </div>
        <div className="tableMenu">
          <table cellPadding={0}
                 cellSpacing={0}>
            <tr>
              <td colSpan={2 } >
                <div className="content pc">
                  <a href="">BLANZホームページ TOP</a>
                </div>
                </td>
            </tr>
            <tr>
              <td>
                <div className="content">
                  <a href="/">シーン</a>
                </div>
              </td>
              <td>
                <div className="content">
                  <a href="/retouch-album">ストーリー</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="content">
                  <a href="/plans">料金プラン</a>
                </div>
              </td>
              <td>
                <div className="content">
                  <a href="/dress">アクティビティ</a>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="content">
                  <a href="/scene">ギャラリー</a>
                </div>
              </td>
              <td>
                <div className="content">
                  <a href="/concept">アクセス</a>
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div className="listLanguage">
          <div className={`itemLange ${i18n.language === 'jp' ? 'active' :''}`} onClick={()=>onChangeLang('jp')}>JP</div>
          <div className="sep">/</div>
          <div className={`itemLange ${i18n.language === 'en' ? 'active' :''}`} onClick={()=>onChangeLang('en')}>EN</div>
          <div className="sep">/</div>
          <div className={`itemLange ${i18n.language === 'cn' ? 'active' :''}`}  onClick={()=>onChangeLang('cn')}>中文</div>
        </div>
      </div>
      <div className="menuDetailMid">

        <div className="titleWrap">
          <div className="title">ご予約・お問い合わせ</div>
          <div className="sub">流行に敏感な花嫁の憧れの世界観を叶えるため、</div>
          <div className="sub">こだわりの衣装を豊富に取り揃えております。</div>
        </div>
        <div className="flex" style={{justifyContent:'space-evenly'}}>
          <div className="itemContact">
            <div className="nameContact">TEL</div>
            <div className="imageContact">
              <img className={'imgMain'} src={phone} alt="" />
            </div>
            <div className="desContact">
              <div className="title">
                TEL:06-6616-9932
              </div>
              <div className="sub">営業時間:10:00~19:00</div>
              <div className="sub">火曜定休日祝祭日は営業</div>
            </div>
          </div>
          <div className="itemContact">
            <div className="nameContact">MAIL</div>
            <div className="imageContact">
              <img className={'imgMain'} src={email} alt="" />
            </div>
            <div className="buttonContact">
              <div className="btnContact">フォームはこちら</div>
            </div>
            <div className="desContact">
              <div className="sub">※デンライン相談予約も承っております。</div>
            </div>
          </div>
        </div>
        <div className="itemContact borderTop">
          <div className="nameContact"  style={{margin: '20px auto'}}>
            SNS
          </div>
          <div className="imageContact">
            <a href="https://www.instagram.com/blanzshinsaibashi/"><img src={insta} alt="" /></a>
            <a href="https://www.youtube.com/@blanzshinsaibashi8198"><img src={youtube} alt="" /></a>
            <a href="https://www.tiktok.com/@blanz_shinsaibashi"><img src={tiktok} alt="" /></a>
            <a href=""><img src={menu_} alt="" /></a>
          </div>
        </div>
      </div>
      <div className="menuDetailBot">
        <div className="flex">
          <a href={'/company-profile'} className="item">会社概要</a>
          <a href={'/privacy-policy'} className="item">プライバシーポリシー</a>
        </div>
        <div>Copyright©AKI ENTERPRISE Co.,Ltd. ALL Rights Reserve</div>
      </div>
    </div>
    <div className={`menuDetail ${isOpenChat ? 'active' : ''}`}>
      <div className="headerChat">
        <img src={closeChat} onClick={()=>{setIsOpenChat(false)}} alt=""/>
        <span>チャットで質問をどうぞ</span>
      </div>
      <div className="contentChat">
        <div className="itemChat isAdmin">
          <img src={leftChat} className={'arrLeft'} alt=""/>
          <div className="textChat">
            ご来訪ありがとうございます。<br/>
            BLANZお問い合わせチャットです。<br/>
            ご質問内容を選択してください。"	以下よりお選びください。	以下よりお選びください。<br/>
          </div>
        </div>
        {renderListQuesttion(0).map((item, index)=>(
            <div className={'itemChat optionChat'}
                 key={index}
                 onClick={()=>{addQuestion(item.id)}}>
              <img src={arrOption} alt=""/>
              <span>{item.content}</span>
            </div>
          ))}
        {
          listChat.map((item, index1)=>(
            <>
              <div className="itemChat isUser">
                <img src={rightChat} className={'arrRight'} alt=""/>
                <div className="textChat">
                  {DATA_CHAT.find(itemx=>itemx.id === item).content}
                </div>
              </div>
              {
                renderListQuesttion(item)[0].click
                &&
                <div className="itemChat isAdmin">
                  <img src={leftChat} className={'arrLeft'} alt=""/>
                  <div className="textChat">以下よりお選びください。
                  </div>
                </div>

              }
              {renderListQuesttion(item).map((itemi, index2)=>(
               <>
                 {
                   DATA_CHAT.find(itemx=>itemx.id === itemi.id).click
                 && <div className={'itemChat optionChat'}
                   key={index2}
                   onClick={()=>{addQuestion(itemi.id)}}>
                   <img src={arrOption} alt=""/>
                   <span>{itemi.content}</span>
                 </div>
                 }
                 {
                   !DATA_CHAT.find(itemx=>itemx.id === itemi.id).click
                   && <div className={'itemChat optionChat'}
                           key={index2}>
                     <span>{itemi.content}</span>
                   </div>
                 }

               </>
              ))}
            </>
          ))
        }
      </div>
    </div>
    <div
      onClick={() => {
        setIsOpenChat(false);
        setIsOpenMenu(false);
      }}
      className={`menuDetailWrap ${isOpenMenu || isOpenChat ? 'active' : 'hide'}`}>
    </div>
    <div className="iconChat" onClick={() => setIsOpenChat(!isOpenChat)}>
      <img src={ChatBtn} alt=""/>
    </div>


  </div>;
}
