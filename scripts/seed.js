import mongoose from "mongoose";
import { faker } from "@faker-js/faker";
import Lead from "../models/Lead.js";

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });


mongoose.connect(process.env.MONGODB_URI, {
  dbName: "lead-dashboard"
});


const statuses = ["new", "in-progress", "converted"];
const sources = ["Google", "LinkedIn", "Instagram", "Referral"];

async function seed() {
  await Lead.deleteMany();

  const leads = Array.from({ length: 500 }).map(() => ({
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    status: faker.helpers.arrayElement(statuses),
    source: faker.helpers.arrayElement(sources),
  }));

  await Lead.insertMany(leads);
  console.log("Seeded 500 leads");
  process.exit();
}

seed();
