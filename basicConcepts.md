Linking CSS to .ejs document or any other engines
________________________________________________________

1.Create a new folder named 'public' if none exists.

2.Create a new folder named 'css' under the newly created 'public' folder

3.create your css file under the public/css path

4.On your html link css i.e <link rel="stylesheet" type="text/css"   href="/css/style.css">

// note the href uses a slash(/) before and you do not need to include the 'public'

5.On your app.js include : app.use(express.static('public'));

Boom.It works!!

________________________________________________________
UUID module

UUID module has been installed in this project, it helps to keep your user sessions "secret".
Creating an unique user ID for the session.

What is UUID used for?
UUIDs are generally used for identifying information that needs to be unique within a system or network thereof. Their uniqueness and low probability in being repeated makes them useful for being associative keys in databases and identifiers for physical hardware within an organization.

https://en.wikipedia.org/wiki/Universally_unique_identifier

________________________________________________________________

The find() method returns the value of the first element in the provided array that satisfies the provided testing function.If no values satisfy the testing function, undefined is returned.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find




___________________--
BD

LEFT JOIN users ON schedules.id_user = users.id_user

solo ponga el where

SELECT * FROM table1 LEFT JOIN table2 ON table1.id = table2.id