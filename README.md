# Backbone Koans

A set of jasmine powered koans for learning [Backbone.js](http://http://documentcloud.github.com/backbone).

The koans verify behavior of a Todo list app, a modified version of the original Todos app
created by [Jérôme Gravel-Niquet](http://jgn.me/).

## How to Run

Start a local http server from the backbones folder:

    python -m SimpleHTTPServer
    http://localhost:8000/

Some browsers such as Chrome don't like you making some json requests through the 'file' protocol,
so just opening specrunner.html directly from a browser is not recommended.

On opening the the localhost:8000 page in the browser you will see many failing specs. Work your 
way through the jasmine specs in the js/koans directory, and when you finish you should have
a better understanding of how to create and test a Backbone app.

