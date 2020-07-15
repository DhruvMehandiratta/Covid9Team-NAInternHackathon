const convertNetworkError = () => Promise.reject({ error: "NETWORK_ERROR" });

const convertError = (response) => {
  if (response.ok) {
    return response.json();
  }
  return response.json().then((err) => Promise.reject(err));
};

export const fetchLoginStatus = () => {
    return fetch("/session", {
      method: "GET",
    })
      .catch(convertNetworkError)
      .then(convertError);
  };
  
  export const postLogin = (userEmail, password) => {
    return fetch("/session", {
      method: "POST",
      headers: new Headers({
        "content-type": "application/json",
      }),
      body: JSON.stringify({ userEmail, password }),
    })
      .catch(convertNetworkError)
      .then(convertError);
  };
  
  export const fetchLogout = () => {
    return fetch("/session", {
      method: "DELETE",
    })
      .catch(convertNetworkError)
      .then((response) => {
        return response.ok;
      });
  };