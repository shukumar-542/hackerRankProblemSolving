function fetchDataFromServer(callback) {
    setTimeout(function() {
      const data = { name: "John", age: 30 };
      callback(data);
    }, 2000);
  }
  
  function processData(data) {
    console.log("Data received:", data);
  }
  
  fetchDataFromServer(processData);