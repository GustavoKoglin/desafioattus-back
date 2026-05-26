/// <reference types="jest" />
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

// small helper to generate an id (avoids ESM uuid import issues in Jest)
const uuidv4 = () => 'id-' + Math.random().toString(36).substring(2, 10);

// Ensure a clean db.json for tests with a known admin user
const DB_FILE = path.join(process.cwd(), 'db.json');

beforeAll(() => {
  const adminPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'DemoAdminPass123!', 10);
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com';

  const initialData = {
    users: [
      {
        id: uuidv4(),
        name: 'Admin Demo',
        email: adminEmail,
        password: adminPassword,
        role: 'Admin',
        type: 'Platform',
        cpf: '000.000.000-00',
        phone: '00000000000',
        phoneType: 'celular'
      }
    ],
    logs: []
  };

  fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
});

afterAll(() => {
  // cleanup db.json after tests
  try {
    if (fs.existsSync(DB_FILE)) fs.unlinkSync(DB_FILE);
  } catch (e) {
    // ignore
  }
});
