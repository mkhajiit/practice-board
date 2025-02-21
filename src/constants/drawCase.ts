// 제네릭 타입 설정
export interface IDrawItem<T> {
  item: T;
  weight: number;
}

// {아이템 이름, 확률 가중치}
const drawItems: IDrawItem<string>[] = [
  { item: 'Warrior', weight: 15 },
  { item: 'Archer', weight: 15 },
  { item: 'Knight', weight: 10 },
  { item: 'Mage', weight: 10 },
  { item: 'Citizen', weight: 25 },
  { item: 'Merchant', weight: 25 },
];

export default drawItems;
