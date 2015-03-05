# geo-star

![render](./render.png)
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Creates a 2d star type shape in 3d space.

## Usage

[![NPM](https://nodei.co/npm/geo-star.png)](https://www.npmjs.com/package/geo-star)

### Example

An example can be found at `./test/index.js`. You can run this test by calling:
```
$ npm test
```

A simple usage example with default values being passed as settings:
```javascript
var geoStar = require('geo-star');

// geo will be a Object will two properties:
// points - the vertices
// cells - the indices to draw the star
var geo = geoStar( {
    cellSize: 3, // 1 == points, 2 == lines, 3 == triangles
    x: 0, // x position of the center of the star
    y: 0, // y position of the center of the star
    z: 0, // z position of the center of the star
    startRadian: 0, // this will rotate the star
    innerRadius: 50, // inner radius of the star
    outerRadius: 140, // the outer radius for the star
    numSlices: 10 // how many "points" there will be on the star
});
```

## License

MIT, see [LICENSE.md](http://github.com/mikkoh/geo-star/blob/master/LICENSE.md) for details.
