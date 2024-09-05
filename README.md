## Simple Authentication with JWT - Node.js Project

This is a Node.js project demonstrating a basic user login and protected dashboard route using JSON Web Tokens (JWT).

**Features:**

* User login with username and password (for demo purposes only, replace with database integration).
* JWT token generation upon successful login.
* Protected dashboard route accessible only with a valid JWT token.
* Returns a random "lucky number" for the user on the dashboard.

**Getting Started:**

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/your-project-name.git
```

2. **Install dependencies:**

```bash
cd your-project-name
npm install
```

**Environment Variables:**

* Create a `.env` file in the project root directory.
* Add the following variable to the `.env` file:

```
JWT_SECRET=your_secret_string_here
```

**Replace `your_secret_string_here` with a strong, random string to be used as the JWT signing secret.**

**Usage:**

1. **Start the server:**

```bash
node index.js  // Replace with your main application file if different
```

2. **Login:**

```bash
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": "johndoe", "password": "secret123"}'
```

**This will return a JSON response containing a token if the login is successful.**

3. **Access Dashboard (requires valid token):**

```bash
curl -X GET http://localhost:3000/dashboard -H "Authorization: Bearer your_token_here"
```

**Replace `your_token_here` with the token obtained from the login response.**

**Note:** This is a basic example for demonstration purposes only. In a production environment, you should implement security best practices such as user authentication with a database and password hashing.

**License:**

This project is licensed under the MIT License (see LICENSE file for details).

**Feel free to contribute to this project by creating pull requests!**
