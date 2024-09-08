# Product Page

This is a product page created using Next.js that displays a gallery of product images with thumbnails.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Gallery Images](#gallery-images)
- [License](#license)

## Project Overview

This project is a simple product page where a collection of images and their thumbnails are displayed in a gallery. The images are stored in the `public/images` folder and are used within the components of the Next.js application.

## Features

- Displays a gallery of product images with thumbnails.
- Allows for easy management of images using an array of paths.
- Built with Next.js and React.
- Includes an `Inter` font from Google Fonts.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   gh repo clone Rishabh-tiwari0/product-page-frontend-design
   Navigate into the project directory:
   ```

bash
Copy code
cd product-page
Install the dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser to see the application in action.

Usage
The project uses an array of image paths located in the public/images folder. The images are dynamically rendered on the page using the ProductGallery component.

How to Add More Images
To add more images, simply place the new image files in the public/images directory and update the images array in your code:
