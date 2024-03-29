// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("Size: ".concat(size, " , Message: '").concat(message, "'"));
}
// Large shirt with default message
make_shirt('');
// Medium shirt with default message
make_shirt("Medium");
// A shirt of any size with a different message
make_shirt("Small", "Hello World!");
