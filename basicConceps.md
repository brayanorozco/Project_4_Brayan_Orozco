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
