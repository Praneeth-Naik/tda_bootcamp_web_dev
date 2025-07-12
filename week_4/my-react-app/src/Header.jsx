import YouTubeLogo from './assets/YouTube-Logo.png';
import SearchIcon from './assets/search-icon.png'
import NotificationIcon from './assets/notificationIcon.png'
import ProfilePic from './assets/profile.png'
import Bars from './assets/bars.png'

function Header() {
    return(
        <>
            <div className="header">
                <div className="yt-logo">
                    <img src={Bars} id='bars'/>
                    <a href='https://www.youtube.com/' target='_blank'><img src={YouTubeLogo}/></a>
                </div>
                <div className="search-bar">
                    <input type='text' placeholder='Search'/>
                    <img src={SearchIcon}/>
                </div>
                <div className="profile-pic">
                    <img src={NotificationIcon}/>
                    <img src={ProfilePic}/>
                </div>
            </div>
        </>
    );
}

export default Header