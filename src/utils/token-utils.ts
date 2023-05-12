export const isTokenExpired = (
  token: string | null,
  expiresIn: string | null
): boolean => {
  if (!token || !expiresIn) {
    return true;
  }

  // Replace this with your actual token validation and expiration check logic
  const expiresInDays = parseInt(expiresIn.split(' ')[0], 10);
  const currentTime = Math.floor(Date.now() / 1000);
  const tokenExpirationTime = currentTime + expiresInDays * 86400;

  return currentTime > tokenExpirationTime;
};
