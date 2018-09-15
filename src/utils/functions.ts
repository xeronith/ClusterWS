export function logError<T>(data: T): any {
  return process.stdout.write(`\x1b[31mError PID ${process.pid}:\x1b[0m  ${data}\n`);
}