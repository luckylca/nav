<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>高级感盒子边框</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #1e3c72, #2a5298); /* 背景渐变 */
      margin: 0;
    }

    .box {
      position: relative;
      width: 300px;
      height: 200px;
      background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
      border-radius: 16px; /* 圆角 */
      overflow: hidden; /* 防止内容溢出 */
      border: 2px solid transparent; /* 透明边框 */
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* 内嵌阴影 */
    }

    .box::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(135deg, #ff6b6b, #feca57, #1dd1a1, #54a0ff);
      background-size: 400% 400%; /* 动态渐变 */
      animation: gradientAnimation 6s infinite; /* 渐变动画 */
      z-index: -1;
      filter: blur(10px); /* 模糊效果 */
    }

    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .box:hover {
      transform: scale(1.05); /* 悬停时放大 */
      transition: transform 0.3s ease-in-out; /* 平滑过渡 */
    }

    .content {
      position: relative;
      z-index: 1;
      text-align: center;
      color: white;
      font-family: 'Arial', sans-serif;
      font-size: 18px;
      padding-top: 60px;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="content">
      高级感盒子
    </div>
  </div>
</body>
</html>
