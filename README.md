# Hero Merge

The code test for Aweber, Submission by Ryan McDevitt (@mc706)

### Acknowledgements

This project started using Angular2-Starter-kit [Github](https://github.com/antonybudianto/angular2-starter) and borrowed components from a recent angular2/typescript project
I had done to save time. A writeup on that project can be found [here](http://blog.development.red/our-new-architecture/)

The Angular2-Starter-Kit relies on twitter bootstrap. Normally i would pull this out for either a more specific css
framework or move build my own sass framework, depending on the size and requirements of the project.

### Strategy
As combine and create are the two main functions, I created page components to encapsulate the functionality of each.
As Superheros are used everywhere, I created a Hero model and a HeroCardComponent to display that model and used that
around the app as a reusable component. I created a service to do all of the data transactions with the API, it also fetches
the API key on the initialization of the applicaiton.



### TODO
The APIKey Fetch currently has a race condition against the initial list of heroes. I would either make that blocking call
and have the subsequent data subscribe to it, or move the APIKey to a build time configuration so it doesnt need to be 
asynchronous. Right now this is easily bypassed by navigating through the app.

The radio select on the merge page is a hack to get around a known bug in angular2 with value not being honored on 
radio buttons.

Currently the RXJS observable is not shared. To save data and keep things up to date, I would probably share the results
so it is not refetching heroes as much.


### Instructions on running

1. `npm install`
2. `npm install -g gulp`
3. `gulp`

This will start the webserver

To bu