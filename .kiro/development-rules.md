# Webcloudor Development Rules

## 🎨 **MANDATORY BRAND COLOR RULES**

These rules MUST be followed by ALL developers working on the Webcloudor project. No exceptions.

---

## **1. Brand Color Usage (STRICT)**

### **✅ REQUIRED:**
- **ONLY use colors from `src/lib/constants/brand-colors.ts`**
- **ONLY use Tailwind classes starting with `bg-webcloudor-`, `text-webcloudor-`, etc.**
- **Import brand colors:** `import { WEBCLOUDOR_COLORS, WEBCLOUDOR_TAILWIND } from '@/lib/constants/brand-colors'`

### **❌ FORBIDDEN:**
- Using random blue colors (`bg-blue-500`, `#0000FF`, etc.)
- Using generic orange/yellow (`bg-orange-500`, `bg-yellow-400`, etc.)
- Hardcoding any colors not in the brand palette
- Creating custom gradients outside of the defined brand gradients

---

## **2. Component Color Requirements**

### **Navigation & Layout:**
```tsx
// ✅ CORRECT
<nav className="bg-webcloudor-primary text-webcloudor-white">
<footer className="bg-webcloudor-deep text-webcloudor-white">

// ❌ WRONG
<nav className="bg-blue-600 text-white">
<footer className="bg-gray-800 text-white">
```

### **Buttons & CTAs:**
```tsx
// ✅ CORRECT - Primary CTA
<button className="bg-webcloudor-gradient text-white hover:bg-webcloudor-blue-gradient">

// ✅ CORRECT - Secondary button
<button className="bg-webcloudor-accent text-white hover:bg-webcloudor-primary">

// ❌ WRONG
<button className="bg-blue-500 hover:bg-blue-600">
```

### **Links & Text:**
```tsx
// ✅ CORRECT
<a className="text-webcloudor-primary hover:text-webcloudor-accent">

// ❌ WRONG  
<a className="text-blue-600 hover:text-blue-800">
```

---

## **3. Code Review Checklist**

Before submitting ANY pull request, verify:

- [ ] No hardcoded colors outside brand palette
- [ ] All blues use `webcloudor-primary`, `webcloudor-deep`, or `webcloudor-accent`
- [ ] All gradients use predefined `bg-webcloudor-gradient` classes
- [ ] Navigation uses `bg-webcloudor-primary`
- [ ] Footer uses `bg-webcloudor-deep`
- [ ] CTAs use `bg-webcloudor-gradient` or `bg-webcloudor-primary`
- [ ] White text on all blue backgrounds
- [ ] Import statement includes brand colors when needed

---

## **4. ESLint Rule (Future Implementation)**

```javascript
// Custom rule to enforce brand colors
"webcloudor/only-brand-colors": "error",
"webcloudor/no-hardcoded-colors": "error",
```

---

## **5. Testing Requirements**

### **Visual Regression Tests:**
- All components MUST use brand colors
- Screenshots compared against brand standards
- Color contrast ratios tested (minimum 4.5:1)

### **Unit Tests:**
```tsx
// Test that components use correct brand colors
expect(button).toHaveClass('bg-webcloudor-primary');
expect(navbar).toHaveClass('bg-webcloudor-primary');
```

---

## **6. Brand Color Exceptions**

### **NEVER ALLOWED:**
- Custom blues, oranges, or yellows
- Gradients not in brand palette
- Generic Tailwind colors for brand elements

### **ALLOWED EXCEPTIONS:**
- System colors for states: `text-red-500` for errors, `text-green-500` for success
- Neutral colors: `text-gray-600`, `bg-gray-100` for non-brand content
- Utility colors: `bg-transparent`, `text-current`

---

## **7. Implementation Priority**

### **HIGH PRIORITY (Update Immediately):**
1. Navigation components
2. CTA buttons  
3. Hero sections
4. Footer
5. Logo areas

### **MEDIUM PRIORITY:**
1. Cards with brand elements
2. Service/project cards
3. Contact forms
4. About page sections

### **LOW PRIORITY:**
1. Utility components
2. Error states
3. Loading states

---

## **8. Documentation Updates**

When adding new components:
- Document which brand colors are used
- Include examples in Storybook (if available)
- Add to brand color usage examples
- Update this rules file if new patterns emerge

---

## **9. Automated Checks**

Future implementation:
- Pre-commit hooks to check color usage
- CI/CD pipeline color validation
- Automated Figma/design system sync
- Brand color coverage reports

---

**🚨 ENFORCEMENT:** Violations of these rules will result in pull request rejection. Brand consistency is non-negotiable for the Webcloudor identity.
