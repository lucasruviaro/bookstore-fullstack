<h2>Technologies used:</h2>
  
  <h3>
  Spring Web<br>
  Spring Security (JWT)<br>
  Spring Data JPA<br>
  PostgreSQL<br>
  Lombok</h3>
   
<h2>Endpoints</h2>

<h3>Sign-Up</h3>

```
POST /api/authentication/sign-up HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "name": "user",
    "username": "user",
    "password": "user"
}
```

<h3>Sign-In</h3>

```
POST /api/authentication/sign-in HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
    "username": "user",
    "password": "user"
}
```

<h3>Make-admin</h3>

```
PUT /api/internal/make-admin/admin HTTP/1.1
Host: localhost:8080
Authorization: Bearer InternalApiKey1234!
```

<h3>Save Book</h3>

```
POST /api/book HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...admin
Content-Type: application/json
Content-Length: 119

{
    "title": "Test Book 2",
    "price": 10,
    "description": "Test description 2",
    "author": "Test author 2"
}
```

<h3>Delete Book</h3>

```
DELETE /api/book/2 HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...admin
```

```

<h3>Get All Books<h3>
GET /api/book HTTP/1.1
Host: localhost:8080
```

<h3>Save Purchase</h3>

```
POST /api/purchase-history HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...user or admin
Content-Type: application/json
Content-Length: 53

{
    "userId": 3,
    "bookId": 1,
    "price": 10
}
```

<h3>Get User Purchases</h3>

```
GET /api/purchase-history HTTP/1.1
Host: localhost:8080
Authorization: Bearer ...user or admin
```
