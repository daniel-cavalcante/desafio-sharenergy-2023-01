# Sharenergy coding challenge.

This project is the result of a coding challenge I have participated. The project consists of a webpage using the following technologies:

1. ReactJS + Typescript on the front-end.
2. NodeJS + Express + Typescript on the server-side.
3. MongoDB for database management.

This website consists of mainly four pages, each one consuming a different external API.

1. The first page takes data from 'https://randomuser.me/' and displays the users in a paginated fashion.

2. Another page displays a random dog from 'https://random.dog/'.

3. On the next page, the user provides a HTTP code and get a corresponding cat image from 'https://http.cat/'.

4. The fourth is a CRUD app displaying a list of clients and their info.

## Screenshots

![alt text](https://github.com/daniel-cavalcante/desafio-sharenergy-2023-01/blob/main/samples/1login.png?raw=true)
![alt text](https://github.com/daniel-cavalcante/desafio-sharenergy-2023-01/blob/main/samples/2randomUsers.png?raw=true)
![alt text](https://github.com/daniel-cavalcante/desafio-sharenergy-2023-01/blob/main/samples/3randomUsers.png?raw=true)
![alt text](https://github.com/daniel-cavalcante/desafio-sharenergy-2023-01/blob/main/samples/4randomDoggo.png?raw=true)
![alt text](https://github.com/daniel-cavalcante/desafio-sharenergy-2023-01/blob/main/samples/5codeCat.png?raw=true)
![alt text](https://github.com/daniel-cavalcante/desafio-sharenergy-2023-01/blob/main/samples/6clientList.png?raw=true)
![alt text](https://github.com/daniel-cavalcante/desafio-sharenergy-2023-01/blob/main/samples/7clientList.png?raw=true)

## Demonstrative Video

This video shows the responsive design implemented on the website.

https://youtu.be/35H_n-JVnVg

## Installation Instructions

Assuming you already have installed on your machine the package manage npm and mongodb, do the following:

1. Clone this repo.
2. Change directory to "server" folder inside root.
3. Execute "npm install"
4. Execute "npm start" to initialize the local server on port 5000.
5. [optional] Locate the filex 'index.ts' inside the server folder, uncomment the commented lines of code and save the file. This will restart the server and add dummy clients to the client list in the mongoDB database.
6. Change directory to "client" folder inside root.
7. Execute "npm install".
8. Execute "npm start". Your browser should open a new tab at localhost:3000. Voilá!
9. The login credentials are:

Username: desafiosharenergy
Password: sh@r3n3rgy
