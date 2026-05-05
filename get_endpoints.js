const query = `
  query getApiDetails($apiId: ID!) {
    api(id: $apiId) {
      name
      endpoints {
        id
        name
        route
        method
        description
      }
    }
  }
`;
fetch('https://rapidapi.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    operationName: 'getApiDetails',
    variables: { apiId: 'justin-WFnsXH_t6/api/exercisedb' },
    query: query
  })
}).then(r => r.json()).then(d => {
  const eps = d.data.api.endpoints;
  console.log('ExerciseDB endpoint:', eps.find(e => e.id === 'aab53d90-2a3c-4fde-b345-dad71cbfa04a'));
}).catch(console.error);

fetch('https://rapidapi.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    operationName: 'getApiDetails',
    variables: { apiId: 'mertronlp/api/muscle-group-image-generator' },
    query: query
  })
}).then(r => r.json()).then(d => {
  const eps = d.data.api.endpoints;
  console.log('Muscle Image Generator endpoint:', eps.find(e => e.id === 'd94e6d78-4848-42b7-97de-dbaea1e711f3'));
}).catch(console.error);

fetch('https://rapidapi.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    operationName: 'getApiDetails',
    variables: { apiId: 'h0p3rwe/api/youtube-search-and-download' },
    query: query
  })
}).then(r => r.json()).then(d => {
  const eps = d.data.api.endpoints;
  console.log('Youtube endpoint:', eps.find(e => e.id === 'd3db034f-e7d6-482a-b5f8-4ffe39013956'));
}).catch(console.error);
