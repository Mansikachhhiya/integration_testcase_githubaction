const express = require("express");
const request = require("supertest");
const route = require("../routes/index");
const daos = require("../controllers/data/utils")

const app = express();
app.use(express.json());
app.use('/api', route);

describe("Integration testing for user Api", () => {
    it("GET /api/users - success - get all the user", async () => {
        const DATA= {
            "users": [{
                "Product": {
                    "ProductName": "Mobile",
                    "ProductPrice": 434,
                    "createdAt": "2022-09-23T06:28:27.596Z", "id": 1,
                    "updatedAt": "2022-09-23T06:28:27.596Z", "userId": 1
                },
                "createdAt": "2022-09-23T06:28:27.591Z",
                "email": "bruno@doe.com", "firstName": "Bruno", "id": 1,
                "lastName": "Doe", "password": "123456789", "updatedAt": "2022-09-23T06:28:27.591Z"
            }]
        }
        jest.spyOn(daos,"getAllUser").mockResolvedValueOnce(DATA)
        const res = await request(app).get("/api/users")
        // expect(res.body).toEqual(expected)
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('users')
    })
    it("Post /api/users - success - Create a user",async ()=>{
        const DATA={
            "firstName": "mansi",
            "lastName": "kachhiya",
            "email": "mansi@gmail.com",
            "password": "123456789"
        }
        jest.spyOn(daos,"createUsers").mockResolvedValueOnce(DATA)
        const res = await request(app).post("/api/users").send(DATA)
        expect(res.statusCode).toEqual(201);
       expect(res.body).toHaveProperty('user')
    })
    it("Should delete user",async ()=>{
        const res=await request(app).delete("/api/users/2")
        expect(res.statusCode).toEqual(204);
    })
})
