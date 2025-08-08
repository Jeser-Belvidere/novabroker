export default defineEventHandler(() => {
  return {
    cpuUsage: process.cpuUsage(),
    ramUsage: process.memoryUsage(),
  };
});
