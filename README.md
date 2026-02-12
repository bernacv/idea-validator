# App Landing Page

A modern, responsive landing page for your app with App Store and Google Play download buttons.

![Landing Page Preview](https://your-screenshot-url-here.png)

## 🚀 Deploy to GitHub Pages

### Step 1: Update Configuration

Edit `vite.config.ts` and set your repository name:

```typescript
// If your repo is "username.github.io", use:
base: '/',

// If your repo is "my-app", use:
base: '/my-app/',
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Install gh-pages (for automated deployment)

```bash
npm install gh-pages --save-dev
```

### Step 4: Build & Deploy

**Option A: Automated Deployment (Recommended)**

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

**Option B: Manual Deployment**

```bash
npm run build
```

Then manually upload the `dist` folder contents to your GitHub repository's `gh-pages` branch.

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/(root)** folder
5. Click **Save**

Your site will be live at: `https://yourusername.github.io/repository-name/`

---

## 📝 Customization Guide

### Update App Information

Edit `src/App.tsx`:

1. **App Name**: Replace all instances of "YourApp"
2. **Tagline**: Update the hero section text
3. **Description**: Change the app description
4. **Download Links**: Update App Store and Play Store URLs

### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: '#your-color',
    // ...
  }
}
```

### Update Features

In `src/App.tsx`, find the features array and update:

```javascript
{
  icon: <YourIcon className="w-6 h-6 text-your-color" />,
  title: 'Your Feature',
  description: 'Your feature description',
  color: 'from-your-color-50 to-your-color-50'
}
```

---

## 📁 Project Structure

```
app/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Custom styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── dist/                # Build output (generated)
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── package.json         # Dependencies
└── README.md            # This file
```

---

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📱 App Store Assets

### Required for App Store (iOS)
- **App Icon**: 1024×1024px
- **Screenshots**: 
  - iPhone 6.5" display: 1284×2778px
  - iPhone 5.5" display: 1242×2208px
  - iPad 12.9" display: 2048×2732px

### Required for Play Store (Android)
- **App Icon**: 512×512px
- **Feature Graphic**: 1024×500px
- **Screenshots**: 16:9 or 9:16 aspect ratio

### Recommended Tools
- **Figma** (Free) - Design icons and screenshots
- **Canva** (Free) - Templates for app store graphics
- **Previewed** (Free) - 3D device mockups
- **App Icon Generator** - Generate all icon sizes

---

## 📄 License

MIT License - feel free to use this template for your projects!

---

## 💡 Tips for Better Conversion

1. **Hero Section**: Make your value proposition clear in 5 seconds
2. **App Icon**: Use vibrant colors that stand out
3. **Screenshots**: Show real UI with text overlays explaining features
4. **Social Proof**: Add testimonials or user count
5. **CTA Buttons**: Make download buttons prominent and above the fold

---

## 🆘 Troubleshooting

### "404 File not found" on GitHub Pages
- Check that `base` in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is enabled in repository settings

### Assets not loading
- Verify all assets use relative paths
- Check browser console for 404 errors

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

Need help? Open an issue or check the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html#github-pages).
