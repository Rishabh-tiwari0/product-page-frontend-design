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
   git clone https://github.com/your-username/product-page.git
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

javascript
Copy code
const images = [
"/images/new-image-1.jpg",
"/images/new-image-2.jpg",
// add more image paths here
];
Then, the new images will automatically appear in the gallery.

Folder Structure
arduino
Copy code
├── public
│ └── images
│ ├── image-product-1-thumbnail.jpg
│ ├── image-product-1.jpg
│ ├── image-product-2-thumbnail.jpg
│ ├── image-product-2.jpg
│ ├── image-product-3-thumbnail.jpg
│ ├── image-product-3.jpg
│ ├── image-product-4-thumbnail.jpg
│ └── image-product-4.jpg
├── src
│ └── components
│ └── ProductGallery.js
└── pages
└── index.js
Gallery Images
The images used in the project are stored in the public/images directory. Here's a list of the images included:

image-product-1-thumbnail.jpg – Thumbnail of Product 1.
image-product-1.jpg – Full image of Product 1.
image-product-2-thumbnail.jpg – Thumbnail of Product 2.
image-product-2.jpg – Full image of Product 2.
image-product-3-thumbnail.jpg – Thumbnail of Product 3.
image-product-3.jpg – Full image of Product 3.
image-product-4-thumbnail.jpg – Thumbnail of Product 4.
image-product-4.jpg – Full image of Product 4.
License
This project is licensed under the MIT License.
