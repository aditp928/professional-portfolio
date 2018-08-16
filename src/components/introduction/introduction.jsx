import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
             Programming has grown to become a real passion for me. I love any opportunity to come up with unique solutions to complex challenges.
            With an open creative mind, inclination for learning, and unconventional approach to problem-solving the sky's no limit!
           
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
