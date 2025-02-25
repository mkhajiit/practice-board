import * as tf from '@tensorflow/tfjs';
import { xs, ys } from '../constants/operationData';

const operationTf = async (inputArr: number[]) => {
  console.log(inputArr);

  const [firstNum, secondNum] = inputArr;

  // 입력 배열을 숫자만 포함하는 배열로 변환
  const input = tf.tensor2d([[firstNum, secondNum]], [1, 2]);

  // 모델 생성
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 16, inputShape: [2], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1 })); // 출력은 1개

  model.compile({
    loss: 'meanSquaredError',
    optimizer: 'adam',
  });

  // 모델 학습
  await model.fit(xs, ys, { epochs: 5000 });

  const result = model.predict(input);

  // result가 Tensor[] 일수도 있으니 타입 때문에 조건문 사용
  if (result instanceof tf.Tensor) {
    // 예측값을 가져와서 반환
    const resultValue = result.dataSync()[0]; // 텐서에서 값을 추출
    console.log(resultValue);
    return resultValue;
  } else {
    throw new Error('Prediction result is not a tensor.');
  }
};

export default operationTf;
