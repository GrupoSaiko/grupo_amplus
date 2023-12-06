import { Model , Sequelize } from "sequelize";

export interface MySqlCustomer {
  id: number;
  rfc: string;
  hasAccessToPraxia: boolean;
}

export interface Customer extends Model<MySqlCustomer>,MySqlCustomer{}