
#!/bin/bash

echo "🚀 Building PWA for deployment..."

# Build the project
npm run build

# Initialize Capacitor if not already done
if [ ! -f "capacitor.config.ts" ]; then
  npx cap init
fi

# Copy web assets to native projects
npx cap copy

# Update native dependencies
npx cap update

echo "✅ PWA build complete!"
echo "📱 To run on mobile:"
echo "   Android: npx cap run android"
echo "   iOS: npx cap run ios"
echo "🌐 To deploy: Push to GitHub and enable GitHub Pages"
