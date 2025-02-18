import { Item } from '../constants/tempDB';

function getDataBase(): Item[] {
  const storedData = localStorage.getItem('db');
  return storedData ? JSON.parse(storedData) : [];
}

export default getDataBase;
