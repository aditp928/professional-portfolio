import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              “I have three precious things which I hold fast and prize. 
              The first is gentleness; 
              the second is frugality; 
              the third is humility, which keeps me from putting myself before others. 
              Be gentle and you can be bold; be frugal and you can be liberal; avoid putting yourself before others and you can become a leader among men.”
              </span>
              <span className="quote-author">- Lao Tzu</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
