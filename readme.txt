Used react app to create a react app with structure along with nodejs and mongodb backend (login, edit, delete etc)



Node js backend with MongoDB - 
Folder structure as follows : 
Api/models/models.js -> contains the model file (full name, email, password)
Api/routes/routes.js -> contains the different routes (login, edit, delete)
server.js -> start point of node server

Card Component is used to display some component on each page. Cards.js takes id and used as <Cards id='about'> </Cards>
Footer Component is created to use footer in every page

4 pages are included - 
About, Home, Contact, Jobs, Login

Login page takes email and password and hits the node endpoint of user/login which validates the email/password stored in mongodb backend. 

Jobs page - map used in Jobs to list jobs, their company, name, location etc and displays them in card format dynamically

Home page - used images and viewed as a blog post

Contact page - a contact us form to submit details like email, name etc

