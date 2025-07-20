# Project Images Folder

This folder contains all images used in the portfolio website projects. Follow these guidelines to maintain consistency and optimal performance.

## 📁 Folder Structure

Organize images by project with the following structure:

images/
├── project-1/
│   ├── hero.jpg
│   ├── screenshots/
│   │   ├── desktop-1.jpg
│   │   ├── desktop-2.jpg
│   │   └── mobile-1.jpg
│   ├── thumbnails/
│   │   ├── hero-thumb.jpg
│   │   └── gallery-thumb.jpg
│   └── assets/
│       ├── logo.png
│       └── icon.svg
├── project-2/
│   └── ...
└── shared/
    ├── placeholder.jpg
    └── fallback.png
## 🖼️ Recommended Image Formats & Sizes

### **Formats**
- **JPEG (.jpg)**: Photos, screenshots, complex images
- **PNG (.png)**: Logos, icons, images with transparency
- **SVG (.svg)**: Vector graphics, simple icons, logos
- **WebP (.webp)**: Modern format for better compression (when supported)

### **Sizes**
- **Hero images**: 1920x1080px (16:9 aspect ratio)
- **Project thumbnails**: 600x400px (3:2 aspect ratio)
- **Gallery images**: 1200x800px (3:2 aspect ratio)
- **Mobile screenshots**: 375x667px (iPhone SE dimensions)
- **Desktop screenshots**: 1440x900px (16:10 aspect ratio)
- **Logos/Icons**: 256x256px (square) or vector SVG

## 📝 Naming Conventions

Use lowercase, descriptive names with hyphens:

### **Project Files**
project-slug/
├── hero.jpg                    # Main project image
├── logo.png                    # Project logo
├── icon.svg                    # Project icon
├── screenshots/
│   ├── desktop-home.jpg        # Desktop homepage
│   ├── desktop-dashboard.jpg   # Desktop dashboard
│   ├── mobile-home.jpg         # Mobile homepage
│   └── mobile-menu.jpg         # Mobile menu
├── thumbnails/
│   ├── hero-thumb.jpg          # Hero thumbnail (600x400)
│   └── gallery-thumb.jpg       # Gallery thumbnail (300x200)
└── assets/
    ├── feature-diagram.svg     # Feature illustrations
    └── tech-stack-icon.png     # Technology icons
### **Naming Rules**
- Use project slug as folder name (e.g., `e-commerce-app`)
- Separate words with hyphens (`-`)
- Include device type for responsive images (`desktop-`, `mobile-`, `tablet-`)
- Add descriptive context (`home`, `dashboard`, `login`, `checkout`)
- Use consistent suffixes (`-thumb` for thumbnails, `-hero` for main images)

## 💻 Referencing Images in Code

### **In React Components**
// Import images
import projectHero from '@/images/e-commerce-app/hero.jpg'
import projectLogo from '@/images/e-commerce-app/logo.png'
import desktopScreenshot from '@/images/e-commerce-app/screenshots/desktop-home.jpg'

// Use in component
<img 
  src={projectHero} 
  alt="E-commerce app hero image"
  className="w-full h-64 object-cover rounded-lg"
/>
### **Dynamic Imports**
// For dynamic project loading
const getProjectImage = (projectSlug, imageName) => {
  return `/images/${projectSlug}/${imageName}`
}

// Usage
<img 
  src={getProjectImage('e-commerce-app', 'hero.jpg')}
  alt="Project hero"
/>
### **With Next.js Image Component**
import Image from 'next/image'
import heroImage from '@/images/e-commerce-app/hero.jpg'

<Image
  src={heroImage}
  alt="Project hero"
  width={1920}
  height={1080}
  className="rounded-lg"
  priority // For above-the-fold images
/>
### **Responsive Images**
// Multiple sizes for responsive design
<picture>
  <source 
    media="(max-width: 768px)" 
    srcSet="/images/project-1/mobile-hero.jpg" 
  />
  <source 
    media="(min-width: 769px)" 
    srcSet="/images/project-1/desktop-hero.jpg" 
  />
  <img 
    src="/images/project-1/hero.jpg" 
    alt="Project hero"
    className="w-full h-auto"
  />
</picture>
## ⚡ Image Optimization

### **Before Adding Images**
1. **Resize** images to appropriate dimensions
2. **Compress** without losing quality
3. **Convert** to modern formats when possible
4. **Generate** multiple sizes for responsive design

### **Optimization Tools**
- **Online**: TinyPNG, ImageOptim, Squoosh
- **CLI**: `imagemin`, `sharp`, `cwebp`
- **Design Tools**: Export for web from Figma/Photoshop

### **Compression Guidelines**
- **JPEG Quality**: 80-90% for hero images, 70-80% for thumbnails
- **PNG**: Use PNG-8 for simple graphics, PNG-24 for complex images
- **WebP**: 80% quality, generates ~30% smaller files than JPEG

### **Automated Optimization Script**
# Install sharp for Node.js optimization
npm install sharp

# Example optimization script
const sharp = require('sharp');

sharp('input.jpg')
  .resize(1920, 1080)
  .jpeg({ quality: 85 })
  .toFile('output.jpg');
## 🎯 Best Practices

### **Performance**
- Keep hero images under 500KB
- Thumbnails should be under 100KB
- Generate WebP versions for modern browsers
- Use lazy loading for gallery images

### **Accessibility**
- Always include descriptive `alt` attributes
- Use meaningful filenames that describe content
- Ensure sufficient color contrast in text overlays

### **SEO**
- Use descriptive filenames (`contact-form-screenshot.jpg` vs `img001.jpg`)
- Include relevant keywords in alt text
- Optimize file sizes for faster loading

### **Organization**
- Group related images in project folders
- Maintain consistent naming across projects
- Document any special requirements per project
- Regular cleanup of unused images

## 📋 Quick Checklist

Before adding images to this folder:

- [ ] Image is properly sized for intended use
- [ ] File is compressed/optimized
- [ ] Filename follows naming conventions
- [ ] Image is placed in correct project folder
- [ ] Alt text planned for accessibility
- [ ] Responsive versions created if needed
- [ ] File size is appropriate for web use
- [ ] Image format is optimal for content type

## 🔧 Maintenance

### **Regular Tasks**
- Review and remove unused images monthly
- Update image compression as tools improve
- Generate WebP versions for better performance
- Audit file sizes and optimize large images

### **When Adding New Projects**
1. Create new project folder with consistent naming
2. Add all required image types (hero, thumbnails, screenshots)
3. Optimize all images before committing
4. Update project data to reference new images
5. Test responsive behavior across devices

---

*For questions about image requirements or optimization, refer to the project documentation or contact the development team.*