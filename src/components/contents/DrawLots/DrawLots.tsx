// 1. 직업에 맞는 이미지가 출력되도록 구현해보기
// 2. 리펙토링
import { useState } from 'react';
import drawItems, { IDrawItem } from '../../../constants/drawCase';
import styled from 'styled-components';

const ImgLayout = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  border: 3px solid black;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StyledImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

function DrawLots() {
  const [selectedItem, setSelectedItem] = useState<string>('normal');

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

  // 스페이스 마린 이미지는 webp 이므로 예외를 발생시키는 함수를 사용한다
  const getImagePath = (item: string) => {
    if (item === 'spacemarine') {
      return `${selectedItem}.webp`;
    }
    return `${selectedItem}.jpg`;
  };
  return (
    <div>
      <h1>4% 확률의 스페이스 마린 뽑기</h1>
      {selectedItem ? <h2>{selectedItem}</h2> : ''}
      <button onClick={handleClick}>나의 직업 뽑기</button>
      <ImgLayout>
        <StyledImg src={`/img/${getImagePath(selectedItem)}`} alt='직업 이미지'></StyledImg>
      </ImgLayout>
      {selectedItem === 'spacemarine' && <h1>황제 폐하를 위하여!!!</h1>}
    </div>
  );
}

export default DrawLots;
