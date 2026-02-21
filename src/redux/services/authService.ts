import { User } from "@src/redux/slices/auth/authTypes";

const isExtension = typeof chrome !== "undefined" && chrome.identity;

const chromeAuth = {
  signIn: (): Promise<{ token: string; user: User }> => {
    return new Promise((resolve, reject) => {
      chrome.identity.getAuthToken({ interactive: true }, (token) => {
        if (chrome.runtime.lastError || !token) {
          reject(chrome.runtime.lastError);
          return;
        }

        const accessToken = token.toString();
        fetch(
          `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`
        )
          .then((response) => response.json())
          .then((user) => {
            resolve({
              token: accessToken,
              user: {
                email: user.email,
                id: user.id,
                name: user.name,
                picture: user.picture,
              },
            });
          })
          .catch(reject);
      });
    });
  },

  signOut: (): Promise<void> => {
    return new Promise((resolve, reject) => {
      chrome.identity.getAuthToken({ interactive: false }, (token) => {
        if (!token) {
          resolve();
          return;
        }
        const accessToken = token.toString();
        chrome.identity.removeCachedAuthToken({ token: accessToken }, () => {
          fetch(
            `https://accounts.google.com/o/oauth2/revoke?token=${accessToken}`
          )
            .then(() => resolve())
            .catch(reject);
        });
      });
    });
  },
};

const webAuth = {
  signIn: (): Promise<{ token: string; user: User }> => {
    return new Promise((_resolve, reject) => {
      const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
      if (!clientId) {
        reject(new Error("Google Client ID not configured"));
        return;
      }

      const redirectUri = window.location.origin;
      const scope = "openid email profile";
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

      window.location.href = authUrl;
    });
  },

  signOut: (): Promise<void> => {
    return Promise.resolve();
  },
};

export const googleAuth = isExtension ? chromeAuth : webAuth;
