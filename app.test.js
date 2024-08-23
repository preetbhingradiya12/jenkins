const app = require('./index')
const supertest = require('supertest')
const requset = supertest(app)

describe('tesst endpoint', () => {
    it('should return response and message', async() => {
        const response = await requset.get('/test')
        expect(response.status).toBe(200);
        expect(response.text).toBe('Test node emdpoint is work');
    });

    it('should return error message when name or email is missing', async() => {
        const response = await requset.post('/new/user').send({})
        expect(response.status).toBe(404);
        expect(response.text).toBe('Enter name or email');
    });

    it('should return a list of users', async() => {
        const response = await requset.get('/user')
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});