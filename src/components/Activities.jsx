import React from "react";

const Activities = ({ allActivities }) => {
  return (
    <div>
      <h1>Activities</h1>

      {allActivities.length
        ? allActivities.map((e) => {
            return (
              <div className="activity-container" key={`activities${e.id}`}>
                <p>{e.name}</p>
                <p>{e.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Activities;
