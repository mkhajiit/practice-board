import * as tf from '@tensorflow/tfjs';
import { xs, ys } from '../constants/operationData';

// 모델 저장 경로
const MODEL_PATH = 'localstorage://operation-model';

// 모델 생성 함수
const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 32, inputShape: [3], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1 })); // 출력은 1개

  model.compile({
    loss: 'meanSquaredError',
    optimizer: 'adam',
  });

  return model;
};

// 모델 학습 함수
const trainModel = async (model: tf.Sequential) => {
  await model.fit(xs, ys, { epochs: 10000 });
  await model.save(MODEL_PATH);
  console.log('Model trained and saved.');
};

// 모델 로드 함수
const loadModel = async () => {
  try {
    const model = await tf.loadLayersModel(MODEL_PATH);
    console.log('Model loaded from storage.');
    return model;
  } catch (err: unknown) {
    console.log('No saved model found. Creating a new one.');
    const model = createModel();
    await trainModel(model);
    console.log(err);
    return model;
  }
};

const operationTf = async (inputArr: number[]) => {
  console.log(inputArr);

  const [firstNum, secondNum, operator] = inputArr;

  // 입력 배열을 숫자만 포함하는 배열로 변환
  const input = tf.tensor2d([[firstNum, secondNum, operator]], [1, 3]);

  // 모델 로드 또는 생성
  const model = await loadModel();

  const result = model.predict(input) as tf.Tensor;

  // 예측값을 가져와서 반환
  const resultValue = result.dataSync()[0]; // 텐서에서 값을 추출
  console.log(resultValue);
  return resultValue;
};

export default operationTf;
