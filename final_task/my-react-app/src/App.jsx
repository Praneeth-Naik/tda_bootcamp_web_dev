import Header from './Header.jsx';
import Navbar from './Navbar.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import ToggleInfo from './ToggleInfo.jsx';
import Pfp from './assets/pfp.png';

function App() {
  return (
    <div className="tda">
      <Header />
      <Navbar />
      <div id="home">
        <Content />
      </div>
      <section id="work" className="section">
        <h2>Our Work</h2>
        <p>
          We conduct workshops, contests, and bootcamps on AIML, and data analysis...
        </p>
        <ToggleInfo />
      </section>
      <section id="team" className="section team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {[
            { role: "President", name: "Aditya Nigam" },
            { role: "Vice-President", name: "Bhavya Mittal" },
            { role: "General Secretary", name: "Kewal Thacker" },
            { role: "Treasurer", name: "Phirozgar Irani" },
            { role: "DAVE Head", name: "Agrim Agrawal" },
            { role: "AIML Head", name: "Himanshu Agarwal" },
            { role: "AIML Head", name: "Siddhant Chutke" },
            { role: "DL Head", name: "Adriteyo Das" },
            { role: "DL Head", name: "Shivli Dimri" },
            { role: "CnD Head", name: "Arnav Vijaywargiya" },
            { role: "CnD Head", name: "Avikshit Dhar" },
            { role: "HR Head", name: "Kumar Kshitij" },
            { role: "HR Head", name: "T S Saumyaa" },
            { role: "PRO Head", name: "Raghav Kedia" }
          ].map((member, index) => (
            <div key={index} className="team-member">
              <img src={Pfp} alt="Profile" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:data.alchemists@manipal.edu">data.alchemists@manipal.edu</a></p>
        <p>Instagram: <a href="https://instagram.com/tda.manipal" target="_blank"> @tda.manipal </a></p>
      </section>
      <Footer />
    </div>
  );
}

export default App;
