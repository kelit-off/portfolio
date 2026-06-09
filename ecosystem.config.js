module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      cwd: "./",
      instances: "1", // ou 1 si tu veux juste un process
      exec_mode: "fork", // ou "fork" si tu veux pas de cluster
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
