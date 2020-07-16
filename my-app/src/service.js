const convertNetworkError = () => Promise.reject({ error: "NETWORK_ERROR" });

const convertError = (response) => {
  if (response.ok) {
    return response.json();
  }
  return response.json().then((err) => Promise.reject(err));
};

export const loginAsTeacher = (email, password) => {
  return fetch("/login/teacher", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ email: email, password: password }),
  })
    .catch(convertNetworkError)
    .then(convertError);
};

export const loginAsStudent = (email, password) => {
  return fetch("/login/student", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ email: email, password: password }),
  })
    .catch(convertNetworkError)
    .then(convertError);
};

export const registerAsTeacher = (email, name, phone, password) => {
  return fetch("/register/teacher", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ email: email, name: name, phone: phone, password: password }),
  })
    .catch(convertNetworkError)
    .then(convertError);
};

export const registerAsStudent = (email, parent_name, child_name, phone, password) => {
  return fetch("/register/student", {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ email: email, parent_name: parent_name, child_name: child_name, phone: phone, password: password }),
  })
    .catch(convertNetworkError)
    .then(convertError);
};

