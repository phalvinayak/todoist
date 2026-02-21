import { User } from "@src/redux/slices/auth/authTypes";

export const handleWebAuthCallback = async (): Promise<{ token: string; user: User } | null> => {
  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');
  
  if (!code) return null;

  try {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_GOOGLE_CLIENT_SECRET;
    const redirectUri = window.location.origin;

    // Exchange code for token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      body: new URLSearchParams({
        client_id: clientId!,
        client_secret: clientSecret!,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    });

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user info
    const userResponse = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`);
    const userData = await userResponse.json();

    // Clear URL params
    window.history.replaceState({}, document.title, window.location.pathname);

    return {
      token: accessToken,
      user: {
        email: userData.email,
        id: userData.id,
        name: userData.name,
        picture: userData.picture,
      },
    };
  } catch (error) {
    console.error('Web auth callback failed:', error);
    return null;
  }
};