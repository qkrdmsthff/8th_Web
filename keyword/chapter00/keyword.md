chapter 00 - HTML

- 시맨틱 태그란?
    
    먼저 시맨틱 태그(Semantic Tag)는 포함된 콘텐츠의 특정 의미를 정의하고 목적을 갖는 태그입니다. 기존 HTML에서 제공되는 <div> 태그의 기능으로, block element (하나의 태그가 브라우저에서 좌우공간을 모두 차지하며, 독립적인 공간을 가지는 요소) 이면서, 사이트의 구조를 설계하기 위해 제공됩니다. 이는 콘텐츠를 논리적인 섹션으로 구성하고, 각 섹션의 역할과 기능을 전달을 용이하게 합니다.
    
    즉, 시맨틱 태그란 각 태그에 의미를 부여하여 웹사이트의 구조를 파악하기 쉽게 만듭니다.
    
    시맨틱 태그의 기본적인 규칙
    
    1. 콘텐츠의 의미와 기능에 따라 적합한 요소를 사용한다.
    2. 요소들을 명확한 계층 구조와 구조를 형성할 수 있도록 올바르게 중첩해야 한다.
        
        요소를 적절한 위치에 배치하여 상호 관계를 명확하게 하여야 합니다.
        
        ex ) 페이지의 주요 콘텐츠를 통틀어 묶으려면 <main> 태그를 사용해야 하나, 페이지를 여러 하위 주제나 제목과 같은 목록을 생성하기 위해선 <section> 태그를 이용하여야 한다.
        
    3. 의미 없는 요소나 속성을 사용하지 않아야 한다.
    
    시맨틱 태그의 장점
    
    1. 접근성 향상
    2. 검색엔진최적화(SEO) 향상
    3. 가독성 향상
    
    - div 태그로만 페이지를 구조화 하는 것이 좋은가? 🍠
        
        <div> 태그는 레이아웃 생성하거나 콘텐츠를 나누는 컨테이너로서 사용합니다. 대부분의 HTML 태그들은 각 태그 고유의 의미를 가지고 있으나, <div> 태그는 오직 컨테이너로서 본질적으로 어떠한 의미도 없습니다. 따라서, 의미가 있는 태그를 사용할 수 없는 상황에서만 이용하게 됩니다. 즉, 시맨틱 태그의 기본 규칙 - 의미 없는 요소나 속성을 사용하지 않아야 한다는 약속을 어기기 때문에 <div> 태그로만 페이지를 구조화하는 것은 올바르지 못하다고 생각합니다.
        

        
    - 기타 태그 추가 정리해보기 🍠
        `header` : 문서 / 페이지의 머릿글 지정하는 태그 (상단에 위치)                                                        
        `main` : 웹사이트나 텍스트의 본문이나 콘텐츠                                                               
        `mark` : 형광펜으로 밑줄 그은 효과를 주며, 중요한 내용을 강조시키는 태그          
        `figcaption` : <figure> 태그의 자식 태그로, <figure> 태그를 부가 설명할 때 사용

    - **`Sementic Tag`**를 잘 활용하였을 때 장점은? 🍠
    1. 접근성 향상
    2. 검색엔진최적화(SEO) 향상
    3. 가독성 향상

    inline element 와 같이 한 줄에 다른 요소들과 같이 배치되고, inline element 에선 불가능했던 width/height, margin/padding 속성의 상하 간격 조정이 가능해집니다.

    즉, 내부적으로는 block element 의 규칙을 따르고 외부적으로 inline element 의 규칙을 따릅니다.

    inline-block element 의 대표적인 예시
    1. button
    2. input    
    3. select

    ![스크린샷 2025-03-18 오후 10.32.29.png](attachment:504683bd-fc04-464f-996d-9d4719370aad:스크린샷_2025-03-18_오후_10.32.29.png)
    위 사진처럼 block 은 크기와 줄바꿈, 여백이 모두 적용이 됩니다.
    하지만 inline 요소는 여백은 좌우로만, 크기와 줄바꿈은 모두 적용되지 않습니다.
    inline-block 요소는 block의 요소와 비슷하게 크기와 여백이 모두 적용되지만, inline 처럼 줄바꿈이 적용되지 않습니다.

chapter 00 - CSS

- border vs outline의 차이점 🍠
    
    border 는 박스 모델의 일부로서, 요소의 레이아웃에 영향을 주는 반면에,                                         outline 은 요소의 테두리 바깥에 있는 선입니다.
    
    두 박스 사이즈 모두 10
    
    ![스크린샷 2025-03-18 오후 10.53.34.png](attachment:0fc0cc52-96b2-41cf-bead-6aa89cd2b28d:스크린샷_2025-03-18_오후_10.53.34.png)
    
    border 를 5만큼 줄였을 때
    
    ![스크린샷 2025-03-18 오후 10.54.04.png](attachment:ed64a6a2-7681-4d15-9e3b-6b841df68d9f:스크린샷_2025-03-18_오후_10.54.04.png)
    
    outline 을 5만큼 줄였을 때
    
    ![스크린샷 2025-03-18 오후 10.54.20.png](attachment:39ab5576-3ac9-4f69-9c14-cf8cc8768914:스크린샷_2025-03-18_오후_10.54.20.png)


- 고구마 상자 옮기기 예제
- 코드를 첨부해주세요 🍠
    
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .box {
          width: 100px;
          height: 100px;
          background-color: purple;
          color: white;
          box-sizing: border-box;
          position: relative;
          top: 150px;
          left: 0px;
        }
      </style>
    </head>
    
    <body>
      <div class="box">BOX</div>
      <h1>고구마 상자</h1>
    </body>
    
    </html>

![스크린샷 2025-03-18 오후 10.58.34.png](attachment:d3368038-71e5-467e-9b9c-f342dc6cf95b:스크린샷_2025-03-18_오후_10.58.34.png)

- **`position: absolute`**를 활용하여 본인의 힘으로, 아래와 같은 이미지로 BOX2를 이동시켜보세요! 🍠
    
    ![스크린샷 2024-07-18 오후 7.13.52.png](attachment:5a810066-8c42-4e8a-a2ac-fe8757085432:%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2024-07-18_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_7.13.52.png)
    
### 코드는 아래에 첨부해주세요!
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      box-sizing: border-box;
    }

    .box1 {
      width: 500px;
      height: 500px;
      background-color: purple;
      color: white;
      position: relative;
    }

    .box2 {
      width: 200px;
      height: 200px;
      background-color: yellow;
      position: absolute;
      top: 0px;
      left: 0px;
    }
  </style>
</head>

<body>
  <div class="box1">BOX1</div>
  <h1 class="box2">BOX2</h1>
</body>

</html>

### 키워드 정리 🍠

- text-align
    
    텍스트의 수평 정렬을 설정하기 위해 사용합니다. 이 속성을 사용할 때는 left, right, center, justify 의 값을 설정해 줄 수 있습니다.

    실습 예제) HTML 코드
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel = "stylesheet" href="style.css">
        <title> chichi </title>
    </head>
    <body>
        <h1 color : purple> CHICHI </h1>
    </body>
    </html>

    실습 예제) CSS 코드

    @charset "uft-8";

    h1 {
        border: 5px;
        text-align: center;
    }
    
- margin
    
    마진은 현재 요소 주변의 여백 공간을 의미합니다. 마진을 조절하여 현재 요소와 다른 요소들 간의 공간을 조절할 수 있습니다.
    
    margin 속성에는 top, bottom, left, right 가 존재하고,
    
    1. margin-top : 상단의 마진 영역 조절
    2. margin-bottom : 하단의 마진 영역 조절
    3. margin-left : 왼쪽 마진 영역 조절
    4. margin-right : 오른쪽 마진 영역 조절
    
    을 의미하므로, 특정 부분의 위치 조정을 원한다면 속성을 붙여서 사용합니다.
    
    margin의 속성값에 대해서는 값, 백분율, auto가 있습니다.
    
    1. 값 : 단위를 직접 지정
    2. 백분율 : 부모 요소를 기준으로 백분율 지정
    3. auto : 브라우저 및 요소의 크기에 따라 적절하게 자동 조절

    실습 예제) HTML 코드
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel = "stylesheet" href="style.css">
        <title> chichi </title>
    </head>
    <body>
        <div class = "container"> 
            <div class = "child"></div>
    </div>
    </body>
    </html>

    실습 예제) CSS 코드
    
    @charset "uft-8";

    .container {
        margin : 25px;
        width : 350px;
        height : 200px;
        outline : dashed 1px purple;
    }

    .child {
        width : 50px;
        height : 50px;
        background-color :aquamarine;
        margin : 0 auto;
    }

- flex
    
    flex 는 레이아웃 배치 전용 기능을 합니다. 이는 flexible box, flexbox 라고 표현하기도 합니다.
    
    flex 를 사용하기 위해선 부모 요소에 필수적으로 적용해야 하는 속성이 있습니다.
    
    1. `display : flex;` flex의 레이아웃을 적용
    2. `flex-direction : (방향);` 내부 요소들의 정렬 방향

    실습 예제) HTML 코드

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel = "stylesheet" href="style.css">
        <title> chichi </title>
    </head>
    <body>
        <div class = "container"> 
            <div class = "child"></div>
        </div>
    </body>
    </html>

    실습 예제) CSS 코드

    @charset "uft-8";

.container {
    margin : 25px;
    width : 350px;
    height : 200px;
    outline : dashed 1px purple;
    display : flex;
    justify-content : center;
}

.child {
    width : 50px;
    height : 50px;
    background-color :aqua;
}

- translate
    
    translate 는 변형 함수이며, 2차원이나 3창원에서 x, y, z축 방면으로 요소를 이동시킬 때 사용합니다.
    
    1. `transform : translateX(크기);` 해당하는 요소를 x축 방향으로 (크기) 만큼 이동
    2. `transform : translateY(크기);` 해당하는 요소를 y축 방향으로 (크기) 만큼 이동
    3. `transform : translateXY(크기, 크기);` 해당하는 요소를 x, y축 방향으로 (크기, 크기) 만큼 이동
    4. `transform : translateXYZ(크기, 크기, 크기);` 해당하는 요소를 x, y, z축 방향으로 (크기, 크기, 크기) 만큼 이동
    5. `transform : translateZ(크기);` 해당하는 요소를 z축 방향으로 (크기) 만큼 이동
    
    위와 같은 코드를 사용하여 원하는 방면으로 이동시킬 수 있습니다.

    실습 예제) HTML 코드

    <!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href="style.css">
    <title> chichi </title>
</head>
<body>
    <div class = "container"> 
    </div>
</body>
</html>

    실습 예제) CSS 코드

    @charset "uft-8";

.container {
    width : 50px;
    height : 50px;
    background-color :blueviolet;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

- grid
    
    grid 는 flex 와 달리 두 방향 (가로, 세로) 2차원 레이아웃 시스템입니다.
    
    flex 보다 더욱 복합적인 레이아웃을 표현할 수 있습니다.

    실습 예제) HTML 코드

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel = "stylesheet" href="style.css">
    <title> chichi </title>
</head>
<body>
    <div class="center">
        <div class="inner"></div>
    </div>
</body>
</html>

    실습 예제) CSS 코드

    @charset "uft-8";

    .center {
    display: grid;
    place-items: center;
    }

    .inner {
    height: 50px;
    width: 50px;
    background-color: purple;
    }

    - 반응형 background 🍠
    - background-image
        
        `background-image: url("주소");` : url 주소에 있는 이미지를 가져와 삽입할 수 있습니다.            배경 이미지의 경로와 그라디언트를 설정할 수 있습니다.
        
    - background-repeat
        
        `background-repeat : (no-)repeat;` 백그라운드 이미지의 반복 방식을 지정합니다.
        
    - background-position
        
        `background-position : center top;` 백그라운드 이미지의 위치를 조절합니다.
        
    - background-size
        
        div 의 크기에 맞게 백그라운드 이미지의 크기를 조절합니다.
        
        - `background-size : px;` : 이미지의 크기를 고정시킵니다.
        - `background-size : auto;` : 이미지의 비율을 통해 자동으로 다른 축의 크기를 결정합니다.
        - `background-size : %;` : 컨테이너의 넓이에 비례하여 사이즈를 조절합니다.
        - `background-size : contain;` : 컨테이너의 전체를 덮으나 이미지를 자르지 않습니다.
        - `background-size : cover;` : 컨테이너를 완전히 덮습니다. (반응형 X)
    - 축약형
        
        `background : url(”이미지 주소”) no-repeat(반복 여부) center top(위치) / 100%(사이즈);`


