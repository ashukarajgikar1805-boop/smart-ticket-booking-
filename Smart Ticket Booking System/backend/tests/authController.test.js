const { login } = require('../controllers/authController');
const User = require('../models/User');
const { generateToken } = require('../utils/token');

// Mock dependencies
jest.mock('../models/User');
jest.mock('../utils/token');

describe('Login Function', () => {
  let req, res;

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Setup request and response mocks
    req = {
      body: {},
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  test('Should login successfully with valid username and password', async () => {
    const mockUser = {
      _id: '123',
      username: 'testuser',
      email: 'test@example.com',
      isVerified: true,
      role: 'user',
      comparePassword: jest.fn().mockResolvedValue(true),
    };

    req.body = {
      username: 'testuser',
      password: 'password123',
    };

    User.findOne = jest.fn().mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    });

    generateToken.mockReturnValue('fake-jwt-token');

    await login(req, res);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Login successful',
      access: 'fake-jwt-token',
      username: 'testuser',
      role: 'user',
    });
  });

  test('Should login successfully with valid email and password', async () => {
    const mockUser = {
      _id: '123',
      username: 'testuser',
      email: 'test@example.com',
      isVerified: true,
      role: 'user',
      comparePassword: jest.fn().mockResolvedValue(true),
    };

    req.body = {
      username: 'test@example.com',
      password: 'password123',
    };

    User.findOne = jest.fn().mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    });

    generateToken.mockReturnValue('fake-jwt-token');

    await login(req, res);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Login successful',
      access: 'fake-jwt-token',
      username: 'testuser',
      role: 'user',
    });
  });

  test('Should return error if username/email is missing', async () => {
    req.body = {
      password: 'password123',
    };

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Username/email and password are required',
    });
  });

  test('Should return error if password is missing', async () => {
    req.body = {
      username: 'testuser',
    };

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Username/email and password are required',
    });
  });

  test('Should return error if user not found', async () => {
    req.body = {
      username: 'nonexistent',
      password: 'password123',
    };

    User.findOne = jest.fn().mockReturnValue({
      select: jest.fn().mockResolvedValue(null),
    });

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Invalid username or password',
    });
  });

  test('Should return error if email is not verified', async () => {
    const mockUser = {
      _id: '123',
      username: 'testuser',
      email: 'test@example.com',
      isVerified: false,
      role: 'user',
    };

    req.body = {
      username: 'testuser',
      password: 'password123',
    };

    User.findOne = jest.fn().mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    });

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Please verify your email first',
    });
  });

  test('Should return error if password is invalid', async () => {
    const mockUser = {
      _id: '123',
      username: 'testuser',
      email: 'test@example.com',
      isVerified: true,
      role: 'user',
      comparePassword: jest.fn().mockResolvedValue(false),
    };

    req.body = {
      username: 'testuser',
      password: 'wrongpassword',
    };

    User.findOne = jest.fn().mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    });

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Invalid username or password',
    });
  });

  test('Should handle database errors', async () => {
    req.body = {
      username: 'testuser',
      password: 'password123',
    };

    const dbError = new Error('Database connection failed');
    User.findOne = jest.fn().mockReturnValue({
      select: jest.fn().mockRejectedValue(dbError),
    });

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Login failed',
    });
  });

  test('Should trim whitespace from username', async () => {
    const mockUser = {
      _id: '123',
      username: 'testuser',
      email: 'test@example.com',
      isVerified: true,
      role: 'user',
      comparePassword: jest.fn().mockResolvedValue(true),
    };

    req.body = {
      username: '  testuser  ',
      password: 'password123',
    };

    User.findOne = jest.fn().mockReturnValue({
      select: jest.fn().mockResolvedValue(mockUser),
    });

    generateToken.mockReturnValue('fake-jwt-token');

    await login(req, res);

    expect(User.findOne).toHaveBeenCalledWith({
      $or: [{ username: 'testuser' }, { email: 'testuser' }],
    });
  });
});
