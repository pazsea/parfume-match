const HN_BASE_URL = 'http://localhost:3310/tasks/';

const fetchCrud = () =>
  fetch(HN_BASE_URL)
    .then(response => {
        return response.json();
    }
);

const updateCrud = query =>

  fetch(HN_BASE_URL + query.id, {
    method: 'PUT',
    
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        
    },
    body: JSON.stringify({
      "task" : query.task,
      "status" : query.status,
    })

  }
    
    )
    .then(response => response.json())
    .catch(error => console.log('error: ' + error))
  ;

const deleteCrud = query =>
    fetch(HN_BASE_URL + query, {
      method: 'DELETE',
      
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          
      }
    }
      
      )
      .then(response => response.json())
      .catch(error => console.log('error: ' + error))
;


const newCrud = query =>
      fetch(HN_BASE_URL, {
        method: 'POST',
        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
          "task" : query.task,
          "status" : query.status,
        })
    })
        .then(response => response.json()).then(()=>console.log(JSON.stringify(query)))
        .catch(error => console.error(error));



export {
        fetchCrud,
        updateCrud,
        deleteCrud,
        newCrud,
};