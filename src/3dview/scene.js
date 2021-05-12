import {
  PerspectiveCamera,
  Scene,
  FogExp2,
  WebGLRenderer,
  Geometry,
  TextureLoader,
  Vector3,
  VertexColors,
  Points,
  Color,
  PointsMaterial,
  Group,
} from 'three';
import JSONLoader from '../loader/JSONLoader';
import TWEEN from '@tweenjs/tween.js';
// import createGui from './createGui';
import rangeRandom from '../utils/rangeRandom';

const container = document.createElement('div');
container.id = 'view';
const glist = new Array(6);
let camera, scene, renderer, particles, group, geometry;

// 场景初始化
export function setupScene() {
  // 初始化变量
  initVariable();

  // 初始变换粒子
  initMainParticles();

  // 初始化环境粒子
  initAroundParticles();

  // 初始化模型
  initModel();

  window.addEventListener('resize', onWindowResize, false);

  animate();

  return {
    particles,
  };
}

// 模型切换
export function changeModel(index) {
  // 模型动画
  geometry.vertices.forEach(function (vtx, i) {
    let twInstance = vtx.tweenvtx;
    if (!twInstance) {
      twInstance = new TWEEN.Tween(vtx);
    }
    const length = glist[index].vertices.length;
    const o = glist[index].vertices[i % length];
    twInstance
      .to(
        {
          x: o.x,
          y: o.y,
          z: o.z,
        },
        1000
      )
      .easing(TWEEN.Easing.Exponential.In)
      // .delay(delay * Math.random())
      .start();
  });
}

// 改变尺寸时
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// 动画
function animate() {
  requestAnimationFrame(animate);
  render();
}

// 每一帧渲染
function render() {
  camera.lookAt(scene.position);
  geometry.verticesNeedUpdate = true;
  geometry.colorsNeedUpdate = true;

  TWEEN.update();
  renderer.render(scene, camera);
}

// 首次动画
export function firstAnimation() {
  const baseVal = -Math.PI * 0.6;

  return new Promise(resolve => {
    group.rotation.y = baseVal;
    const twInstance = new TWEEN.Tween(group.rotation);
    twInstance
      .to(
        {
          y: 0,
        },
        5000
      )
      .delay(200)
      .onComplete(() => {
        // 绑定鼠标动画
        document.addEventListener('mousemove', onDocumentMouseMove, false);

        // 自动切换到第一个模型
        changeModel(0);
        resolve(true);
      })
      .easing(TWEEN.Easing.Sinusoidal.InOut)
      .start();
  });
}

// 初始化变量
function initVariable() {
  document.body.appendChild(container);

  // 初始化相机
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 10000);
  camera.position.z = 750;
  // 初始化场景
  scene = new Scene();
  // 雾化
  scene.fog = new FogExp2(0x05050c, 0.0005);

  group = new Group();

  scene.add(group);

  // 初始化renderer
  renderer = new WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x05050c);
  container.appendChild(renderer.domElement);
}

// 初始化模型
function initModel() {
  const loader = new JSONLoader();

  loader.load('assets/1game.json', function (geo, materials) {
    geo.center();
    geo.normalize();

    geo.scale(500, 500, 500);
    geo.rotateX(Math.PI / 3); // 上下
    geo.rotateY(-Math.PI / 8); // 左右
    geo.rotateZ(-Math.PI / 6);
    geo.translate(-300, 100, 0);

    glist[0] = geo;
  });
  loader.load('assets/2ac.json', function (geo, materials) {
    geo.center();
    geo.normalize();

    geo.scale(500, 500, 500);

    geo.rotateY(-Math.PI / 7); // 左右
    geo.translate(280, 0, 0);

    glist[1] = geo;
  });

  loader.load('assets/3book.json', function (geo, materials) {
    geo.center();
    geo.normalize();

    geo.scale(700, 600, 700);

    geo.rotateY(-Math.PI / 10); // 左右
    geo.translate(-300, 100, 0);

    glist[2] = geo;
  });

  loader.load('assets/4movice.json', function (geo, materials) {
    geo.center();
    geo.normalize();

    geo.scale(900, 900, 900);
    geo.rotateX(Math.PI / 2);
    geo.rotateY(0.98 * Math.PI); // 左右

    glist[3] = geo;
  });

  loader.load('assets/5kv.json', function (geo, materials) {
    geo.center();
    geo.normalize();
    geo.scale(800, 800, 800);
    geo.translate(0, -400, 0);
    glist[4] = geo;
  });

  loader.load('assets/qr.json', function (geo, materials) {
    geo.center();
    geo.normalize();

    geo.scale(400, 400, 400);
    glist[5] = geo;
  });
}

// 初始化变换粒子
function initMainParticles() {
  // 初始化geometry
  geometry = new Geometry();

  // 初始化贴图
  const textureLoader = new TextureLoader();
  //解决跨域问题
  textureLoader.crossOrigin = '';
  // 圆点
  const mapDot = textureLoader.load('/assets/gradient.png');

  const POINT_LENGTH = 7524,
    POINT_SIZE = 4;
  for (let i = 0; i < POINT_LENGTH; i++) {
    const vertex = new Vector3();
    vertex.x = rangeRandom(window.innerWidth, -window.innerWidth);
    vertex.y = rangeRandom(window.innerHeight, -window.innerHeight);
    vertex.z = rangeRandom(window.innerWidth, -window.innerWidth);
    geometry.vertices.push(vertex);
    geometry.colors.push(new Color(255, 255, 255));
  }
  const material = new PointsMaterial({
    size: POINT_SIZE,
    sizeAttenuation: true,
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    map: mapDot,
  });

  material.vertexColors = VertexColors;
  particles = new Points(geometry, material);

  group.add(particles);
  // scene.add(particles);
}

// 初始化环境粒子
function initAroundParticles() {
  const around = new Geometry();

  // 初始化贴图
  const textureLoader = new TextureLoader();
  // 解决跨域问题
  textureLoader.crossOrigin = '';
  // 圆点
  const mapDot = textureLoader.load('/assets/gradient.png');

  const minZVal = window.innerWidth * 0.7;
  const minYVal = window.innerHeight * 0.8;
  const color = new Color(255, 255, 255);
  // 初始化漫游粒子
  for (let i = 0; i < 100; i++) {
    const vertex = new Vector3();
    vertex.x = rangeRandom(minZVal, -minZVal); // 水平方向
    vertex.y = rangeRandom(minYVal, -minYVal); // 垂直方向
    vertex.z = rangeRandom(minZVal, -minZVal);
    around.vertices.push(vertex);
    around.colors.push(color);
  }
  const aroundMaterial = new PointsMaterial({
    size: 10,
    sizeAttenuation: true,
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    map: mapDot,
  });

  aroundMaterial.vertexColors = VertexColors;
  const aroundPoints = new Points(around, aroundMaterial);
  group.add(aroundPoints);
  // scene.add(aroundPoints);

  new TWEEN.Tween(aroundPoints.rotation)
    .to(
      {
        y: Math.PI * 2,
      },
      200000
    )
    .repeat(Infinity)
    .start();
}

function onDocumentMouseMove(event) {
  const rotateY = (event.pageX / (window.innerWidth * 30)) * 2 * Math.PI;
  const rotateX = (event.pageY / (window.innerHeight * 200)) * 2 * Math.PI;

  new TWEEN.Tween(group.rotation)
    .to(
      {
        x: rotateX,
        y: rotateY,
      },
      3000
    )
    .easing(TWEEN.Easing.Quadratic.Out)
    .start();

  event.preventDefault();
}
