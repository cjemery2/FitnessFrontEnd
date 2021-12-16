import React, { useState } from "react";
import { updateActivity } from "../api";

const UpdateActivityForm = ({ id }) => {
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState("");

  return (
    <div>
      <form
        id="updateActivity"
        onSubmit={async (event) => {
          event.preventDefault();

          try {
            await updateActivity(id, count, duration);

            setCount(0);
            setDuration(0);
            setError("");
          } catch (error) {
            setError(error);
          }
        }}
      >
        <fieldset className="auth-component-input">
          <label htmlFor="count">Count</label>
          <input
            id="count"
            type="number"
            placeholder="Enter Activity count"
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            placeholder="Enter Activity Duration"
            value={duration}
            onChange={(event) => {
              setDuration(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="auth-button">Update</button>
        {error && <p>{error.response.data.message}</p>}
      </form>
    </div>
  );
};

export default UpdateActivityForm;