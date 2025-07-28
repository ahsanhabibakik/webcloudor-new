# Webcloudor Brand Colors

## **MUST FOLLOW RULES** 🎨

This document defines the official Webcloudor brand colors sampled directly from the logo and wordmark. **These colors MUST be used consistently across all website components and branding.**

---

## **Brand Color Palette**

### **1. Webcloudor Blue (Primary Brand Color)**
- **HEX:** `#1496EF`
- **RGB:** `20, 150, 239`
- **Tailwind:** `bg-webcloudor-primary` / `text-webcloudor-primary`
- **Usage:** 
  - Navbar backgrounds
  - Primary call-to-action buttons
  - Hero sections
  - Link hover states
  - Main brand elements

### **2. Deep Gradient Blue**
- **HEX:** `#0066C2`
- **RGB:** `0, 102, 194`
- **Tailwind:** `bg-webcloudor-deep` / `text-webcloudor-deep`
- **Usage:** 
  - Footer backgrounds
  - Gradient endings
  - Secondary buttons
  - Icon shadows
  - Depth elements

### **3. Logo Shadow/Accent Blue**
- **HEX:** `#1E63B1`
- **RGB:** `30, 99, 177`
- **Tailwind:** `bg-webcloudor-accent` / `text-webcloudor-accent`
- **Usage:** 
  - Subtle gradients
  - Hover states
  - Secondary elements
  - Border accents

### **4. Yellow/Gold (Gradient Top)**
- **HEX:** `#FFD43B`
- **RGB:** `255, 212, 59`
- **Tailwind:** `bg-webcloudor-yellow` / `text-webcloudor-yellow`
- **Usage:** 
  - Gradient highlights
  - Icon tops
  - Accent elements
  - Warning states

### **5. Orange (Gradient Bottom)**
- **HEX:** `#FF9000`
- **RGB:** `255, 144, 0`
- **Tailwind:** `bg-webcloudor-orange` / `text-webcloudor-orange`
- **Usage:** 
  - Gradient bases
  - Active states
  - Accent buttons
  - Energy elements

### **6. Pure White**
- **HEX:** `#FFFFFF`
- **RGB:** `255, 255, 255`
- **Tailwind:** `bg-webcloudor-white` / `text-webcloudor-white`
- **Usage:** 
  - Text on blue backgrounds
  - Clean backgrounds
  - Icon contrast
  - Card backgrounds

---

## **Brand Gradients (Pre-defined in Tailwind)**

### **Primary Logo Gradient**
- **Tailwind:** `bg-webcloudor-gradient`
- **CSS:** `linear-gradient(135deg, #FFD43B 0%, #FF9000 100%)`
- **Usage:** Logo backgrounds, premium buttons, highlights

### **Blue Brand Gradient**
- **Tailwind:** `bg-webcloudor-blue-gradient`
- **CSS:** `linear-gradient(135deg, #1496EF 0%, #0066C2 100%)`
- **Usage:** Headers, cards, feature sections

### **Radial Brand Gradient**
- **Tailwind:** `bg-webcloudor-radial`
- **CSS:** `radial-gradient(circle, #1496EF 0%, #0066C2 100%)`
- **Usage:** Logo backgrounds, circular elements

### **Hero Section Gradient**
- **Tailwind:** `bg-webcloudor-hero`
- **CSS:** `linear-gradient(135deg, #1496EF 0%, #1E63B1 50%, #0066C2 100%)`
- **Usage:** Main hero sections, landing pages

---

## **🚨 MANDATORY USAGE RULES**

### **DO's:**
✅ **ALWAYS use these exact HEX codes** - no variations  
✅ **Use `bg-webcloudor-primary` for main CTAs**  
✅ **Use `bg-webcloudor-gradient` for logo elements**  
✅ **Use white text on blue backgrounds**  
✅ **Use blue gradients for headers/footers**  
✅ **Test contrast ratios (min 4.5:1)**  

### **DON'Ts:**
❌ **Never use random blues** - only brand blues  
❌ **Never use generic orange/yellow** - only brand gradients  
❌ **Never mix with non-brand colors**  
❌ **Never use low contrast combinations**  
❌ **Never modify HEX values**  

---

## **Component Usage Examples**

### **Navbar**
```tsx
<nav className="bg-webcloudor-primary text-webcloudor-white">
```

### **CTA Buttons**
```tsx
<button className="bg-webcloudor-gradient text-white hover:bg-webcloudor-blue-gradient">
```

### **Hero Section**
```tsx
<section className="bg-webcloudor-hero text-webcloudor-white">
```

### **Footer**
```tsx
<footer className="bg-webcloudor-deep text-webcloudor-white">
```

### **Cards with Accent**
```tsx
<div className="bg-white border-l-4 border-webcloudor-accent">
```

---

## **Accessibility Requirements**

- **Text on `#1496EF`:** Use white text only
- **Text on `#0066C2`:** Use white text only  
- **Text on gradients:** Use white text only
- **Small text:** Always test contrast ratios
- **Links:** Use `text-webcloudor-primary` with `hover:text-webcloudor-accent`

---

## **CSS Variables (Alternative Usage)**

```css
:root {
  --webcloudor-primary: #1496EF;
  --webcloudor-deep: #0066C2;
  --webcloudor-accent: #1E63B1;
  --webcloudor-yellow: #FFD43B;
  --webcloudor-orange: #FF9000;
  --webcloudor-white: #FFFFFF;
  
  --webcloudor-gradient: linear-gradient(135deg, #FFD43B 0%, #FF9000 100%);
  --webcloudor-blue-gradient: linear-gradient(135deg, #1496EF 0%, #0066C2 100%);
}
```

---

**⚠️ IMPORTANT:** These colors are sampled directly from the Webcloudor logo and represent the official brand identity. Deviation from these colors breaks brand consistency and is not permitted.
