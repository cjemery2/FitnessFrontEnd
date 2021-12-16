import React from "react";
import { NewActivity, NewRoutine, UserRoutine } from ".";

const UserInfo = ({
  allActivities,
  setAllActivities,
  allRoutines,
  setAllRoutines,
  allUserRoutines,
}) => {
  return (
    <div>
      <h1>User Stuff</h1>

      <NewActivity
        allActivities={allActivities}
        setAllActivities={setAllActivities}
      />
      <NewRoutine allRoutines={allRoutines} setAllRoutines={setAllRoutines} />

      <UserRoutine
        allUserRoutines={allUserRoutines}
        allActivities={allActivities}
      />
    </div>
  );
};

export default UserInfo;