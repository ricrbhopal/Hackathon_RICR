// seedAdmins.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import Admin from "../models/adminRegisterModel.js"; // adjust path if needed

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://contact_db_user:QL7z0tkGxA7Y60ri@ricr.wp5wt34.mongodb.net/Hackathon_RICR_DB";
const SALT_ROUNDS = parseInt(process.env.BCRYPT_ROUNDS || "10", 10);

if (!MONGO_URI) {
  process.exit(1);
}

const adminData = [
  {
    username: "sampleadmin",
    email: "sampleadmin@example.com",
    phone: "6268923703",
    password: "sampleadmin123",
    role: "admin",
  },
  {
    username: "ashish",
    email: "ashish@ricr.in",
    phone: "9907096014",
    password: "Thakur@17",
    role: "superadmin",
  },
   {
    username: "rajVardhan",
    email: "rajvardhan@ricr.in",
    phone: "7340862969",
    password: "Rajv@123",
    role: "superadmin",
  },
];

const seedAdmins = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
    // Ensure indexes exist for the unique constraint
    await Admin.createIndexes().catch((err) => {
      // index creation might already be in progress or completed
      console.warn("createIndexes warning:", err.message || err);
    });

    for (const admin of adminData) {
      const existing = await Admin.findOne({ email: admin.email }).lean();
      if (existing) {
        continue;
      }

      const hashed = await bcrypt.hash(admin.password, SALT_ROUNDS);

      const doc = new Admin({
        username: admin.username,
        email: admin.email,
        phone: admin.phone,
        password: hashed,
        role: admin.role,
      });

      await doc.save();

    }


    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("Error seeding admins:", err);
    try {
      await mongoose.disconnect();
    } catch (_) {}
    process.exit(1);
  }
};

seedAdmins();
