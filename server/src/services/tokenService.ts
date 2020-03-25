import { getRefreshTokenClaims } from '@utils/token.utils';
import { includesRefreshToken, removeRefreshToken } from '@utils/cache.utils';

export const createNewTokenService = () => {};

export const refreshTokenService = () => {};

export const deleteRefreshTokenService = (refreshToken: string) => {
    const claims = getRefreshTokenClaims(refreshToken);

    if (!includesRefreshToken(claims.user)) throw new Error('');

    removeRefreshToken(claims.user);
};
