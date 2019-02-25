import { PointLight } from 'three';

const sunlight = new PointLight(0xff8888, 1.0, 0, 2);

sunlight.position.set(300, 0, 150);

export default sunlight;
