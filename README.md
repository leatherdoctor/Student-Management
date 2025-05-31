# Student Management System (Demo CRUD Application)

A full-stack Student Management System demonstrating CRUD (Create, Read, Update, Delete) operations. Built with React for the frontend and Spring Boot for the backend, using MySQL as the database. This demo application showcases modern web development practices and full-stack integration.

## 🌟 Features

- **Frontend**: Built with React 19, Vite, and React Router
- **Backend**: Powered by Spring Boot 3.4.5 with Spring Security
- **Database**: MySQL for data persistence
- **Authentication**: Secure user authentication with JWT (JSON Web Tokens)
- **RESTful API**: Clean and well-structured API endpoints
- **Responsive Design**: Mobile-friendly user interface

## 🚀 Tech Stack

### Frontend
- React 19
- React Router v7
- Axios for API calls
- Vite as build tool
- ESLint for code quality

### Backend
- Spring Boot 3.4.5
- Spring Security
- Spring Data JPA
- MySQL Database
- Maven for dependency management

## 🛠️ Prerequisites

- Node.js (v16 or higher)
- Java 21
- MySQL Server
- Maven

## 🚀 Getting Started

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd React/StudentBackend
   ```

2. **Configure Database**
   - Create a MySQL database named `student_management`
   - Update the database configuration in `src/main/resources/application.properties`

3. **Build and Run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   The backend server will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory
   ```bash
   cd ../Frontend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173`

## 📂 Project Structure

```
.
├── Frontend/               # React frontend
│   ├── public/            # Static files
│   ├── src/               # React source code
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   └── App.jsx        # Main App component
│   └── ...
│
└── StudentBackend/        # Spring Boot backend
    ├── src/
    │   ├── main/java/com/backend/
    │   │   ├── config/     # Configuration classes
    │   │   ├── controller/ # REST controllers
    │   │   ├── model/      # Entity classes
    │   │   ├── repository/ # Data access layer
    │   │   ├── security/   # Security configuration
    │   │   └── service/    # Business logic
    │   └── resources/      # Application properties
    └── ...
```

## 🔒 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token in the request header.

## 📝 API Documentation

API documentation is available at `http://localhost:8080/swagger-ui.html` when running the backend server.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Frontend created with Create React App
- Backend powered by Spring Boot
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
