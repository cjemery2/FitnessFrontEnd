import React, { useState } from "react";
import { createActivity } from "../api";

const NewActivity = ({ allActivities, setAllActivities }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="new-activity-container">
      <h1 className="new-activity-header">Create a new Activity</h1>
      <form
        id="newActivity"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const createdActivity = await createActivity(name, description);
            setAllActivities([createdActivity, ...allActivities]);
            setName("");
            setDescription("");
            setError("");
          } catch (error) {
            console.log(error.response);
            setError(error);
          }
        }}
      >
        <fieldset className="new-activity-component-name">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="new-activity-component-description">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Enter a description of the activity"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="new-activity-button" type="submit">
          Submit
        </button>
        {error && <p>{error.response.data.message}</p>}
      </form>
    </div>
  );
};

export default NewActivity;