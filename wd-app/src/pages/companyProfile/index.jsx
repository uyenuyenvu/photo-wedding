import "../../assets/scss/companyProfileStyle.scss";
import BeforeFooter from "../../components/common/BeforeFooter";
export default function CompanyProfile(props) {
  return (
    <>
      <div className="company-profile">
        <div className="title">会社概要</div>
        <div className="line"></div>
        <div className="flex">
          <div className="name">社名</div>
          <div className="profile">株式会社 明来（アキ）エンタープライズ</div>
        </div>
        <div className="line"></div>
        <div className="flex">
          <div className="name">創業</div>
          <div className="profile">平成 ８年 ４月</div>
        </div>
        <div className="next">・・・以下XDで中略</div>
        <div className="line"></div>
        <div className="flex">
          <div className="name">事業内容</div>
          <div className="profile">
            ●ウエディング演出プロダクション事業
            <br />
            フェアリー・イリュージョン発売元／演出企画開発／各種演出商品卸販売レンタル
            アーティスト・パフォーマー派遣／音響照明運営他
            <br />
            ●空間設計デザイン事業
            <br />
            会場リノベーション設計デザイン／空間プロデュース映像演出／インテリアテーブルコーディネート／ヴィジュアルテーブル・プロジェクションマッピング・ホログラムデザイン制作／各種設備機器販売・レンタル／広告プロモーション・コンサルティング業務他
            <br />
            ●フォトウェディングスタジオ事業
            <br />
            ●演出ゲストハウス／古民家再生・宿泊施設事業（旅館業法取得認可）
            <br />
            <div>
              <br />
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="title">沿革</div>
        <div className="line"></div>
        <div className="flex">
          <div className="name">1997年 12月</div>
          <div className="profile">
            新時代のブライダル演出、新・心・真価値の創造を事業目的として有限会社明来エンタープライズを設立。
          </div>
        </div>
        <div className="line"></div>
        <div className="flex">
          <div className="name">1998年 7月</div>
          <div className="profile">
            キャンドルサービスに代わる新しい光の演出「フェアリー・イリュージョン」発表。
          </div>
        </div>
        <div className="next">・・・以下XDで中略</div>
        <div className="line"></div>
        <div className="flex">
          <div className="name">2019年 10月</div>
          <div className="profile">
            人気の光の演出「フェアリー・イリュージョン®」に5年ぶりとなる新作登場！
            <br />
            「新ペールトーンカラー」4色が誕生。最新トレンド満載のおしゃれなデコレーションを自由に組み合わせられる新シリーズ『レイヤードシリーズ』完成。’20-‘21ラインナップ続々登場予定。
          </div>
        </div>
        <div className="line"></div>
      </div>
      <BeforeFooter />
    </>
  );
}
