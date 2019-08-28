## Budget App

#### About
This is a front-end demo for a budgeting app.

In a production environment, users should be able to create their own accounts and their data would be saved in a database. However, in this case, since this is just a front-end demo, the user will not be able to create an account and the data that they create will be stored in local storage instead.

Users will be able to:
* Set maximum budget per month.
* Add expenditure amount each month.
* Search their history for specific months and years.

#### Front-End
* React
* Redux

#### Back-End
* Node.js
* Express.js

#### Folder Structure
src is where all the source code is located. It is separated by client code and server code.

* ##### src 
	* ###### client (all client code here)
		* comp 
			* this is where general reusable components are located
		* custHooks
			* this is where reusable react hooks are located
		* public
			* this is where the node server serves up the static files
			* home of the root react component
		* redux
			* redux store, reducers, actions, and action creators are located here
		* routes.js
			* all of the routes in the application are located in this file
			* this file is used to map out routes and links in react router
		* views
			* this is where react components are located
			* they are separated according to their page type
				* eg. home, about directories are separate
					* each directory contains their own react components and css files
	* ###### server (all server code here)
		* index.js
			* the root file of the server 
		* routes
			* all the different server routes go here 
		
* ##### webpacks
	* this is where the webpack configurations are held
	* configurations are separated by environment type
