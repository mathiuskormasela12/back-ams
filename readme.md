# Ams Backend

This is backend service for student management application with Node Js, Typescript and MySQL.

## Installation 

- Make sure you had clone this repo
- Copy environment from `.env.example` to `.env`
- Configure your `.env` file according to your MySQL credentials
- Open your terminal in this project and run 

	```bash
	npm install
	```

## How To Run This Web Service

- Run On Development

	```bash
	npm run dev
	```

- Run On Production

	```bash
	npm run build
	```

	And then run

	```bash
	npm start
	```

## Entity Relationship Diagram (ERD)

![alt text](https://github.com/mathiuskormasela12/back-ams/blob/main/screenshoot/ERD.png?raw=true)

## API SPECS

- POST `/api/v1/auth/register` Route for register new user

	Request Body

	```
	{
		"full_name": "user fullname",
		"email": "user email",
		"password": "user password"
	}
	```

- POST `/api/v1/auth/login` Route for login

	Request Body

	```
	{
		"email": "user email",
		"password": "user password"
	}
	```

- GET `/api/v1/user/:id` Route for get user by id
- PUT `/api/v1/user/:id` Route for edit user by id

	Request Body (Multipart/Form-Data)

	```
	{
		"full_name": "user fullname",
		"email": "user email",
		"old_password?": "user old password",
		"new_password?": "user new password",
		"repeat_password?": "user repeat new password",
		"photo?": "user blob image"
	}
	```
- DELETE `/api/v1/user/:id` Route for delete user by id
- GET `/api/v1/student` Route for get all students
- GET `/api/v1/student/:id` Route for get student by id
- POST `/api/v1/student` Route for add new student

	Request Body (Multipart/Form-Data)

	```
	{
		"student_name": "student fullname",
		"class": "student class",
		"major": "student major",
		"birthday": "student birthday",
		"birth_place": "student birth place",
		"nisn": "student nisn",
		"email": "student email",
		"photo": "student blob image"
	}
	```

- PUT `/api/v1/student/:id` Route for edit student by id

	Request Body (Multipart/Form-Data)

	```
	{
		"student_name?": "student fullname",
		"class?": "student class",
		"major?": "student major",
		"birthday?": "student birthday",
		"birth_place?": "student birth place",
		"nisn?": "student nisn",
		"email?": "student email",
		"photo?": "student blob image"
	}
	```

- DELETE `/api/v1/student/:id` Route for delete student by id
- GET `/api/v1/pdf/student/:id` Route for get student report by id
- GET `/api/v1/major` Route for get all majors

- POST `/api/v1/major` Route for add new major

	Request Body

	```
	{
		"major_name": "major name",
		"major_description": "major description"
	}
	```

## License
[MIT](https://choosealicense.com/licenses/mit/)