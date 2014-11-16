# Redissen

Wrapper of native Redis driver with convinence API for JavaScript.

## Description

## API

### Client

Create the client in exactly same way as for native client.

```js
var redissen = require('redissen');
var client = redissen.createClient(config.redis.connection.port, config.redis.connection.host);
```

### Methods

#### getHash(), setHash()

gets and sets the hash map for Redis storage,

```js
var streets = client.getHash('de:berlin:streets', function (err, streets) {
	if (err) {
		return callback(err);
	}

	streets['orainerburgerstr. 69, 10150, Berlin'] = {
		name: 'orainerburgerstr',
		number: 69,
		zip: 10150,
		city: 'Berlin'
	};

	client.setHash('de:berlin:streets', streets, callback);
});

```

### getHashElement(), setHashElement()

fetch and update one element in Redis hash,

```js

var street = client.getHashElement('de:berlin:streets', 'orainerburgerstr. 69, 10150, Berlin', function (err, result) {
	if (err) {
		return callback(err);
	}

	result.name = 'oranienburget strasse';

	client.setHashElement('de:berlin:streets', 'orainerburgerstr. 69, 10150, Berlin', callback);
});

### getValues()

helper with wildcard support,

```js
var streets = client.getValues('de:berlin:streets:*', function (err, results) {
	if (err) {
		return callback(err);
	}

	console.log(results);
});
```

### Types

## Licence

Copyright (c) 2014, alexander.beletsky@gmail.com

MIT
