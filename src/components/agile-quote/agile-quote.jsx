import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-content">
             "."
              </span>
              <span className="quote-author">- Lao Tzu</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
