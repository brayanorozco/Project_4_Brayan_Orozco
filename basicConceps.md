Linking CSS to .ejs document or any other engines
________________________________________________________

1.Create a new folder named 'public' if none exists.

2.Create a new folder named 'css' under the newly created 'public' folder

3.create your css file under the public/css path

4.On your html link css i.e <link rel="stylesheet" type="text/css"   href="/css/style.css">

// note the href uses a slash(/) before and you do not need to include the 'public'

5.On your app.js include : app.use(express.static('public'));

Boom.It works!!