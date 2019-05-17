const ADMIN_URL = 'http://localhost:4000/admin/';

const fetchCrud = () =>
  fetch(ADMIN_URL + 'list-perfumes').then(response => {
    return response.json();
  });

const fetchNotes = () =>
  fetch(ADMIN_URL + 'list-notes').then(response => {
    return response.json();
  });

const updateCrud = query =>
  fetch(ADMIN_URL + 'update-perfume', {
    method: 'PUT',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: query.item_id,
      name: query.name,
      status: query.status,
      brand: query.brand,
      man_address: query.man_address,
      base_note_id: query.base_note_id,
      heart_note_id: query.heart_note_id,
      top_note_id: query.top_note_id,
    }),
  })
    .then(response => response.json())
    .catch(error => console.log('error: ' + error));

const deleteCrud = query =>
  fetch(ADMIN_URL + 'delete-perfume/' + query, {
    method: 'DELETE',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch(error => console.log('error: ' + error));

const newCrud = query =>
  fetch(ADMIN_URL + 'add-perfume', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: query.name,
      status: query.status,
      brand: query.brand,
      man_address: query.man_address,
      base_note_id: query.base_note_id,
      heart_note_id: query.heart_note_id,
      top_note_id: query.top_note_id,
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));

export { fetchCrud, fetchNotes, updateCrud, deleteCrud, newCrud };
