// 반드시 리펙토링해보기
import * as tf from '@tensorflow/tfjs';
import { generateBalancedDataset } from '../constants/operationData';

// 모델 저장 경로
const MODEL_PATH = 'localstorage://operation-model';
// 데이터셋 400개
const dataset = generateBalancedDataset(3000);
const xs = dataset.xs;
const ys = dataset.ys;
// 모델 생성 함수
const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 32, inputShape: [3], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 16, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1 }));

  model.compile({
    loss: 'meanSquaredError',
    optimizer: tf.train.adam(0.01), // 학습률 증가
  });

  return model;
};

// 모델 학습 함수
const trainModel = async (model: tf.Sequential) => {
  await model.fit(xs, ys, {
    epochs: 500, // 너무 크면 과적합 위험
    batchSize: 32,
    validationSplit: 0.2,
    callbacks: [
      tf.callbacks.earlyStopping({ monitor: 'val_loss', patience: 20 }), // 20 epoch 동안 개선 없으면 멈춤
    ],
  });
  await model.save(MODEL_PATH);
  console.log('Model trained and saved.');
};

// 모델 로드 함수
const loadModel = async () => {
  try {
    const model = await tf.loadLayersModel(MODEL_PATH);
    console.log('저장소로부터 모델을 임포트합니다');
    return model;
  } catch (err: unknown) {
    console.log('저장된 모델이 없으므로 새로운 모델을 만듭니다');
    const model = createModel();
    await trainModel(model);
    console.log(err);
    return model;
  }
};

const operationTf = async (inputArr: number[]) => {
  console.log(inputArr);

  const [firstNum, secondNum, operator] = inputArr;

  // 입력 배열을 숫자만 포함하는 배열로 변환 (정규화 진행)
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
