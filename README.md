# Book-Store


## Description:
Book-Store app can perform following actions..
- login as an admin user.
- As an admin can see list of available books 
- As an admin can see deatils of any particular book.
- sign up as a normal user.

<img width="1277" alt="Login_page" src="https://user-images.githubusercontent.com/45259611/135731861-b6d54771-6d68-45f4-bcc5-4f9df70d4b3f.png">

## Source Data :
To read Books data one Json file present in resource folder .
This Json file containes Books of data along with their details .


## Tech-Stack

- Java 8
- Spring-Boot
- JPA
- In-Memory Database H2
- Maven
- Git bash
- Angular
 
 ## Steps to run the application
Step 1- First run backend spring-boot application 
- Checkout the code / Download from git repo(https://github.com/Amitvs9/book-store)
- checkout : open git bash and run command `git clone https://github.com/Amitvs9/book-store`
- open command prompt(cmd)
- go inside the project folder
- run command `mvn clean install`
- once its successfully build run command `mvn spring-boot: run`

Step 2- Second run angular application to read api data through UI
- Checkout the code / Download from git repo(https://github.com/Amitvs9/book-store_UI)
- checkout : open git bash and run command `git clone https://github.com/Amitvs9/book-store_UI`
- open command prompt(cmd)
- go inside the project folder
- run command `run npm install`
- once its successfully build run command `ng serve` 


Now application is up and running

## How to use this book-store app

  ## Login
- Open the URL in your browser : http://localhost:4200
- User can Login as Admin User (by default one admin user alredy registered with credentials username: Admin and password: Admin)

### 1. GET : http://localhost:4200/login

<img width="786" alt="login" src="https://user-images.githubusercontent.com/45259611/135732160-aec0f90d-51c4-4c71-bfc1-25cd4d75d009.png">

#### * If user enter invalid Login credentials:

<img width="1176" alt="InvalifLogin" src="https://user-images.githubusercontent.com/45259611/135732185-c76f71fb-c7bb-4cea-ba64-dc46c7fcea60.png">

 ## * DashBoard
### 2. GET : http://localhost:4200/dashboard
 * After successfully login User can see all avaiable books . 

<img width="1277" alt="Admin_dashbaord" src="https://user-images.githubusercontent.com/45259611/135732194-add1f348-b19a-4e4d-ac5f-676a37d81abf.png">


### 3. GET : http://localhost:4200/dashboard
-Once user click on any particular book image or title name .
-it will show avaiable book details.

<img width="1277" alt="bookdeatils" src="https://user-images.githubusercontent.com/45259611/135732196-84db636b-6104-436a-a93c-10f07bd4d6a8.png">


### 4. GET : http://localhost:4200/signup (Optional - feature)
- Admin sign-up is not enable in this app.
- only normal User sign-up normal-user sign-up can be done.  

<img width="1171" alt="signup" src="https://user-images.githubusercontent.com/45259611/135732218-656a7023-edc2-4ba4-9228-27e4c22a4f08.png">

 * If Sign-up User alredy register 
 
<img width="1176" alt="UserExist" src="https://user-images.githubusercontent.com/45259611/135732224-a50a2d66-1c38-4787-a56b-0b72f0be3c39.png">

### Coverage

<img width="1244" alt="Coverage" src="https://user-images.githubusercontent.com/45259611/135734698-dcd1ce48-6a3c-400f-9ee8-19aafb12e586.png">







