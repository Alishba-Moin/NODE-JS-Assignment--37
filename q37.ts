// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size : string , message : string = "I Love TypeScript") {
    console.log(`Size: ${size} , Message: '${message}'`)
}
// Large shirt with default message
make_shirt("Large");

// Medium shirt with default message
make_shirt("Medium");

// A shirt of any size with a different message
make_shirt("Small","Hello World!")
