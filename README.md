# SearchBar Test Project

This project is a Next.js application designed to allow users to search for images using the Unsplash API and display the results. The application utilizes Tailwind CSS for styling and is structured to be clean and modular, with components and pages clearly organized.

## Project Structure

Here's an overview of the project's directory structure:

```
searchbar
 ├──searchbartest
 | ├──.next/
 | ├── app/
 | │   ├── _components/
 | │   │   ├── PinItem.tsx
 | │   │   ├── PinList.tsx
 | │   │   ├── SearchBar.tsx
 | │   │   ├── SearchResults.tsx
 | │   ├── globals.css
 | │   ├── layout.tsx
 | │   ├── page.tsx
 | ├── node_modules/
 | ├── .env
 | ├── .gitignore
 | ├── next-env.d.ts
 | ├── next.config.mjs
 | ├── package-lock.json
 | ├── package.json
 | ├── postcss.config.mjs
 | ├── tailwind.config.ts
 | ├── tsconfig.json
 ├── License.txt
 ├── README.md
```

### Key Files and Directories

- **app/_components/**
  - **PinItem.tsx:** This component is responsible for rendering a single image item.
  - **PinList.tsx:** This component renders a list of images by mapping through an array of image data.
  - **SearchBar.tsx:** This component contains the search input and handles the search functionality.
  - **SearchResults.tsx:** This component displays the search results based on the user input from the `SearchBar`.

- **app/layout.tsx:** The root layout file that wraps all pages.

- **app/page.tsx:** The main page that displays the `SearchResults` component based on the search term passed down from `SearchBar.tsx`.

- **app/globals.css:** Contains global styles, including the setup of Tailwind CSS and some custom CSS variables. It sets a light gray background across the application:

  ```css
  :root {
    --background-color: #c5c5c5;
  }

  body {
    background-color: var(--background-color);
  }
  ```


- **.env:** Environment file for storing sensitive information like API keys. Make sure to add your Unsplash API key here.

- **next.config.mjs:** Configuration for Next.js, including image optimization settings, which allow images to be loaded from external domains like Unsplash.

- **tailwind.config.ts:** Configuration file for Tailwind CSS, which defines custom styles and utilities used throughout the project.

### Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/maydaythecoder/SearchBar.git
   cd searchbartest
   ```

2. **Install Dependencies**

   Ensure Node.js is installed, then run:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add your Unsplash API key:

   ```env
   NEXT_PUBLIC_UNSPLASH_API_KEY="your_unsplash_api_key_here"
   ```

4. **Run the Development Server**

   Start the Next.js development server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

### Usage

- **SearchBar Component:** Located in `page.tsx`, this component allows users to search for images. The search results are dynamically displayed in the same file.

- **Search Results:** The `SearchResults` component in `page.tsx` fetches and displays images based on the search term provided by the `SearchBar`.

- **Styling:** Tailwind CSS is used throughout the project. The `globals.css` file sets up a light gray background and defines some global utilities.

### Configuration

- **Image Domains:** The application is configured to load images from `images.unsplash.com`. If you need to load images from other domains, add them to the `domains` array in `next.config.mjs`.

### Notes

- **Global Search State:** The search state is managed in `page.tsx`, ensuring that the `SearchBar` and `SearchResults` components can interact seamlessly.

- **Tailwind CSS:** The project is styled using Tailwind CSS, with custom configurations in `tailwind.config.ts` and global styles in `globals.css`.

### Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions or find bugs.

### License

This project is licensed under the MIT License. See the [License.txt](License.txt) file for details.
