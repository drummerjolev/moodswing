import React, { Component } from 'react';

import { generateRecommendation } from './Helpers.js';

import Menu from './Menu.js';
import Services from './Services.js';
import Recommendations from './Recommendations.js';
import Wifi from './Wifi.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'view': 'recommendations',
      'recommendations': [],
      'services': [
        {
          'name': 'Rockbot',
          'connected': false,
          'signin': 'https://rockbot.com/login'
        },
        {
          'name': 'Pandora for Business',
          'connected': true,
          'signin': 'https://pandora.moodmedia.com/customer/account/login/'
        },
        {
          'name': 'SiriusXM for Business',
          'connected': false,
          'signin': 'https://player.siriusxm.com/#/welcome',
        },
      ],
      'wifi': {
        'connected': false,
      }
    }
  }

  componentDidMount = () => {
    this.timer = setTimeout(this.addRecommendation(), 8000);
  }

  connectWifi = () => {
    setTimeout(() => {
      console.log('hello world');
      this.setState({ wifi: { connected: true } });
    }, 3000);
  }

  addRecommendation = () => {
    const newRecommendation = generateRecommendation();
    const previousRecommendations = this.state.recommendations.slice();
    previousRecommendations.push(newRecommendation);
    const newInterval = Math.floor((Math.random() * 16000) + 1);
    this.timer = setTimeout(this.addRecommendation, newInterval);
    this.setState({ recommendations: previousRecommendations });
  }

  handleMenuChange = (item, event) => {
    this.setState({'view': item});
  }

  render() {
    const { services, recommendations, view } = this.state;
    const isWifiActive = this.state.wifi.connected;

    var displayView = null;
    if (view === 'services') {
      displayView = <Services services={services} />;
    } else if (view === 'recommendations') {
      displayView = <Recommendations recommendations={recommendations} />;
    } else {
      displayView = <Wifi connect={this.connectWifi} connected={isWifiActive} />;
    }

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <Menu view={this.state.view} change={(i, e) => this.handleMenuChange(i, e)} />
            </div>
          </div>
        </div>

        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {displayView}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
