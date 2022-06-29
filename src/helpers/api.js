const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://9e12a0dd-f8e4-4af6-b5a7-63abeb524c6c.id.repl.co";
console.log(process.env);
export const api = {
  auth: {
    login: `${baseURL}/dj-rest-auth/login/`,
    register:`${baseURL}/dj-rest-auth/registration/`,
    logout: `${baseURL}/dj-rest-auth/logout/`
  },

  posts: {
    list: `${baseURL}/api/blog/posts/`,
    create: `${baseURL}/api/blog/posts/create/`,
  },
};