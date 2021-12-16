import React, { useState } from "react";
import { updateRoutine } from "../api";

const UpdateForm = ({ id }) => {
  const [newName, setNewName] = useState("");
  const [newGoal, setNewGoal] = useState("");
  const [newIsPublic, setNewIsPublic] = useState(false);
  const [error, setError] = useState("");

  return (
    <div>
      <form
        id="update"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            await updateRoutine(id, newName, newGoal, newIsPublic);

            setNewName("");
            setNewGoal("");
            setNewIsPublic("");
            setError("");
          } catch (error) {
            setError(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="new name">Name</label>
          <input
            id="new name"
            type="text"
            placeholder="Enter Routine name"
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="new goal">Goal</label>
          <input
            id="new goal"
            type="text"
            placeholder="Enter Routine goal"
            value={newGoal}
            onChange={(event) => {
              setNewGoal(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="new isPublic">
            Do you want to make this routine public?
          </label>
          <input
            type="checkbox"
            id="new isPublic"
            value={newIsPublic}
            onChange={(event) => {
              setNewIsPublic(event.target.checked);
            }}
          ></input>
        </fieldset>
        <button className="auth-button">Update</button>
        {error && <p>{error.response.data.message}</p>}
      </form>
    </div>
  );
};

export default UpdateForm;