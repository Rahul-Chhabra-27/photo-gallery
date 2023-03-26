# Photo Gallery Website

## getImageAsync
It is a Immediately Invoked function Expression , that runs automatically and fetch images from the server and passing the result (return by the server) into the showeImages function.

## showIamge function.
This function is responsible of creating image card component and inserting all the card components  in the main tag.
This function accepts images array as an argument and start iterating through this images array with the help of map function and creating card component for every single image.

## getClassByLikes
This function is checking number of likes of the given image by passing likes of an image as an argument and returning the class based on the range of likse of an image.
