// 1. 직업에 맞는 이미지가 출력되도록 구현해보기
// 2. 리펙토링
import { useState } from 'react';
import drawItems, { IDrawItem } from '../../../constants/drawCase';

function DrawLots() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const getRandomItem = <T,>(items: IDrawItem<T>[]): T => {
    const totalWeight = items.reduce((sum, current) => sum + current.weight, 0);
    const rand = Math.random() * totalWeight;
    let sum = 0;

    // 난수로 생성된 숫자 rand가 각 item 가중치 범위에 포함되면 루프가 return 되면서 종료된다.
    for (const weightedItem of items) {
      sum += weightedItem.weight;
      if (rand < sum) {
        return weightedItem.item; // 객체의 item 이름을 반환함
      }
    }

    throw new Error('No item selected');
  };

  const handleClick = () => {
    const item = getRandomItem(drawItems);
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>제비뽑기</h1>
      {selectedItem ? <h2>{selectedItem}</h2> : ''}
      <button onClick={handleClick}>나의 직업 뽑기</button>
    </div>
  );
}

export default DrawLots;
