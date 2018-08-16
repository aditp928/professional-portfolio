import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false,
          expanded5: false,
          expanded6: false,
          expanded7: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };
    handleExpandChange4 = (expanded4) => {
      this.setState({expanded4: expanded4});
    };
    handleExpandChange5 = (expanded5) => {
      this.setState({expanded5: expanded5});
    };
    handleExpandChange6 = (expanded6) => {
      this.setState({expanded6: expanded6});
    };
    handleExpandChange7 = (expanded7) => {
      this.setState({expanded7: expanded7});
    };
    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };
    handleExpand4 = () => {
      this.setState({expanded4: true});
    };
    handleExpand5 = () => {
      this.setState({expanded5: true});
    };
    handleExpand6 = () => {
      this.setState({expanded6: true});
    };
    handleExpand7 = () => {
      this.setState({expanded7: true});
    };
    

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    handleReduce4 = () => {
      this.setState({expanded4: false});
    };
    handleReduce5 = () => {
      this.setState({expanded5: false});
    };
    handleReduce6 = () => {
      this.setState({expanded6: false});
    };
    handleReduce7 = () => {
      this.setState({expanded7: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Relevant Work experience</p>
                <div className="timeline-entry">
                <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="Software Development Intern" subtitle="Dijatek"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            June	2018 - Present.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>ReactJs</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Vuejs</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Node.js</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Express</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Javascript</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>mySQL</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>HTML5,CSS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>OAuth 2.0, Passport, JWT</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Lucid Charts</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Postman</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Swagger.IO</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Confluence, JIRA</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Teaching Assitant and Tutor for Full Stack Development" subtitle="University of Central Florida"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          <div className="timeline-entries">
                          June	2018 - Present. <br></br><br></br>
                            Helping students inside and outside the classroom within the UCF Full Stack development program by conducting 1 on 1 sessions to alleviate their confusion and guide them to become better developers.
                          </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Full Stack Developer" subtitle="Aeronyde Corporation"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Feb 2018 - Present. <br></br><br></br>

                           An effort that stems from Autonomous Fleet Management platform development of Aeronyde Corporation. OpenSKY is an application for public use aimed at allowing for safe UAV(Unmanned Aerial Vehicle) integration into manned airspace between the general public, commercial operators(like Amazon), and regulatory bodies(like the FAA). By using FAA data, flight information and restrictions, and weather conditions, the application is creating a collaborative community for the public to be involved in creating a safer openSKY for everyone.

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>ReactJs</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Node.js</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Express</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>mySQL</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>IBM Cloud Services</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Mapbox</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Postman</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Lucid Charts</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>HTML5,CSS</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader title="Student" subtitle="University of Central Flordia"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          January	2018	-	July 2018. <br></br><br></br> Full Stack Development Program
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>HTML5,CSS</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Javascript</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>JQuery</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Firebase</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Node.js</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>mySQL</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Express</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Handlebars</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>sequelize</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>mocha,chai,nightmare testing</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>MongoDB, Mongoose</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>ReactJs</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded6} onExpandChange={this.handleExpandChange6}>
                      <CardHeader title="Water and Energy Consultant/Data Analyst" subtitle="Sustainability"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                           2015 - 2018. <br></br><br></br>
                         Water and Energy Consultant for Destination Better
                         <br></br>
                            --Working with interdisciplinary groups to optimize their water and energy use.
                            <br></br><br></br>
                         Data Analyst for Sarasota County and Office of Sustainability
                         <br></br>
                            --Analyzed water, energy use, and greenhouse gas data to formulate reporting to help maximize overall sustainability.
                          <div className="timeline-entries">
                           
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded7} onExpandChange={this.handleExpandChange7}>
                      <CardHeader title="Student" subtitle="University of South Florida"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                        2009 - 2013. <br></br><br></br>
                       Bachelors of Science in Environmental Science and Policy
                         <br></br><br></br>
                        2014 - 2016. <br></br><br></br>
                       Masters in Global Sustainability (Energy and Water concentration)
                          <div className="timeline-entries">
                           
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
          </div>
        );
    }
}

export default TimelineComponent;
