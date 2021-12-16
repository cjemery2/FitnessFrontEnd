import React from "react";

const Routines = ({ allRoutines }) => {
  return (
    <div>
      <h1>Routines</h1>

      <div className="routine-main-container">
        {allRoutines && allRoutines.length
          ? allRoutines.map((e) => {
              return (
                <div key={`routines${e.id}`}>
                  <div className="routine-container">
                    <p>{e.name}</p>
                    <p>By {e.creatorName}</p>
                    <p>Routine Goal</p>
                    <p>{e.goal}</p>
                  </div>
                  {e.activities && e.activities.length
                    ? e.activities.map((a) => {
                        return (
                          <div
                            className="routine_activity-container"
                            key={`activity-id${a.id}`}
                          >
                            <p>Routine Activity</p>
                            <p>{a.name}</p>
                            <p>Routine Description</p>
                            <p>{a.description}</p>
                            <p>Routine Info</p>
                            <p>
                              Count: {a.count} and Duration:
                              {a.duration}
                            </p>
                          </div>
                        );
                      })
                    : null}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Routines;