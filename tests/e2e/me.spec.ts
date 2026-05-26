import request from 'supertest';
import app from '../../server';

describe('E2E - /api/me', () => {
  it('returns profile when authenticated', async () => {
    const login = await request(app)
      .post('/api/login')
      .send({ email: process.env.ADMIN_EMAIL || 'admin@example.com', password: process.env.ADMIN_PASSWORD || 'DemoAdminPass123!' });

    expect(login.status).toBe(200);
    const token = login.body.token;

    const res = await request(app).get('/api/me').set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('email');
  });
});
