/*
This file contains references to the vendor libraries used in this project. This is 
used by webpack in the production build only.
A separate bundle for vendor code is useful since it´s unlikely to change as often 
as the application´s code.
So all the libraries we reference here will be written to vendor.js so they can be cached until one of tem change.
...
*/

/* eslint-disable no-unused-vars */

import fetch from 'whatwg-fetch';