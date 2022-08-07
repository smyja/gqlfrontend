const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://relenx.herokuapp.com";
console.log(process.env);
export const api = {
  auth: {
    login: `${baseURL}/api/v1/login/`,
    register: `${baseURL}/api/v1/signup/`,
    logout: `${baseURL}/api/v1/logout/`,
  },

  courses: {
    list: `${baseURL}/api/v1/dashboard/courses/`,
    create: `${baseURL}/api/blog/posts/create/`,
  },
};
