// ### 2. Add or remove elements
// 1. Declare an array of 3 tourist destinations
// 2. Add a new tourist destination to your tourist array
// 3. Add two more to your array
// 4. Remove the last tourist destination you have added
// 5. display the final array as output

const tourist = ['Shylet', 'Cox-bazar', 'Kuakata']; // initial array
tourist.push('Rangamati');                          // add one
tourist.push('Sitakundo', 'Sajek-valli');           // add two more
tourist.pop();                                      // remove last element ('Sajek-valli')
console.log(tourist);                               // final array
