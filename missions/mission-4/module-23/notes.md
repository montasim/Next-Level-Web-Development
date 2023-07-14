# Assignment 5:Build a Simple Book Catalog Application using React ,Redux & Typescript (Frontend Category)

## Main Part:

### Requirements:

Create a simple and clean landing page for a book catalog system using React and redux . The landing page should have a header, a list of the top 10 recently added books and a footer. There should be some  open routes such as "All Books", "Sign In", and "Sign Up".

### Login Page and Registration Page: ( You can use firebase authentication or custom authentication)

Create a way for users to create new accounts with a unique email and password. Also, create a way for users to log in using their credentials. After a successful login, the login button should be replaced with a logout button in the navbar. Create a way for users to securely log out of the application.

### All Books Page

- Fetch a list of books from an API using RTK Query and Display the list of books (Table or card or any other manner). Each book should display key information such as
    * Title
    * Author
    * Genre
    * Publication Date

- Implement a search bar that allows users to search for books based on criteria such as title, author, or genre.

- Enable filtering options below or side of the search bar to narrow down the book list based on genre & publication year.

- Ensure search and filtering operations are efficient and provide accurate results.

- Implement an "Add New" Button to navigate to the "add-new-book" page to add a new book. You can also add "Add New Book" as a navigation menu for authenticated users.

### Add New Book Page

Authenticated users can add a new book by filling out a form. After submitting the form, the user will be notified of the success or failure of the operation with a toast or other notification.

### Book Details Page

When a user clicks on a book from the list, displays a detailed view of the book. The detailed view should include the following information:

* **Title**
* **Author**
* **Genre**
* **Publication Date**
* **Reviews**

The reviews should be displayed on the book details page.

**Add two buttons to the book details page:**
*  Edit Button
*  Delete Button

When a user clicks on the **Edit Book** button, they should be redirected to the **edit-book** page. When a user clicks on the **Delete Book** button, they should see a confirmation dialogue to confirm that they want to delete the book.

**Authenticated users should be able to leave reviews for books.** Implement a submit box for submitting a review.

### Edit Books Page:

Authenticate users can edit a book  using  a form. The form should have current data when editing. After submitting the form, the user should be notified using a toast or any other solution. If there is any issue, the user will also be notified.


## Bonus Part :

Implement a wishlist feature where users can add books they want to read in the future. Users can also create a list of books they are currently reading or plan to read soon. Provide options to mark books as finished reading.


### Deadline:

- 60 Marks ( Till 16th July, Sunday 11.59 PM  )
- 50 Marks  ( Till 18Th July, Tuesday 11.59 PM )

`** In order for your assignment to be evaluated, it is essential to have a minimum of 20 meaningful commits. Please note that unnecessary commits will not be considered as part of the evaluation process.**`


### What to submit

1. Deployed Frontend Live Link ( Netlify / Firebase  or any other platform)
2. Your Frontend Github  Repository Link
3. Your  Backend  Github Repository  Link

You should add the links to the readme.md file.


# Disclaimer:

** Filter Implementation

In this project, students have the option to implement the filter functionality both on the frontend side or on the backend side. But
- if you are planning to pursue your career as a full-stack developer, you are strongly recommended to implement backend filtering.
- If you are planning to pursue your career as a frontend developer only you can skip backend complexity. There is no requirement for implementing backend filtering. The backend does not need to support specific filtering endpoints or functionalities.

** User Authentication and Book Management

In this project, user authentication is required. Only authenticated users should be able to edit or delete the books they have added to the catalog. Please ensure that your backend implementation includes user authentication and restricts book management operations to the authenticated user's own books. Keep in mind that unauthorized users should not have access to edit or delete books added by other users.
- if you are planning to pursue your career as a full-stack developer, you are encouraged to implement a custom authentication system.
- If you are planning to pursue your career as a frontend developer only you can skip/implement custom authentication. If you want to skip custom authentication, you can use Firebase too There is no requirement for implementing a backend filtering. The backend does not need to support specific filtering endpoints or functionalities.


** Backend Implementation Guidelines

In order to ensure a fully functional frontend application, it is required for students to implement a backend for this project. The backend will be responsible for providing the necessary APIs to serve data to the front end and handle logic.

However, please note that the backend code will not be provided as part of this project. Students are encouraged to implement the backend independently.

The primary focus and evaluation of this project will be on the frontend implementation, specifically utilizing React, Redux Toolkit, and RTK Query. It is crucial that the front end is working properly and demonstrating the effective use of state management and data integration.

While the backend implementation is necessary for the project to function as intended, it will not be assessed or graded directly. The success of the project will be evaluated based on the functionality and performance of the front end, as well as the proper utilization of the Redux Toolkit and RTK Query.

<br/>

[Assignment 5 Frontend Solutions](https://github.com/montasim/level-2-assignment-5-book-catalog-frontend)
[Assignment 5 Backend Solutions](https://github.com/montasim/level-2-assignment-5-book-catalog-backend)