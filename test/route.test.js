const request = require("supertest");
const app = require("../index");

describe("User Api test",()=> {
    it("should delete a user",async ()=>{
        const res = await request(app).delete("/api/users/1")
        expect(res.statusCode).toEqual(204)
    })
   //
   //      it("Should create a new user ", async () => {
   //          const res = await request(app).post("/api/users")
   //              .send({
   //                  firstName: "Bob",
   //                  lastName: 'Doe',
   //                  email: "bob@gmail.com",
   //                  password: "12345678"
   //              })
   //          expect(res.statusCode).toEqual(201)
   //          expect(res.body).toHaveProperty('user')
   //      })
   //  it("Should get all user",async ()=>{
   //      const res = await request(app).get("/api/users")
   //      expect(res.statusCode).toEqual(200)
   //      expect(res.body).toHaveProperty('users')
   //  })
   //  it("Should get user by id " , async ()=>{
   //      const res = await request(app).get("/api/users/1")
   //      expect(res.statusCode).toEqual(200)
   //      expect(res.body).toHaveProperty("Users")
   //  })
   }

)