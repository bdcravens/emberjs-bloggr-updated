The [example video](https://www.youtube.com/watch?v=1QHrlFlaXdI)
on emberjs.com is great - it shows you how to build the basics
of a blog in Ember in a short 28 minute video. However, it's a bit dated (in
Javascript framework years, that is) - it uses an RC of Ember 1.0 (currently,
Ember is at 1.9.1), an older version of Bootstrap (2.3.2), and relies upon
downloading the Starter Kit zip file, even though package management in Javascript is pretty
mature using libraries like [Bower](http://bower.io). Video can be hard to change, but the
[Github repo](https://github.com/tildeio/bloggr-client) hasn't been updated
since July 2014.

# When I did the example
I followed along, pausing the video and mostly coding the example by hand.
Along the way I made changes:

* use Bower to pull in Ember and other dependencies
* use latest version of Bootstrap (as pulled in by Bower) and updated HTML accordingly

# To run this
* clone repo
* ```bower install``` (assuming you've [installed Bower](http://bower.io/#install-bower))
* open index.html in browser

Note: when example switches from fixture data for blog to Tom's live API, I just
commented out reference to fixture in js/app.js - you may wish to reverse this
if you're following along.
