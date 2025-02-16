// 객체 배열의 타입을 설정
export interface Item {
  id: string;
  title: string;
  content: string;
  downloadUrl?: string; // 이미지url은 선택적
}

const tempDB: Item[] = [];

export default tempDB;
