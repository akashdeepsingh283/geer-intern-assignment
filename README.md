🛍️ Product Listing App

A responsive, minimal product listing app built with Next.js (App Router) and Tailwind CSS. This project includes a REST API, client-side filtering, and a dynamic product detail page — perfect as a beginner-friendly e-commerce UI prototype.

------------------------------------------------------
🚀 How to Run the Project

1. Clone the repository:
   git clone https://github.com/your-username/product-listing-app.git
   cd product-listing-app

2. Install dependencies:
   npm install

3. Run the development server:
   npm run dev

4. Visit http://localhost:3000/products to view the products page.

------------------------------------------------------
🧰 Tech Stack Used

- Next.js 14+ (App Router)
- React
- Tailwind CSS
- Postman (for API testing)
- Node.js

------------------------------------------------------
📁 Folder Structure

/app
  ├── layout.js             - Common layout with navbar and footer
  ├── products/
  │   ├── page.jsx          - Product listing page
  │   └── [id]/page.jsx     - Single product details page
  └── api/
      └── products/
          ├── route.js      - GET/POST API handlers
          └── [id]/route.js - GET/DELETE API handler

/lib
  └── productsData.js       - In-memory product data

/README.txt

------------------------------------------------------
🧪 API Endpoints

/api/products       - GET: Fetch all products
                    - POST: Add new product (JSON body)

/api/products/:id   - GET: Get product by ID
                    - DELETE: Remove product by ID

* Data resets on every server restart (in-memory only).

------------------------------------------------------
📝 Notes & Assumptions

- No database: uses a static JS file for storing data.
- External images need to be whitelisted in next.config.js.
- Hydration warnings in dev may occur from browser extensions.
- Clean and minimal UI using Tailwind CSS.

------------------------------------------------------
📄 License

MIT © 2025 Your Name
