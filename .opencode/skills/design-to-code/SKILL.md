---
name: design-to-code
description: Use when the user provides a Dribbble or Figma link and wants to implement the design as code. Triggers on URLs containing dribbble.com, figma.com, or mentions of "design", "dribbble", "figma", "implement design", "convert design to code". Fetches the design reference and produces matching frontend code.
---

# Design to Code

Convert Dribbble or Figma design links into working frontend code.

## When to Use

Use this skill ONLY when the user provides a Dribbble URL (`dribbble.com`), a Figma URL (`figma.com`), or explicitly asks to implement/convert a design to code.

## Workflow

### 1. Fetch and Analyze the Design

- Use `webfetch` on the provided Dribbble or Figma URL to retrieve the design reference.
- Extract all visual details: layout, colors, typography, spacing, components, sections, responsive behavior, and interactions.
- If the URL is a Dribbble shot, pay close attention to the full-resolution preview image and any attached multiple views/assets.
- If the URL is a Figma file, extract whatever page/frame information is available from the public link.

### 2. Map Design to Architecture

- Identify each visual section and component from the design.
- Match each section to an existing component in the project, or plan a new component.
- Determine which project libraries and utilities to use:
  - This project uses **React 18**, **Vite**, **Tailwind CSS 3**, **Framer Motion 11**, **styled-components**, **SCSS**, **react-icons**, and **@react-three/fiber** for 3D.
  - Prefer Tailwind CSS classes for styling. Use styled-components or SCSS only when Tailwind is insufficient.
  - Use Framer Motion for animations — match hover effects, scroll animations, transitions, and entrance animations visible in the design.
  - Use react-icons for any iconography shown in the design.
- Note the existing file structure:
  - Components live in `src/component/`
  - Data files live in `src/component/data/`
  - Constants live in `src/Constant/`
  - App entry is `src/App.jsx`
  - Styles use `src/App.css` and `src/index.css`

### 3. Implement the Design

- Create or update components to match the design pixel-accurately.
- Follow existing code conventions in the project (component structure, naming, exports).
- For each component:
  - Reproduce the layout, spacing, and visual hierarchy from the design.
  - Implement any visible animations using Framer Motion.
  - Make the component responsive where the design implies different breakpoints.
  - Use semantic HTML with proper accessibility attributes.
- If the design includes colors, fonts, or spacing values not in the project's current Tailwind config, add them to `tailwind.config.js` or use inline Tailwind arbitrary values (e.g., `bg-[#1a1a2e]`).
- Update `src/App.jsx` to integrate new components into the page flow.

### 4. Quality Checklist

Before finishing, verify:

- [ ] All sections from the design are implemented
- [ ] Colors match the design (use browser dev tools or eyedropper from the fetched image)
- [ ] Typography (font size, weight, line-height) matches
- [ ] Spacing and layout match the design
- [ ] Animations and interactions are implemented
- [ ] Responsive behavior is handled
- [ ] Existing project conventions are followed
- [ ] No unused imports or dead code is introduced

### 5. Report

After implementation, provide a brief summary listing:
- Which sections/components were created or modified
- Any design details that required interpretation or could not be fully captured from the fetched reference
- Any deviations from the design and why (e.g., accessibility, performance)

## Important Notes

- If `webfetch` cannot retrieve the full design (e.g., Figma requires authentication), inform the user and ask them to provide a screenshot or exported image of the design.
- Never invent design details that are not visible — if something is ambiguous, ask the user before guessing.
- Preserve all existing project functionality — only add or modify components relevant to the requested design.
- Run `npm run lint` after making changes to ensure code quality.