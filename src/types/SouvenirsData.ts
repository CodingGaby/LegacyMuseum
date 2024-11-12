export type SouvenirsData = {
    souvenirID: number;
    souvenirName: string;
    priceWithoutIVA: number;
    IVA: number;
    priceWithIVA: number;
    description: string;
    warehouseID: number;
    statusID:  number;
}

export interface ConvertedData {
    souvenirID: number;
    souvenirName: string;
    priceWithoutIVA: number;
    IVA: number;
    description: string;
    warehouseID: string;
    warehouseName: string;
    statusID: string;
    statusName: string;
}