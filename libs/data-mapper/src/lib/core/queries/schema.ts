import type { Schema } from '../../models';
import { DataMapperApiServiceInstance } from '../services';

export const getSelectedSchema = (fileName: string, schemaFilePath: string): Promise<Schema> => {
  console.log('*Elaina: in getSelectedSchema : ', fileName, schemaFilePath);
  const service = DataMapperApiServiceInstance();

  console.log('*Elaina: in getSelectedSchema got service : ');

  const response = service.getSchemaFile(fileName, schemaFilePath);

  console.log('*Elaina: in getSelectedSchema response : ', response);

  return response;
};
