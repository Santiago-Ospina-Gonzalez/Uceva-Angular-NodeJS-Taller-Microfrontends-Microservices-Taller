export const envs = {
  PORT: Number(process.env['PORT'] ?? 3005),
  PUBLIC_PATH: process.env['PUBLIC_PATH'] ?? 'public',
};
