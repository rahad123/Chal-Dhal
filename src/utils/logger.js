import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",
  exitOnError: false,
  format: format.combine(
    format.errors({ stack: true }),
    format.json(),
    format.simple()
  ),
  transports: new transports.Console({}),
});

export { logger };
