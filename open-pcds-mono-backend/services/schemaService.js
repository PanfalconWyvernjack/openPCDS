/**
 * The objective of this API is to help with the initial design of
 * tables that the end user can use for form/document creation * 
 */

import schemaRepo from "../repositories/schemaRepo.js";

export const getSchemas = async () => {
   const schemas = await schemaRepo.selectAll();

   return schemas.rows.map(schema => {
      return     schemas.rowDescription.columns.reduce((acc,el, i) => {
         acc[el.name] = schema[i];
         return acc
      },{});
   });
};

export const getSchema = async schemaId => {
   const schemas = await schemaRepo.selectById(schemaId)
   if(!schemas || schemas?.length===0) return null
   return schemas.rowDescription.columns.reduce((acc,el, i) => {
         acc[el.name] = schemas.rows[0][i];
         return acc
      },{});
};

export const createSchema = async schemaData => {
   const newSchema = {
      name: String(schemaData.name),
      brand: String(schemaData.brand),
      is_premium: "is_premium" in schemaData ? Boolean(schemaData.is_premium) : false,
      registration_date: new Date()
   };

   await schemaRepo.create(newSchema);

   return newSchema.id;
};

export const updateSchema = async (schemaId, schemaData) => {
   const schema = await getSchema(schemaId);


   if (Object.keys(schema).length === 0 && schema.constructor === Object) {
      throw new Error("Schema not found");
   }

   const updatedSchema = {...schema,...schemaData};

   schemaRepo.update(schemaId, updatedSchema);
};

export const deleteSchema = async schemaId => {
   schemaRepo.delete(schemaId);
};
