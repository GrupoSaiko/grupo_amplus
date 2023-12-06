import { DataTypes, Model } from "sequelize";
import grupoAmplus from "../connection";

/**
 * @type {import("sequelize").ModelCtor<Model<import("./types").MySqlCustomer, import("./types").MySqlCustomer>>}
 */
const Customer = grupoAmplus.define("Customer", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  rfc: DataTypes.STRING(13),
  hasAccessToPraxia: DataTypes.BOOLEAN,
},{ timestamps:false });

const get = async () => {
  try {
    const data = await Customer.findAll();
    return data;
  } catch (error) {
    console.log(error)
    return [];
  }
};

/**
 * 
 * @param {string} rfc 
 */
const add = async (rfc) => {
  try {
    await Customer.findOrCreate({
      where: {
        rfc,
      },
      defaults: {
        hasAccessToPraxia: 1,
        rfc,
      },
    });
  } catch (error) {
    console.log(error)
    throw error;
  }
};

const CustomerObject = {
  model: Customer,
  get,
  add
};

export default CustomerObject;
