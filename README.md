# Todo Chrome Extension

A Chrome extension for managing todos with Google OAuth authentication.

## Setup Instructions

### 1. Environment Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Google OAuth credentials:
   ```
   VITE_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
   VITE_GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

### 2. Google OAuth Setup

Follow the instructions in `GOOGLE_SSO_SETUP.md` to configure Google OAuth for your application.

### 3. Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the extension:
   ```bash
   npm run build
   ```

3. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked" and select the `dist` folder

## Development

Run in development mode:
```bash
npm run dev
```

## Important Notes

- Never commit `.env` files to version control
- The `.env.example` file shows the required environment variables
- Make sure to configure Google OAuth before running the application