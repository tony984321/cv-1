let html = document.querySelector('#html');
let style = document.querySelector('#style');
let bgm = document.querySelector('#bgm');
let string = `/* 你好，我叫Tony
 * 接下来，我要演示一下我的前端功底
 * 首先我要准备一个div
 */
#taiji {
  border: 1px solid red;
  width: 300px;
  height: 300px;
}
/* 接下来，我要在container里添加一个八卦图
 * 注意看好了
 * 首先把container变成一个圆
 */
#taiji {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  border: none;
}
/* 八卦也称太极图
 * 由一黑一白两条阴阳鱼组成
 * 我们先把container的背景色变成半黑半白
 */
#taiji {
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 接下来我们用伪元素来画两个鱼头*/
#taiji::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  width: 150px;
  height: 150px;
  background: #000;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}

#taiji::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 150px;
  background: #fff;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;

let string2 = ''
let n = 0;

let step = () => {
  setTimeout(() => {
    if(string[n] === '\n') {
      string2 += '<br>';
    };

    if(string[n] === ' ') {
      string2 += '&nbsp;';
    }
    string2 += string[n];

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);

    if(n < string.length-1) {
      n += 1
      step();
    }else {
      bgm.pause();
    };
  }, 50);
}

step();
