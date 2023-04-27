# REST

### what is REST?

1. Rest stands for representational state transfer. It is an architectural style for developing web services.
2. In REST full architecture data is represented as resource and client interacts with the resources with HTTP requests.

### What is REST-API?

1. A REST API is an interface that provides endpoints in REST architectural style for clients to interact with using HTTP for accessing the resources they allow.

### what are REST principles?

1. client-server architecture: Seperating the user interface concerns from data storage concerns.
2. statelessness: A clients request should contain all the necessary information needed to process it.
3. cacheability: The server should indicate whether the responses could be cashed by the client or not.
4. layered system: A layered architecture allows other intermediaries like load balancers, proxies, gateways to be inserted between client and server
5. uniform interface: Resources should be identified by a unique identifier(URI) with HTTP methods.

### what is limit and offset?

1.  In api development limit and offset are the parameters often used to paginate or limit the number of results returned in a response.
2.  The offset parameter is used to skip certain number of results from the beginning of a list of results
3.  The limit parameter is used to limit the number of results returned.

##### example:

         fetch('/api/items?offset=0&limit=10')
         .then(res => res.json())
         .then(data => console.log(data))

         fetch('/api/items?offset=10?limit=10')
         .then(res => res.json()).then(data => console.log(data))

         app.get('/api/items', (req, res) => {
            const {offset, limit} = req.query

         })

         db query
         SELECT * FROM items
         ORDER BY created_at DESC
         OFFSET  offsetVal
         LIMIT   limitVal

### what is HTTP?

## 1. What do you understand by RESTful web services?

## 2. What is REST resource?

## 3. What is URI?

## 4. What are the features of RESTful web serices?

## 5. What is the concept of statelessness in REST?

## 6. What are HTTP status codes?

## 7. What are the HTTP methods?

## 8. While creating URI for the web services, what are the best practices that needs to be followed?

## 9. What are the best practices to develop RESTful web services?

## 10. What constitutes the core components of the HTTP request?

## 11. What constitutes the core components of the HTTP response?

## 12. Difference between PUT and POST in REST?

## 13. What is payload in terms of RESTful web services?

## 14. How does HTTP basic authentication work?
