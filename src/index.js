import { setupScene, changeModel, firstAnimation } from './3dview/scene';
import PureFullPage from 'pure-full-page';
import 'pure-full-page/lib/pureFullPage.min.css';
import TWEEN from '@tweenjs/tween.js';
import './index.css';

let animationId;

// 初始化容器
setupScene();

// 显示第一个动画
firstAnimation().then(() => {
  // 显示dom
  document.querySelector('#pureFullPage').style.opacity = '1';
  document.querySelector('#mouse').style.opacity = '1';

  // 创建全屏滚动容器
  new PureFullPage({
    definePages() {
      if (animationId) {
        TWEEN.remove(animationId);
      }

      const index = Math.abs(this.currentPosition / this.viewHeight);

      // 切换模型
      changeModel(index);
    },
  }).init();
});
