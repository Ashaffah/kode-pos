import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event", // "stdout" || "event"
      level: "query",
    },
    {
      emit: "stdout", // "stdout" || "event"
      level: "error",
    },
    {
      emit: "stdout", // "stdout" || "event"
      level: "info",
    },
    {
      emit: "stdout", // "stdout" || "event"
      level: "warn",
    },
  ],
});

export default prisma;
