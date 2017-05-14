function getTempCallback(location, callback) {
  callback(undefined, 78);
  callback('city not found');
}

getTempCallback("Nashville", function(err, temp) {
  if (err) {
    console.log('err', err)
  } else {
    console.log('success', temp);
  }
})

function getTempPromise(location) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);
  });
}

getTempPromise("Nashville").then(function(temp) {
  console.log('promise success', temp);
}, function(error) {
  console.log('promise error', error);
})

function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a == "number" && typeof b == "number") {
      resolve(a+b);
    } else {
      reject('not a number');
    }
  });
}

addPromise(1,1).then(function(result) {
  console.log(result);
}, function (error) {
  console.log('error', error);
});

addPromise(1,'a').then(function(result) {
  console.log(result);
}, function (error) {
  console.log('error', error);
});

var url = 'http://api.openweathermap.org/data/2.5/weather?q=Nashville,TN&appid=16bf18f8f8d8b6cfa53d1966b796c0cf&units=imperial';
