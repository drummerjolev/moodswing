import React from 'react';

const Recommendations = (props) => {
  const recommendations = props.recommendations.map(service =>
                            <tr key={service.id}>
                              <td>
                                <a
                                  href={service.link}
                                  target="_blank"
                                >
                                {service.title}
                                </a>
                              </td>
                              <td>{service.time}</td>
                            </tr>
                          );
  return (
    <div>
      <h1>Queue</h1>
      <p>Playing our recommendations below increase customer satisfaction in your shop.</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Recommendation</th>
            <th scope="col">When To Play</th>
          </tr>
        </thead>
        <tbody>{recommendations}</tbody>
      </table>
    </div>
  )
}

export default Recommendations;
