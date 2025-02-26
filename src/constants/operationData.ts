// 자동으로 데이터셋을 만드는 함수 [숫자1, 숫자2, 연산자(0 또는 1)]
// 데이터셋의 범위로 인한 러닝문제로 인해 작은숫자 중간숫자 큰숫자를 분리한다
// 반드시 리펙토링 해볼것
import * as tf from '@tensorflow/tfjs';

export function generateBalancedDataset(numSamples: number) {
  const xs: number[][] = [];
  const ys: number[][] = [];

  const smallFraction = 0.2; // 작은 숫자의 비율
  const mediumFraction = 0.4; // 중간 숫자의 비율

  const smallNumSamples = Math.floor(numSamples * smallFraction);
  const mediumNumSamples = Math.floor(numSamples * mediumFraction);
  // 큰 숫자 비율
  const largeNumSamples = numSamples - smallNumSamples - mediumNumSamples;

  // 작은 숫자 데이터셋 생성
  for (let i = 0; i < smallNumSamples; i++) {
    const a = Math.floor(Math.random() * 100); // 0부터 99까지의 랜덤 정수 a를 생성
    const b = Math.floor(Math.random() * 100); // 0부터 99까지의 랜덤 정수 b를 생성
    const operator = Math.random() > 0.5 ? 0 : 1; // 0 for addition, 1 for subtraction

    xs.push([a, b, operator]);
    ys.push([operator === 0 ? a + b : a - b]);
  }

  // 중간 숫자 데이터셋 생성
  for (let i = 0; i < mediumNumSamples; i++) {
    const a = Math.floor(Math.random() * 10000); // 0부터 9999까지의 랜덤 정수 a를 생성
    const b = Math.floor(Math.random() * 10000); // 0부터 9999까지의 랜덤 정수 b를 생성
    const operator = Math.random() > 0.5 ? 0 : 1; // 0 for addition, 1 for subtraction

    xs.push([a, b, operator]);
    ys.push([operator === 0 ? a + b : a - b]);
  }

  // 큰 숫자 데이터셋 생성
  for (let i = 0; i < largeNumSamples; i++) {
    const a = Math.floor(Math.random() * 1000000000); // 0부터 999999999까지의 랜덤 정수 a를 생성
    const b = Math.floor(Math.random() * 1000000000); // 0부터 999999999까지의 랜덤 정수 b를 생성
    const operator = Math.random() > 0.5 ? 0 : 1; // 0 for addition, 1 for subtraction

    xs.push([a, b, operator]);
    ys.push([operator === 0 ? a + b : a - b]);
  }

  return {
    xs: tf.tensor2d(xs, [numSamples, 3]),
    ys: tf.tensor2d(ys, [numSamples, 1]),
  };
}
