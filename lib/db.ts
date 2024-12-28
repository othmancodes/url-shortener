import { PrismaClient } from '@prisma/client'; // Import the PrismaClient from the Prisma library to interact with the database

// Function to create a new instance of PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient(); // Returns a new PrismaClient instance
};

// Declaring a global object `globalThis` that includes the `prismaGlobal` property, which holds the PrismaClient instance
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>; // Define `prismaGlobal` as the type returned by `prismaClientSingleton` function
} & typeof global; // Extend the global object to include this new property

// Use a singleton pattern to ensure only one PrismaClient instance is used during development
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton(); // If `prismaGlobal` is already initialized, use it; otherwise, create a new instance

export default prisma; // Export the `prisma` instance so it can be used in other parts of the application

// In non-production environments (e.g., development), assign the created PrismaClient instance to `globalThis.prismaGlobal`
// This ensures that in development mode, the PrismaClient instance is reused across hot reloads, avoiding unnecessary database connections
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;
