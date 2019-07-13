const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
// 	if (err) throw err;
// 	console.log('Folder Created...');
// });

// Create and write to file
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'Hello World!',
// 	err => {
// 		if (err) throw err;
// 		console.log('File Written to...');

// 		// File append
// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'),
// 			' I love NodeJS...',
// 			err => {
// 				if (err) throw err;
// 				console.log('File Written to...');
// 			}
// 		);
// 	}
// );

// Read file
// fs.readFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'utf-8',
// 	(err, data) => {
// 		if (err) throw err;
// 		console.log('Data in the file:\n', data);
// 	}
// );

// Rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'hello-wrold.txt'),
	err => {
		if (err) throw err;
		console.log('File renamed');
	}
);
