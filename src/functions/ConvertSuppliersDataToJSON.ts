import type { ConvertedData } from "@customTypes/suppliersData";
import type { ConvertedLegalData } from "@customTypes/legalEntitieData";
import type { ConvertedStatusData } from "@customTypes/StatusData";

export function convertSuppliersDataToJSON(data: DBData): ConvertedData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
        supplierID: Number(row[0]),
        legalEntityID: Number(row[10]),
        legalText: String(row[1]).toLowerCase(),
        addressID: Number(row[2]),
        address: row[2] as string,         // Dirección (nombre o detalles)
        phoneNumber: row[3] as string,
        email: row[4] as string,
        statusID: String(row[7]).toLowerCase(),
        statusName: String(row[5]).toLowerCase(),     
    };
  });
};

export function convertLegalDataToJSON(data: DBData): ConvertedLegalData[] {
  return data.rows.map((row: (string | number | null)[]) => {
    return {
        legalEntityID: Number(row[0]),
        name: row[2] as string,    
    };
  });
};

export function convertStatusDataToJSON(data: DBData): ConvertedStatusData[]{
  return data.rows.map((row: (string | number | null)[]) => {
    return {
      statusID: Number(row[0]),
      statusName: row[1] as string,    
    };
  });
};