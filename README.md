## Architecture

The three types of development that were undertaken in this application include
an SPA, Express Server, and handlebars templating. The SPA come with its own 
templating and styling unlike the handlebars templating which came extra with
the normal HTML/CSS and Javascript for the frontend. The express server was
the most distinct out of all three as it did not serve viewable content but 
acted as the API for the viewable content, enabling sign in and database
access.

The backend used MongoDB since this aspect of the project did not rely on higly
connected data that would need to be associated quickly so document based
databases were used. Mongo also has the benefit of accepting JSON and has an
almost one-to-one mapping of syntax into typescript and javascript for
operating the database.

## Functionality

JSON differs fundamentally differs from javascript in that it is not a
scripting language. JSON communicates and represents data. In that sense it is
excellent at joining up seperate parts of the application as it can be used to
encode and transmit data between them. 

Of the times I refactored code so that the application became more modular, the
navbar comes to mind as the most useful. Then only a single component would
handle the functionality of the navbar and only need to be included by higher
up ones. This greatly simplified where maintenance needed to happen. 

## Testing

Mehtods are different ways for the server to expect data and carry out
operations. For example, GET requests typically retrieve resources from the 
server while POST typically transmits data to the server for storage using the
body of the message. These are transmitted to endpoints which typically provide
a particular service, like login or register. Login and register are critical
for application security as they provide tokens by which data and service
access may be restricted.

## Reflection

This course helped me deepen my understanding of web development especially of
angular, an important frontend framework. This will definitely assist me in
finding a career in the software field. 