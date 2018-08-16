import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Please take a look at my Github</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="Adit Patel"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made using ReactJs and Material UI.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/aditp928" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
