If you use Windows you can:
- install the required modules by running the "install-script.bat" file
- start the kanban website by running the "start-up.bat" file


===========================================================================================================


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
