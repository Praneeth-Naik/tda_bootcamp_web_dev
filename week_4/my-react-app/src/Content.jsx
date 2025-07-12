import Thumbnail1 from './assets/youtube_thumbnail_maxres.jpg'
import Thumbnail2 from './assets/youtube_thumbnail_maxres (1).jpg'
import Thumbnail3 from './assets/youtube_thumbnail_maxres (2).jpg'
import Thumbnail4 from './assets/youtube_thumbnail_maxres (3).jpg'
import Thumbnail5 from './assets/youtube_thumbnail_maxres (4).jpg'
import Thumbnail6 from './assets/youtube_thumbnail_maxres (5).jpg'
import Manipal from './assets/manipal-logo.jpg'

function Content() {
  return (
    <div className="content">
        <a href='https://www.youtube.com/watch?v=CgkZ7MvWUAA&t=15765s' target='_blank'>
            <div className="yt-video">
                <img src={Thumbnail1} />
                <div className="video-info">
                <img src={Manipal} className="pfp" />
                <div className="video-text">
                    <p className="video-title">React Full Course for free ⚛️ (2024)</p>
                    <p className="channel-name">BroCode</p>
                    <p className="meta-info">312K views • 1 year ago</p>
                </div>
                </div>
            </div>
        </a>
        <a href='https://www.youtube.com/watch?v=qBRaI0ZeAf8' target='_blank'>
            <div className="yt-video">
                <img src={Thumbnail2} />
                <div className="video-info">
                <img src={Manipal} className="pfp" />
                <div className="video-text">
                    <p className="video-title">We Have To Talk About Weed</p>
                    <p className="channel-name">Kurzgesagt - In a Nutshell</p>
                    <p className="meta-info">1.2M views • 2 years ago</p>
                </div>
                </div>
            </div>
        </a>
        <a href='https://www.youtube.com/watch?v=BOPx08doMKU' target='_blank'>
            <div className="yt-video">
                <img src={Thumbnail6} />
                <div className="video-info">
                <img src={Manipal} className="pfp" />
                <div className="video-text">
                    <p className="video-title">Celebrating 75 years of always moving forward</p>
                    <p className="channel-name">NASCAR</p>
                    <p className="meta-info">529K views • 9 months ago</p>
                </div>
                </div>
            </div>
        </a>
        <a href='https://www.youtube.com/watch?v=nGhKIC_7Mkk' target='_blank'>
            <div className="yt-video">
                <img src={Thumbnail4} />
                <div className="video-info">
                <img src={Manipal} className="pfp" />
                <div className="video-text">
                    <p className="video-title">Building AMAZON Clone for Beginners | Project using HTML & CSS</p>
                    <p className="channel-name">Apna College</p>
                    <p className="meta-info">204K views • 5 months ago</p>
                </div>
                </div>
            </div>
        </a>
        <a href='https://www.youtube.com/watch?v=kopoLzvh5jY' target='_blank'>
            <div className="yt-video">
                <img src={Thumbnail5} />
                <div className="video-info">
                <img src={Manipal} className="pfp" />
                <div className="video-text">
                    <p className="video-title">Multi-Agent Hide and Seek</p>
                    <p className="channel-name">OpenAI</p>
                    <p className="meta-info">918K views • 2 years ago</p>
                </div>
                </div>
            </div>
        </a>
        <a href='https://www.youtube.com/watch?v=h0zh7CqAkxY' target='_blank'>
            <div className="yt-video">
                <img src={Thumbnail3} />
                <div className="video-info">
                <img src={Manipal} className="pfp" />
                <div className="video-text">
                    <p className="video-title">Why I REGRET Learning React First</p>
                    <p className="channel-name">Shade of Code</p>
                    <p className="meta-info">683K views • 7 months ago</p>
                </div>
                </div>
            </div>
        </a>
    </div>
  );
}

export default Content;
