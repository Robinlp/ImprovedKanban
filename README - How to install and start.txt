You need to have Node installed.
===========================================================================================================
If you use Windows you can:
- install the required modules by running the "install-script.bat" file
- start the kanban website by running the "start-up.bat" file


-----------------------------------------------------------------------------------------------------------
If you do not use Windows, or if the scipts don't work:

To install:
	- open a terminal in the KanbanBackend folder
	- run the command: npm install
	- run the command: npm audit fix  (this command is not required, but will keep the modules up-to-date)

	- open a terminal in the KanbanFrontend folder
	- run the command: npm install
	- run the command: npm audit fix  (this command is not required, but will keep the modules up-to-date)


Start the website:
	- open a terminal in the KanbanBackend folder
	- run the command: node WebserverStart.js

	- open a terminal in the KanbanFrontend folder
	- run the command: ng serve --ssl --open

===========================================================================================================

You can either create a new user or use the existing user:
Username: SecureUser
Password: password123

-----------------------------------------------------------------------------------------------------------

In order to use the encrypted webpage you need to accept/trust the self-signed certificate.
	- when you go the https://localhost:4200/ you will have to accept the certificate. (this is the connection to the frontend)
	- you also need to go to https://localhost:8080/ and accept that certificate. (this is the connection to the backend)

	- (if the board still won't load you might have to go to https://localhost:4040/ to accept the websocket certificate, but I don't think you need to do this and the browser will most likely not connect to it)



(I have tested the software using Google Chrome and Opera on Windows 10) 
(Microsoft Edge would not keep the certificate as accepted)