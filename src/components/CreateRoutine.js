import React, { useState } from "react";
import { createRoutine } from "../api";

const NewRoutine = ({ allRoutines, setAllRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="new-routine-container">
      <h1 className="new-routine-header">Create a new routine.</h1>
      <form
        id="newRoutine"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const createdRoutine = await createRoutine(name, goal, isPublic);

            setAllRoutines([createdRoutine, ...allRoutines]);
            setName("");
            setGoal("");
            setIsPublic(false);
            setError("");
          } catch (error) {
            console.log(error.response);
            setError(error);
          }
        }}
      >
        <fieldset className="name-routine">
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
        <fieldset className="goal">
          <label htmlFor="goal">Goal</label>
          <input
            id="goal"
            type="text"
            placeholder="Goal"
            value={goal}
            onChange={(event) => {
              setGoal(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="isPublic">
            Do you want to make this routine public?
          </label>
          <input
            type="checkbox"
            id="isPublic"
            value={isPublic}
            onChange={(event) => {
              setIsPublic(event.target.checked);
            }}
          ></input>
        </fieldset>
        <button className="new-routine-button" type="submit">
          Submit
        </button>
        {error && <p>{error.response.data.message}</p>}
      </form>
    </div>
  );
};

export default NewRoutine;