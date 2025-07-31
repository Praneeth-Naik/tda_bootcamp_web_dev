import Logo from './assets/logo.jpg'
function Header(){
    return(
        <>
            <div className="header">
                <img src={Logo} id='logo'/>
                <div className="name">
                    <h1>The Data Alchemists</h1>
                    <p>The Official Data Science Club of Manipal</p>
                </div>
            </div>
        </>
    );
}
export default Header