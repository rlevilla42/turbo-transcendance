const API_BASE_URL = "http://localhost:8080/auth";

export async function registerUser(credentials: {username: string; password: string;}) : Promise<void> {
    const response = await fetch(`${API_BASE_URL}/register`, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(credentials)
  });

  if (!response.ok) {
    throw new Error("Error lors de l'inscription");
  }
  }

  export async function loginUser(credentials: {username: string; password: string;}) : Promise<{token: string; username: String}> {
    try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      throw new Error("login: Error")
    }

    const dataLog = await response.json();
    return dataLog;
  }
    catch(error) {
      console.error("error lors de la connexion: ", error);
      throw error;
    }
  }