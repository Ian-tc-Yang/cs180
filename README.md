# Ian Yang — UC Berkeley CS 180 Portfolio

A responsive portfolio for CS 180: Intro to Computer Vision and Computational Photography. It is designed for recruiters, professors, and collaborators to review each project as a concise visual case study.

## Live site

[ian-tc-yang.github.io/cs180](https://ian-tc-yang.github.io/cs180/)

## Project structure

```text
cs180/
├── homepage                    # React/Vite homepage
├── project0/
│   ├── index.html              # Project 0 write-up
│   └── media/                  # Project 0 images and video
├── project1/ … project4/
└── final/
    ├── index.html              # Final project write-up
    └── media/                  # Final project assets
```

The project pages live under `public/`, so Vite copies them into the deployed site without changing their URLs.

## Add project content

1. Put images, GIFs, and videos in the matching `public/projectN/media/` directory.
2. Edit that project’s `public/projectN/index.html` file.
3. Use paths such as `media/result.jpg` inside the project page.
4. Commit and push to `main`; GitHub Actions republishes the portfolio automatically.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build output is written to `dist/` and deployed by [the GitHub Pages workflow](.github/workflows/deploy.yml).
