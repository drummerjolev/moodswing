import React from 'react';

const Services = (props) => {
  const services = props.services
                              .map((service, index) =>
                                <div
                                  key={index.toString() + 'iuqwbibf2'}
                                  className="row">
                                  <div className="col-sm-4">
                                    <p>{service.name}</p>
                                  </div>
                                  <div className="col-sm-3">
                                    <a
                                      className={
                                        service.connected ? "btn btn-primary btn-block btn-success" : "btn btn-primary btn-block"
                                      }
                                      href={service.signin}
                                      target="_blank"
                                    >
                                      {service.connected ? 'Connected' : 'Connect'}
                                    </a>
                                  </div>
                                </div>
                              );
  const numberOfActiveServices = props.services.filter(service => service.connected).length;
  return (
    <div>
      <h1>You have {numberOfActiveServices} active service(s).</h1>
      <p>Connected music sources improve your recommendations.</p>
      <hr />
      {services}
    </div>
  )
}

export default Services;
