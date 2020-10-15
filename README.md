
# act-housing-site

## Overview

#### A simple site to post housing related information. 
`* work in progress`

This year I was given the chance to be more involved in managing life on-campus through being a Resident Assistant. It came to my attention that a site on updates or general information regarding housing would be useful. 

Tech Stack: 
- Clojurescript
- figwheel.main
- Leiningen


`blog` will be generated via Cryogen

## Development

Feel free to fork this repo and contribute :)

To get an interactive development environment run:

    lein fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

	lein clean

To create a production build run:

	lein clean
	lein fig:min


## License

Copyright © 2020

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
