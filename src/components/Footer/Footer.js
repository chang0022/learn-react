import React from 'react';
import './Footer.css';
import footer from '../../assets/images/icon_footer.png'
class Footer extends React.Component {
    render() {
        return (
          <div className="page__ft">
              <a href=""><img src={footer} alt="footer"/></a>
          </div>
        );
    }
}

export default Footer;