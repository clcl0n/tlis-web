import { hashPassword, checkPassword } from '../src/utils/password.utils';

test('Hash password', () => {
    const password = 'test';
    const hash = hashPassword(password);
    expect(checkPassword(password, hash)).toBeTruthy();
});
