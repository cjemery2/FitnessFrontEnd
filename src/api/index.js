import axios from "axios";
import { getUser, getToken } from "../auth";

const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

//example of an api call with axios

export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutine(name, goal, isPublic) {
  const token = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/routines`,
      {
        name,
        goal,
        isPublic,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createActivity(name, description) {
  try {
    const { data } = await axios.post(`${BASE}/activities`, {
      name,
      description,
    });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getUsersRoutine() {
  const user = getUser();
  try {
    const { data } = await axios.get(`${BASE}/users/${user}/routines`);

    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutine(id) {
  const token = getToken();
  try {
    const { data } = await axios.delete(`${BASE}/routines/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateRoutine(id, name, goal, isPublic) {
  const token = getToken();
  try {
    const { data } = await axios.patch(
      `${BASE}/routines/${id}`,
      {
        name,
        goal,
        isPublic,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function addActivityToRoutine(
  routineId,
  activityId,
  count,
  duration
) {
  try {
    const { data } = await axios.post(
      `${BASE}/routines/${routineId}/activities`,
      { activityId, count, duration }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteActivity(id) {
  console.log('asdfasdf', id)
  const token = getToken();
  console.log(token, 'token')

  try {
    const { data } = await axios.delete(`${BASE}/routine_activities/${id}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function updateActivity(id, count, duration) {
  const token = getToken();
  console.log(token, "token!!!!!");
  try {
    const { data } = await axios.patch(
      `${BASE}/routine_activities/${id}`,
      {
        count,
        duration,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}