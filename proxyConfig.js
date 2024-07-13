const proxyConfig = {
  "/api": {
    target: "https://api.timbu.cloud",
    changeOrigin: true,
    rewrite: (path) => path.replace(/^\/api/, ""),
  },
};

export default proxyConfig;

