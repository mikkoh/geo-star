module.exports = geoStar;

function geoStar(options) {

  var geo = {

    positions: [],
    cells: []
  };

  options = options || {};
  options.x = options.x || 0;
  options.y = options.y || 0;
  options.z = options.z || 0;
  options.startRadian = options.startRadian || Math.PI * -0.5;
  options.innerRadius = options.innerRadius || 50;
  options.outerRadius = options.outerRadius || 140;
  options.cellSize = options.cellSize || 3;
  options.numSlices = options.numSlices || 5;

  createGeometry( options, geo.positions, geo.cells );

  return geo;
}

function createGeometry( o, positions, cells) {

  var radInc = Math.PI * 2 / o.numSlices;
  var radIncHalf = radInc * 0.5;
  var radiusDif = o.outerRadius - o.innerRadius;
  var startRad, midRad, endRad, i4;

  // if the cellsize is 3 we need to add the center dot
  if( o.cellSize == 3 ) {

    positions.push([o.x, o.y, o.z]);
  }

  for(var i = 0; i < o.numSlices; i++) {

    startRad = o.startRadian + radInc * i - radIncHalf;
    midRad = startRad + radIncHalf;
    endRad = startRad + radInc;

    // inner
    positions.push([ 
      Math.cos( startRad ) *  o.innerRadius + o.x,
      o.y,
      Math.sin( startRad ) *  o.innerRadius + o.z
    ]);

    positions.push([ 
      Math.cos( endRad ) *  o.innerRadius + o.x,
      o.y,
      Math.sin( endRad ) *  o.innerRadius + o.z
    ]);

    // outer
    positions.push([ 
      Math.cos( midRad ) *  o.outerRadius + o.x,
      o.y,
      Math.sin( midRad ) *  o.outerRadius + o.z
    ]);

    i3 = i * 3;

    if( o.cellSize == 1 ) {

      cells.push([ i3 ], [ i3 + 1 ], [ i3 + 2 ]); 
    } else if( o.cellSize == 2 ) {

      cells.push(
        [ i3, i3 + 2 ], 
        [ i3 + 2, i3 + 1 ]
      ); 
    } else if( o.cellSize == 3 ) {

      // +1 because of the center dot
      i3 += 1;

      // outside triangles
      cells.push(
        [ i3, i3 + 2, i3 + 1 ]
      );

      // triangle going to center
      cells.push(
        [ 0, i3, i3 + 1 ]
      );      
    }
  }
}