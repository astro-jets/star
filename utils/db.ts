import mongoose from "mongoose";
declare global {
  var mongoose: any;
}

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    console.log("Reusing existing database connection.");
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 5,
    };
    console.log("Establishing new database connection...");
    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("Database connection established.");
        return mongoose;
      })
      .catch((err) => {
        console.error("Database connection error:", err);
        throw err;
      });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    console.error("Error resolving database connection:", e);
    cached.promise = null;
    throw e;
  }
  return cached.conn;
}

export default dbConnect;
