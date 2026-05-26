import request from 'supertest';
import app from '../../server';

describe('Auth - /api/login', () => {
  it('authenticates admin with demo credentials', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: process.env.ADMIN_EMAIL || 'admin@example.com', password: process.env.ADMIN_PASSWORD || 'DemoAdminPass123!' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body).toHaveProperty('user');
    expect(res.body.user.email).toBe(process.env.ADMIN_EMAIL || 'admin@example.com');
  });
});
