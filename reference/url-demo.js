const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=123&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (Root Domain)
console.log(myUrl.host);

// Hostname [doesn't get port]
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialzed query
console.log(myUrl.search);

// Query parmas object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '999');
console.log(myUrl.searchParams);

// Loop through query params
myUrl.searchParams.forEach((value, name) => {
	console.log(`${name} : ${value}`);
});
