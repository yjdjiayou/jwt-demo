import jwt from 'jsonwebtoken';

export function decode(token) {
    return jwt.decode(token);
}