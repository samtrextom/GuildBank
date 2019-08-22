import React from 'react';
import LeftFooter from './LeftFooter'
import MiddleFooter from './MiddleFooter'
import RightFooter from './RightFooter'

function Footer() {
    return (
        <footer>
            <div className="container-fluid footerMain">
                <div className="row">
                    <LeftFooter/>
                    <MiddleFooter/>
                    <RightFooter/>

                </div>
            </div>
            <div className="footBot">
                Copyright &copy; 2019 Team Red Shoes DevTeam
                {'\n'}
                <a href="samtrextom@gmail.com">samtrextom@gmail.com</a>
            </div>
        </footer>
    );
}

export default Footer;