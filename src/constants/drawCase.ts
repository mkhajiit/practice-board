// 제네릭 타입 설정
export interface IDrawItem<T> {
  item: T;
  weight: number;
}

// {아이템 이름, 확률 가중치}
const drawItems: IDrawItem<string>[] = [
  { item: 'warrior', weight: 15 },
  { item: 'archer', weight: 15 },
  { item: 'knight', weight: 10 },
  { item: 'mage', weight: 10 },
  { item: 'citizen', weight: 23 },
  { item: 'merchant', weight: 23 },
  { item: 'spacemarine', weight: 4 },
];

export default drawItems;
