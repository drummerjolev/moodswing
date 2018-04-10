import React from 'react';

const Wifi = (props) => {
  const connected = props.connected;
  const links = {
    'captiveLogin': 'https://en.wikipedia.org/wiki/Captive_portal',
    'routers': 'https://store.openmesh.com/products/access-points.html',
    'routerHelp': 'https://www.paloaltonetworks.com/documentation/80/pan-os/pan-os/user-id/map-ip-addresses-to-users/map-ip-addresses-to-usernames-using-captive-portal/configure-captive-portal',
    'softwareDownload': 'https://mp-watch.lifeissababa.com/',
  }
  return (
    <div>
      <h1>Wifi {connected ? '' : 'not '}connected.</h1>
      <p>Let customers use your Wifi network using their Spotify or Apple Music credentials to login.</p>
      <p>This data improves our recommendations.</p>
      <ol>
        <li>
          Buy a router that supports <a href={links.captiveLogin} target="_blank">captive login</a>. We recommend <a href={links.routers} target="_blank">these</a>.
        </li>
        <li>
          Setup your router and add a login page. <a href={links.routerHelp}>Need help?</a>
        </li>
        <li>
          <a href={links.softwareDownload}>Install our Spotify and Apple Music plugin.</a>
        </li>
      </ol>
      <p>Make sure you are connected to your Wifi network and followed the instructions above.</p>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <button
            disabled={connected}
            type="button"
            className="btn btn-primary btn-block btn-success"
            onClick={props.connect}>
            Connect Wifi
          </button>
        </div>
      </div>
    </div>
  )
}

export default Wifi;
