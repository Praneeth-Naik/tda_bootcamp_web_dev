function Content() {
    return (
        <>
            <div className="content-container">
                <div className="left">
                    <div className="about">
                        <p>
                            We are not just a club, but a community of data-driven minds who believe in alchemy.
                            We believe that even 1% chance is enough—the rare chance, the quiet momentum, the spark that revives something lost and gives rise to something exceptional.
                            Something unique.
                            Something that cannot be undone.
                        </p>
                    </div>
                    <div className="quote">
                        We take that 1% chance.<br/>
                        We are the exception.<br/>
                        We are The Data Alchemists.<br/> 
                    </div>
                    {/* <p>Driven by Data.<br />Defined by Insight.</p> */}
                </div>

                <div className="right">
                    <h2>Our Domains</h2>
                    <ul>
                        <li>Artificial Intelligence & Machine Learning (AIML)</li>
                        <li>Deep Learning (DL)</li>
                        <li>Data Analytics, Visualization & Engineering (DAVE)</li>
                        <li>Coding & Development (C&D)</li>
                        <li>Management (Operations/HR/Publicity/Sponsorship)</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
export default Content;
