import '../../assets/scss/companyProfileStyle.scss'
import bot from './../../assets/images/bot.png'
export default function CompanyProfile(props) {
    return (
        <div className="company-profile">
            <div className='pd-2'>
                <h2 className='message'>
                    代表挨拶
                </h2>
                <div className='content'>
                    hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge  hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge hogehoge
                </div>
                <div className='auther'>代表取締役 佐野章仁</div>
                <h2 className='title'>
                Company Profile
                </h2>
                <div className='company-profile__content'>
                    <div className='flex flex-col'>
                        <h2 className='company-profile__content-title'>会社概要</h2>
                        <ul className='list-content'>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='company-profile__content-title'>沿革</h2>
                        <ul className='list-content'>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                            <li>hogehoge</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='company-profile__news'>
                <h2>News</h2>

                <form>  <textarea className='company-profile__input' placeholder="hogehoge"></textarea></form>
            </div>
            <img src={bot} alt="" class="bot-chat" ></img>
        </div>
    )
    
}
