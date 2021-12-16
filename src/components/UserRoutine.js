import React from "react";
import { getUser } from "../auth";
import { Buttons, ActivityButtons } from ".";

const UserRoutine = ({ allUserRoutines, allActivities }) => {
  const user = getUser();

  return (
    <>
      <h1 className="user-routine-header">User: {user}'s Routines</h1>
      <div className="user-routine-main-container">
        {allUserRoutines && allUserRoutines.length
          ? allUserRoutines.map((e) => {
              return (
                <div
                  key={`User-routines${e.id}`}
                  className="user-routine-single-container"
                >
                  <div className="user-routine-container">
                    <p>{e.name}</p>
                    <p>By {e.creatorName}</p>
                    <p>Routine Goal</p>
                    <p>{e.goal}</p>
                  </div>
                  <div className="user-routine-buttons">
                    <Buttons id={e.id} allActivities={allActivities} />
                  </div>
                  {e.activities && e.activities.length
                    ? e.activities.map((a) => {
                      console.log(a)
                        return (
                          <div
                            className="user-routine_activity-container"
                            key={`user-activity-id${a.id}`}
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
                            <div>
                              <ActivityButtons id={a.routineActivityId} />
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default UserRoutine;