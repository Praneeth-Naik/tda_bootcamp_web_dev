import ShortsIcon from './assets/shorts.svg';
import HomeIcon from './assets/house-icon.png';
import SubscrptionIcon from './assets/subscription.png';
import YouIcon from './assets/you.png';

function SideBar() {
    return (
        <>
            <div className="side-bar">
                <div className="side-item">
                    <img src={HomeIcon} alt="Home" />
                    <p>Home</p>
                </div>
                <div className="side-item">
                    <img src={ShortsIcon} alt="Shorts" />
                    <p>Shorts</p>
                </div>
                <div className="side-item">
                    <img src={SubscrptionIcon} alt="Subscriptions" />
                    <p>Subscriptions</p>
                </div>
                <div className="side-item">
                    <img src={YouIcon} alt="You" />
                    <p>You</p>
                </div>
            </div>
        </>
    );
}

export default SideBar;
