

export const setLoggeedInUser = user => {
    localStorage.setItem("authUser", JSON.stringify(user));
  };