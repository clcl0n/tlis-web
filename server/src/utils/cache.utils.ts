import * as NodeCache from 'node-cache';

const refreshTokenCache = new NodeCache({
    stdTTL: 3600,
    checkperiod: 100
});

export const addNewRefreshToken = (username: string, refreshToken: string): void => {
    refreshTokenCache.set(username, refreshToken);
};

export const removeRefreshToken = (username: string): void => {
    refreshTokenCache.del(username);
};

export const includesRefreshToken = (username: string): boolean => {
    return refreshTokenCache.has(username);
};
