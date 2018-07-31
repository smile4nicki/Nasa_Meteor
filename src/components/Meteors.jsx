import React from "react";
// import axios from "axios";
import moment from "moment";

const Meteors = ({ meteors }) => {
  console.log(meteors);
  return (
    <div>
      {meteors.map((meteor) => {
        return (
          <div className="meteor-cards">
            <div className="card-container">
              <p className="meteor-year">
                Year: {moment(meteor.year).format("DD/MM/YYYY HH:mm")}
              </p>
              <p className="meteor-mass">Mass: {meteor.mass}</p>
              <p className="meteor-type">Type of Meteor: {meteor.type}</p>
              {/* <p className="meteor-found">Found: {meteor.found}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meteors;
