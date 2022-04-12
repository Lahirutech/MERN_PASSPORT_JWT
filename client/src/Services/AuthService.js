export default {
  isAuthenticated: (token) => {
    return fetch(" http://localhost:5001/auth/authenticated", {
      headers: {
        "Content-Type": "application/json",
        'Accept': "application/json",
        Authorization: token,
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { isAuthenticated: false, user: { username: "", role: "" } };
      }
    });
  },
};
