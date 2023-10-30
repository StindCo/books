import { DataLoader } from "../../../shared/fetchers/Axios";

export function importData(table: any, user: any, operateur: any, datas: any) {
  let dataToImport: any = {
    insertBy: user,
    operateur,
    ...datas,
  };

  return DataLoader.post(`/${table?.url}`, {
    ...dataToImport,
  });
}

export function loadDataFromOperateur(table: any, operateur: any) {
  return DataLoader.get(`/${table?.url}/operateurs/${operateur?.id}`);
}


export function loadData(table: any) {
  return DataLoader.get(`/${table?.url}`);
}
