1️⃣ What is GraphQL?
----------------------------------------------------------------------------------------------------------------------------------
GraphQL is a query language for APIs and a runtime that allows clients to request exactly the data they need, no more and no less.

Key Problems GraphQL Solves
❌ Over-fetching (REST returns extra data)
❌ Under-fetching (multiple REST calls)
❌ Multiple endpoints for related data

Example
query {
  user(id: "1") {
    name
    orders {
      price
    }
  }
}
➡️ One request, precise response.

---------------------------------------------------
2️⃣ Why GraphQL with Node.js?
------------------------------------------------------
Node.js is ideal for GraphQL because:
Non-blocking & fast I/O
Large ecosystem (Apollo Server, Express, NestJS)
Easy service-to-service communication (REST, gRPC)
Popular GraphQL Libraries in Node.js
Apollo Server ⭐ (most popular)

Express-GraphQL

GraphQL Yoga
