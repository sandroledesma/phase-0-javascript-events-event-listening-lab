function addingEventListener() {
    const someElement = document.getElementById('button');
    someElement.addEventListener('click', function() {
      console.log('Element clicked!');
    });
  }
  
  addingEventListener();