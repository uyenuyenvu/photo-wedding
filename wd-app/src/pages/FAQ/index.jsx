import '../../assets/scss/FAQStyle.scss'
import bgTitle from '../../assets/images/bg-title.svg'
import down from '../../assets/images/down.svg'
import BeforeFooter from "../../components/common/BeforeFooter";
export default function FAQ() {
  return (
    <>
    <div className='faq'>
        <div className="title-page">
            <img src={bgTitle} alt="" />
            <div className="contentTitle">
                <div className="title">Q&A</div>
                <div className="sub-title">-よくあるご質問-</div>
            </div>
        </div>
        <div className="notion">
            <div className="item">撮影について
                <img src={down} alt="" />
            </div>
            <div className="item">ロケーション撮影について
                <img src={down} alt="" />
            </div>
            <div className="item">美容・ヘアメイクについて
                <img src={down} alt="" />
            </div>
            <div className="item">写真・アルバムについて
                <img src={down} alt="" />
            </div>
            <div className="item">写真・アルバムについて
                <img src={down} alt="" />
            </div>
            <div className="item">アクセスについて
                <img src={down} alt="" />
            </div>
            <div className="item">お支払いについて
                <img src={down} alt="" />
            </div>
        </div>
        <div className="content-page" id='about-shooting'>
            <div className="title">撮影について</div>
            <div className="content">
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">撮影や見学に親も一緒についていくことは可能ですか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">はい、可能です。ご予約・ご相談の際にお申し付けください。</div>
                </div>
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">突然行ってその日に撮影できますか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">ご予約状況によります。ご来店される前にお電話にてご相談くださいませ。</div>
                </div>
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">来店から撮影終了までの所要時間はどれくらいですか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">プランによって異なりますが、スタンダードプランの場合でも、ヘアメイクなどの支度も含めて3～4時間以上はかかります。詳しくはお問合せ下さい。</div>
                </div>
                <div className="next">・・・以下XDで中略</div>
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">自分のスマートフォンでの自撮りや撮影は可能ですか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">申し訳ございませんが、ご自身のカメラやスマホでの撮影はご遠慮いただいております。</div>
                </div>
                <div className="line"></div>
                <div className="item">ページ上部へ戻る
                    <img src={down} alt="" />
                </div>
            </div>
        </div>
        <div className="content-page">
            <div className="title">予約について</div>
            <div className="content">
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">何日前に撮影の予約をしたらいいですか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">期限は設けておりませんが、早めにご予約を頂いた方かたご希望の日程にご案内をしております。スタジオの予約日程をお調べしますので、電話またはお問い合わせフォームよりお気軽にご連絡くださいませ。</div>
                </div>
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">撮影予約は来店後にしかできませんか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">電話またはメールのみでのご予約も可能です。</div>
                </div>
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">打ち合わせの予約は必要ですか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">当日でも空いていれば予約可能です。ご来店前に一度お電話でご確認ください。</div>
                </div>
                <div className="next">・・・以下XDで中略</div>
                <div className="line"></div>
                <div className="flex" id='q'>
                    <div className="name">Q.</div>
                    <div className="profile">遠方で来店できない場合はどうしたらいいですか？</div>
                </div>
                <div className="flex" id='a'>
                    <div className="name">A.</div>
                    <div className="profile">オンラインや電話での撮影予約・打合せも可能です。その旨をお知らせください。</div>
                </div>
                <div className="line"></div>
                <div className="item">ページ上部へ戻る
                    <img src={down} alt="" />
                </div>
            </div>
        </div>
    </div>
  <BeforeFooter />
</>
)}
