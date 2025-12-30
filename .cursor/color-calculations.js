// Color calculation script for verifying HSL/hex conversions and WCAG contrast
// This will be run to verify the color values

// HSL to RGB conversion
function hslToRgb(h, s, l) {
  h = h / 360;
  s = s / 100;
  l = l / 100;
  
  let r, g, b;
  
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// RGB to hex
function rgbToHex(r, g, b) {
  return "#" + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }).join("").toUpperCase();
}

// Hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// RGB to HSL (with more precision)
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  return {
    h: h * 360,
    s: s * 100,
    l: l * 100
  };
}

// Calculate relative luminance
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Calculate contrast ratio
function getContrastRatio(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Test 1: Verify HSL(160, 25%, 45%) conversion
console.log("=== Test 1: HSL(160, 25%, 45%) to Hex ===");
const rgb1 = hslToRgb(160, 25, 45);
const hex1 = rgbToHex(rgb1[0], rgb1[1], rgb1[2]);
console.log(`HSL(160, 25%, 45%) = RGB(${rgb1.join(", ")}) = ${hex1}`);

// Test 2: Verify #3A5550 to HSL
console.log("\n=== Test 2: #3A5550 to HSL ===");
const rgb2 = hexToRgb("#3A5550");
const hsl2 = rgbToHsl(rgb2.r, rgb2.g, rgb2.b);
console.log(`#3A5550 = RGB(${rgb2.r}, ${rgb2.g}, ${rgb2.b})`);
console.log(`Exact HSL: ${hsl2.h.toFixed(1)} ${hsl2.s.toFixed(1)}% ${hsl2.l.toFixed(1)}%`);
console.log(`Rounded HSL: ${Math.round(hsl2.h)} ${Math.round(hsl2.s)}% ${Math.round(hsl2.l)}%`);

// Test 3: Find correct HSL for #3A5550
console.log("\n=== Test 3: Correct HSL value for #3A5550 ===");
console.log(`Exact HSL: ${hsl2.h.toFixed(1)} ${hsl2.s.toFixed(1)}% ${hsl2.l.toFixed(1)}%`);
console.log(`For CSS (rounded): ${Math.round(hsl2.h)} ${Math.round(hsl2.s)}% ${Math.round(hsl2.l)}%`);

// Test 4: Current --info and --info-foreground contrast
console.log("\n=== Test 4: Current Contrast Ratio ===");
// Current --info: 160 25% 45% (light mode)
const infoBgRgb = hslToRgb(160, 25, 45);
const infoBg = { r: infoBgRgb[0], g: infoBgRgb[1], b: infoBgRgb[2] };
// Current --info-foreground: 150 30% 95%
const infoFgRgb = hslToRgb(150, 30, 95);
const infoFg = { r: infoFgRgb[0], g: infoFgRgb[1], b: infoFgRgb[2] };
const currentContrast = getContrastRatio(infoBg, infoFg);
console.log(`Current contrast: ${currentContrast.toFixed(2)}:1`);
console.log(`Meets WCAG AA (4.5:1)? ${currentContrast >= 4.5 ? "YES" : "NO"}`);

// Test 5: If using #3A5550 as --info, calculate contrast
console.log("\n=== Test 5: Contrast with #3A5550 as --info ===");
const primaryLightRgb = hexToRgb("#3A5550");
const contrastWithPrimary = getContrastRatio(primaryLightRgb, infoFg);
console.log(`Contrast with #3A5550 background: ${contrastWithPrimary.toFixed(2)}:1`);
console.log(`Meets WCAG AA (4.5:1)? ${contrastWithPrimary >= 4.5 ? "YES" : "NO"}`);

// Test 6: Verify user's suggested HSL(169, 24%, 28%)
console.log("\n=== Test 6: Verifying HSL(169, 24%, 28%) ===");
const userHslRgb = hslToRgb(169, 24, 28);
const userHslHex = rgbToHex(userHslRgb[0], userHslRgb[1], userHslRgb[2]);
console.log(`HSL(169, 24%, 28%) = RGB(${userHslRgb.join(", ")}) = ${userHslHex}`);
console.log(`Target: #3A5550`);
console.log(`Match? ${userHslHex === "#3A5550" ? "YES" : "NO"}`);

// Test 7: Final contrast check with corrected --info
console.log("\n=== Test 7: Final Contrast Check ===");
const correctedInfoRgb = hslToRgb(169, 19, 28); // Using calculated exact match
const correctedInfo = { r: correctedInfoRgb[0], g: correctedInfoRgb[1], b: correctedInfoRgb[2] };
const finalContrast = getContrastRatio(correctedInfo, infoFg);
console.log(`With --info: HSL(169, 19%, 28%) [matches #3A5550]`);
console.log(`With --info-foreground: HSL(150, 30%, 95%)`);
console.log(`Contrast ratio: ${finalContrast.toFixed(2)}:1`);
console.log(`WCAG AA (4.5:1) compliance: ${finalContrast >= 4.5 ? "PASS" : "FAIL"}`);

