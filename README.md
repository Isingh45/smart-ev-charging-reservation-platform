# Smart EV Charging Reservation Platform

## Overview

A cloud-native EV charging reservation platform developed as the final project for **CS 623 Cloud Computing** at **California State University, East Bay**.

The application demonstrates a complete serverless architecture by integrating a React frontend with AWS API Gateway, AWS Lambda, and Amazon DynamoDB. Users can submit EV charging reservations through a web interface, where requests are processed by AWS Lambda and stored in a managed NoSQL database.

The project showcases end-to-end frontend-to-cloud integration using modern AWS serverless services.

---

## Technologies

* React
* AWS API Gateway
* AWS Lambda
* Amazon DynamoDB
* JavaScript
* Python (boto3 SDK)

---

## Architecture

```text
User
   │
   ▼
React Frontend
   │
   ▼
AWS API Gateway
   │
   ▼
AWS Lambda
   │
   ▼
Amazon DynamoDB
```

---

## Features

* **Reservation Management:** Allows users to enter reservation details including customer name, vehicle information, charging station selection, and preferred reservation time.

* **React Frontend:** Provides an interactive web interface for submitting reservation requests and displaying reservation information.

* **Serverless Request Processing:** Uses AWS API Gateway to receive HTTP POST requests and invoke an AWS Lambda function for backend processing.

* **Reservation ID Generation:** Automatically generates a unique reservation identifier for each reservation before storing the record.

* **Cloud Data Persistence:** Stores reservation records in Amazon DynamoDB using the `ReservationID` as the primary key.

* **REST API Integration:** Demonstrates communication between the React frontend and AWS cloud services using RESTful HTTP requests.

* **CORS Support:** Returns CORS-enabled responses to allow secure browser communication with the cloud backend.

---

## Repository Structure

* **docs/** — Final Project Report and Final Presentation slides.
* **frontend/** — React frontend application source code.
* **lambda/** — AWS Lambda backend function and supporting cloud processing logic.

---

## How to Run

### 1. Prerequisites

Install or configure:

* Node.js
* AWS Account
* AWS API Gateway
* AWS Lambda
* Amazon DynamoDB

---

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open your browser to:

```text
http://localhost:5173
```

---

### 3. AWS Configuration

1. Create a DynamoDB table named **Reservations**.
2. Deploy the **ReservationProcessor** Lambda function.
3. Grant the Lambda execution role permission to write to DynamoDB.
4. Create an API Gateway endpoint connected to Lambda.
5. Update the frontend API endpoint URL.
6. Deploy the application.

---

## What I Learned

* Designing serverless cloud architectures using AWS services.
* Integrating React applications with AWS API Gateway and AWS Lambda.
* Building cloud-based data persistence using Amazon DynamoDB.
* Processing HTTP requests through event-driven serverless functions.
* Developing modular cloud applications by separating frontend, backend, and cloud infrastructure components.

---

## Future Improvements

* Add AWS Cognito authentication.
* Support reservation modification and cancellation.
* Integrate online payment processing.
* Display real-time charging station availability.
* Add an administrative dashboard for reservation management.

---

## Author

**Inderpal Singh**

**Institution:** California State University, East Bay

**Course:** CS 623 – Cloud Computing

**Spring 2026**
