# Gary Kamoto Mhone - Space Portfolio 🚀

A immersive space-themed portfolio website showcasing my skills as a Full-Stack Developer and Cybersecurity Specialist.

## 🌟 Features

- **Immersive Space Theme**: Dynamic starfield background with floating planets
- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth animations and hover effects
- **Performance Optimized**: Adaptive performance mode for low-end devices
- **Modern Tech Stack**: Vanilla HTML, CSS, and JavaScript (no dependencies)
- **Accessibility**: Supports reduced motion preferences and screen readers

## 🛸 File Structure

```
├── index.html                 # Main HTML file
├── css/
│   ├── styles.css            # Core styles and variables
│   ├── components.css        # Component-specific styles
│   ├── contact-footer.css    # Contact form and footer styles
│   └── responsive.css        # Mobile and responsive styles
├── js/
│   ├── starfield.js         # Starfield animation and effects
│   ├── navigation.js        # Navigation and menu functionality
│   ├── animations.js        # Scroll animations and interactions
│   └── main.js              # Main application logic
└── README.md                # This file
```

## 🚀 Deployment to GitHub Pages

### Method 1: Direct Upload

1. **Create a GitHub repository** named `your-username.github.io`
2. **Upload all files** maintaining the folder structure:
   ```
   your-username.github.io/
   ├── index.html
   ├── css/
   ├── js/
   └── README.md
   ```
3. **Enable GitHub Pages** in repository settings
4. Your site will be live at `https://your-username.github.io`

### Method 2: Git Command Line

```bash
# Clone your repository
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io

# Add all files
cp -r /path/to/portfolio/* .

# Commit and push
git add .
git commit -m "Deploy space portfolio"
git push origin main
```

### Method 3: Project Repository

If you want to use a project repository instead:

1. Create a repository with any name (e.g., `space-portfolio`)
2. Upload files to the repository
3. Go to Settings → Pages
4. Select source branch (usually `main`)
5. Your site will be at `https://your-username.github.io/repository-name`

## ⚙️ Customization

### Personal Information
Edit `index.html` to update:
- Contact information
- Social media links
- Professional experience
- Skills and interests
- Project details

### Styling
Modify CSS variables in `css/styles.css`:
```css
:root {
    --primary: #0a0a2a;
    --secondary: #0f3460;
    --accent: #4cc9f0;
    --accent-alt: #7b68ee;
    /* Add your custom colors */
}
```

### Performance Settings
Adjust starfield performance in `js/starfield.js`:
```javascript
// Reduce stars for better performance
const starsCount = isMobile ? 50 : 100;
```

## 🔧 Development

### Local Development
1. Use a local server (VS Code Live Server, Python HTTP server, etc.)
2. Open `index.html` in your browser
3. Use Ctrl+D to enable debug mode

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Touch-friendly navigation
- Reduced animations on mobile
- Optimized performance for mobile devices
- Proper viewport scaling

## 🎨 Design Features

### Space Theme Elements
- **Animated starfield** with parallax scrolling
- **Floating planets** with orbital animation
- **Cosmic color scheme** with neon accents
- **Glowing effects** and hover interactions
- **Smooth transitions** between sections

### Interactive Components
- **Mobile hamburger menu** with smooth transitions
- **Scroll-triggered animations** for content reveals
- **Particle trail effects** on desktop
- **Dynamic button states** with visual feedback
- **Form validation** with custom notifications

## 🚨 Troubleshooting

### Common Issues

**Site not loading on GitHub Pages:**
- Check that `index.html` is in the root directory
- Ensure GitHub Pages is enabled in repository settings
- Wait up to 10 minutes for deployment

**Animations too slow:**
- Performance mode will auto-enable on low-end devices
- Manually enable with: `document.body.classList.add('performance-mode')`

**Mobile menu not working:**
- Ensure all JavaScript files are properly linked
- Check browser console for errors

### Performance Tips

1. **Reduce star count** for older devices
2. **Disable particle effects** on mobile
3. **Use performance mode** for better frame rates
4. **Optimize images** if you add custom graphics

## 📞 Contact

- **Email**: kamotomhone@gmail.com
- **Phone**: +260 973 872 723
- **LinkedIn**: [linkedin.com/in/gary-mhone](https://www.linkedin.com/in/gary-mhone)
- **Telegram**: @IAmBlackHat
- **Discord**: cyb3r.k1d

## 🔄 Updates

To update your portfolio:
1. Modify the relevant files
2. Test locally
3. Push changes to GitHub
4. GitHub Pages will auto-deploy

## 📄 License

This portfolio template is open source. Feel free to use it as inspiration for your own space-themed portfolio!

---

**Built in the cosmos by "Cyb3rK1d" Mhone**

*Let's build something awesome! 🚀*