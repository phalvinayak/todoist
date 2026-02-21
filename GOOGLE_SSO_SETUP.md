# Google SSO Setup Guide

This app supports both Chrome Extension and Web deployment with automatic environment detection.

## Chrome Extension Setup

### 1. Google Cloud Console Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Choose "Chrome Extension" as application type
6. Add your extension ID (get it after loading unpacked extension)
7. Copy the Client ID

### 2. Update Manifest

Replace `YOUR_GOOGLE_CLIENT_ID` in `src/manifest.json` with your actual Google Client ID:

```json
"oauth2": {
  "client_id": "YOUR_ACTUAL_CLIENT_ID.apps.googleusercontent.com",
  "scopes": ["openid", "email", "profile"]
}
```

### 3. Build and Test Extension

1. Run `npm run build`
2. Load the extension in Chrome
3. The extension will now require Google authentication

## Web Application Setup

### 1. Google Cloud Console Setup

1. In the same Google Cloud project, create another OAuth 2.0 Client ID
2. Choose "Web application" as application type
3. Add authorized redirect URIs:
   - `http://localhost:5173` (for development)
   - `https://yourdomain.com` (for production)
4. Copy both Client ID and Client Secret

### 2. Environment Configuration

1. Copy `.env.example` to `.env`
2. Add your Google OAuth credentials:

```env
VITE_GOOGLE_CLIENT_ID=your_web_client_id.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_SECRET=your_client_secret
```

### 3. Build and Deploy Web App

1. Run `npm run build`
2. Deploy the `dist` folder to your web server
3. Users will be redirected to Google for authentication

## Features Added

- ✅ Dual deployment support (Extension + Web)
- ✅ Automatic environment detection
- ✅ Google OAuth integration
- ✅ Protected routes with AuthGuard
- ✅ User profile display in navbar
- ✅ Logout functionality
- ✅ Persistent authentication state
- ✅ Automatic login/logout flow