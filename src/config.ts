export default {
    apiUrl: (process.env.API_URL as string) || "https://api.chucknorris.io", // chuck norris api url
    port: process.env.PORT || 9001
  };
  