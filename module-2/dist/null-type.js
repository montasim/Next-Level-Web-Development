"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('Search result not found');
    }
    else {
        console.log('Searching...');
    }
};
searchName('Montasim');
searchName(null);
