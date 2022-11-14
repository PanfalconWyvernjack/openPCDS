import client from "../db/database.js";

class SchemaRepo {
   create(opdsSchema) {
      return client.queryArray
         `INSERT INTO opcds_schemas (name, brand,is_premium,registration_date) VALUES (${opdsSchema.name}, ${opdsSchema.brand}, ${opdsSchema.is_premium},${opdsSchema.registration_date})`;
   }

   selectAll() {
      return client.queryArray`SELECT * FROM opcds_schemas ORDER BY id`;
   }

   selectById(id) {
      return client.queryArray`SELECT * FROM opcds_schemas WHERE id = ${id}`;
   }

   update(id, opdsSchema) {
      const latestopdsSchema = this.selectById(id);

      return client.queryArray`UPDATE opcds_schemas SET name = ${opdsSchema.name !== undefined ? opdsSchema.name : latestopdsSchema.name}, brand = ${opdsSchema.brand !== undefined ? opdsSchema.brand : latestopdsSchema.brand}, is_premium = ${opdsSchema.is_premium !== undefined ? opdsSchema.is_premium : latestopdsSchema.is_premium} WHERE id = ${id}`;
   }

   delete(id) {
      return client.queryArray`DELETE FROM opcds_schemas WHERE id = ${id}`;
   }
}

export default new SchemaRepo();