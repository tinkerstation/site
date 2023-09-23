import React from "react";

const ImpressumPage: React.FC = () => {

    return (
        <React.Fragment>
            <main>
                <div >
                    <h1 >Impressum</h1>
                    <h2>Information regarding the company</h2>
                    <br />
                    <p>SMR GROUP Spółka z ograniczoną odpowiedzialnością</p>
                    <br />
                    <p>NIP:5833418714</p>
                    <br />
                    <h2>Contact:</h2>
                    <br />
                    <p>ul. J. Heweliusza 11/811 80-890 Gdańsk</p><br />
                    <p>Telefon: +49 176 9313 0340</p><br />
                    E-Mail:<a href="mailto:contact@algoraid.com?subject=Request%20For%20Information">contact@algoraid.com</a><br /><br />
                    <h2>Disclaimer</h2><br />
                    <p>The information provided on this website is for informational purposes only. The information is not intended to be a substitute for professional advice.</p><br />
                    <h2>Copyright</h2><br />
                    <p>All content on this website is the intellectual property of Techonomy Labs. The content is protected by copyright and other laws.</p><br />
                    <h2>Trademarks</h2><br />
                    <p>The following trademarks are used on this website:</p><br /><h3><strong> Algoraid &trade;</strong></h3><br />
                </div>
            </main>
        </React.Fragment>
    );
};

export default ImpressumPage;