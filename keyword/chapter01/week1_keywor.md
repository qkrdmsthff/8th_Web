- **null과 undefined의 차이 점에 대해 직접 작성해주세요!** 🍠
    
    JS 에서의 `null`, `undefined` 는 모두 값이 없음 (falsy) 을 나타내는 특별한 값입니다.                       따라서, 이 두 값들은 조건문에서 false 로 표기합니다. 
    
    1. null
        
        null 은 어떠한 reference 변수에 대해 주소가 존재하지 않을 때 사용합니다.                                     빈 객체를 가리키는 객체 포인터이므로 주소값을 받을 준비가 되어 있기 때문에 크기가 있어 메모리를 차지합니다.
        
    2. undefined
        
        undefined 은 값이 대입되지 않은 변수 혹은 속성을 사용하려고 할 때 사용합니다.                        메모리적 측면에서, 변수는 메모리에 존재하지만 값이 없기 때문에 매우 작습니다.
        
    
     
    
    `typeof` 라는 명령어를 이용하여 두 명령어를 비교해 보면, 아래와 같이 출력됩니다.
    
    ```jsx
    let x = null;
    typeof x;       //결과 : 'object'
    
    let y = undefined;
    typeof y;       //결과 : 'undefined'
    ```
    
    두 변수를 사용할 때 ‘없음’을 저장하기 위해서는 대입한 적 없는 변수 혹은 속성과, 명시적으로 없음을 나타내는 경우를 구분하여야 합니다. 개발자의 입장에서 명시적으로 없다는 것을 나타내고 싶다면, 항상 `null` 값을 사용하는 것이 좋습니다.

    - 실습 정리 🍠
    - string
        
        ```tsx
        const chichi : string = '치치';
        console.log(chichi);
        ```
        
        위 코드를 실행할 경우 아래와 같이 올바르게 출력물이 뜹니다.
        
        ![스크린샷 2025-03-18 오후 6.53.53.png](attachment:600ddcaf-74aa-4b0e-a6e9-77be74a0cb75:스크린샷_2025-03-18_오후_6.53.53.png)
        
        ```tsx
        const chichi : string = 0219;
        console.log(chichi);
        ```
        
        위 코드를 실행할 경우, chichi 의 값이 문자열이 아니므로 오류가 발생합니다.
        
        ![스크린샷 2025-03-18 오후 6.55.52.png](attachment:f44c2abe-0b59-4694-9238-aceace5ffa28:스크린샷_2025-03-18_오후_6.55.52.png)
        
    - number
    
    ```tsx
    const chichiAge : number = 22;
    
    let intNumber : number = 1;
    let floatNumber : number = 2.19;
    let binaryNumber : number = 0b1111;
    let hexaDecimalNumber : number = 0xFF;
    let octalNumber : number = 0o22;
    
    console.log(chichiAge);
    console.log(intNumber);
    console.log(floatNumber);
    console.log(binaryNumber);
    console.log(hexaDecimalNumber);
    console.log(octalNumber);
    ```
    
    위 코드로 TS 프로그램을 돌렸을 때, 아래와 같이 결과를 얻을 수 있습니다.
    
    ![스크린샷 2025-03-18 오후 8.18.43.png](attachment:92b1978d-d771-485a-9d84-73430bc5573a:스크린샷_2025-03-18_오후_8.18.43.png)
    
    ```tsx
    const chichiAge : number = '치치';
    ```
    
    하지만, 선언할 때 숫자를 선언하는 것이 아닌 문자열로 선언을 하면, 아래와 같은 경고 문구가 뜹니다.
    
    ![스크린샷 2025-03-18 오후 9.10.47.png](attachment:918c0c48-a503-4f63-b952-7c7becfe2e38:스크린샷_2025-03-18_오후_9.10.47.png)
    
- boolean
    
    ```tsx
    const isTrue : boolean = true;
    const isFalse : boolean = false;
    
    let number : number = 219;
    
    if (number > 200) { console.log(isTrue); }
    ```
    
    아래와 같이 number 의 값이 200보다 크기 때문에 true 값이 반환되는 것을 볼 수 있다.
    
    ![스크린샷 2025-03-18 오후 8.27.18.png](attachment:4bc1d758-bf07-47d1-b3a2-8809c1aa1fca:스크린샷_2025-03-18_오후_8.27.18.png)
    
    ```tsx
    const isTrue : boolean = true;
    const isFalse : boolean = false;
    
    let number : number = 219;
    
    if (number < 200) { console.log(isTrue); }
    else { console.log(isFalse); }
    ```
    
    위는 number 의 값이 200보다 크기 때문에 false 값이 반환됩니다.
    
    ![스크린샷 2025-03-18 오후 8.32.42.png](attachment:8d7be42f-7982-490a-8d1c-f54beba2de46:스크린샷_2025-03-18_오후_8.32.42.png)
    
    ```tsx
    const oisTrue : boolean = 123;
    const isFalse : boolean = 'chichi';
    ```
    
    위처럼 boolean 타입을 선언할 때, true/false 값을 지정하는 것이 아니라 숫자에 대해서 또는 문자열에 대해 선언할 시 아래와 같은 경고 문구가 뜹니다.
    
    ![스크린샷 2025-03-18 오후 9.13.11.png](attachment:5f0557ec-93e3-4fb2-8074-65aaa61bf250:스크린샷_2025-03-18_오후_9.13.11.png)
    
- null
    
    ```tsx
    const isNull : null = null;
    
    if (isNull == null) { console.log("null"); }
    if (isNull != null) { console.log("is not null"); }
    ```
    
    위의 코드를 통과 시킬 때 출력되는 결과 :
    
    ![스크린샷 2025-03-18 오후 8.38.27.png](attachment:1e56951a-c79c-4f2d-a1df-6485d0c30e82:스크린샷_2025-03-18_오후_8.38.27.png)
    
    ```tsx
    const isNull : number = 123;
    
    if (isNull == null) { console.log("null"); }
    if (isNull != null) { console.log("is not null"); 
    ```
    
    위의 코드를 통과 시킬 때 출력되는 결과 :
    
    ![스크린샷 2025-03-18 오후 8.39.37.png](attachment:486a7577-5a14-4609-b1ee-3ae8fe805baa:스크린샷_2025-03-18_오후_8.39.37.png)
    
    ```tsx
    const isNull : null = 123;
    ```
    
    위처럼 null 타입을 선언할 때 숫자에 대해 선언할 시 아래와 같은 경고 문구가 뜹니다.
    
    ![스크린샷 2025-03-18 오후 9.14.58.png](attachment:45b05d80-0e65-4bc8-a008-38413a6db6de:스크린샷_2025-03-18_오후_9.14.58.png)
    
- undefined
    
    ```tsx
    const isUndefined : undefined = undefined;
    
    if (isUndefined == undefined) { console.log("undefined"); }
    if (isUndefined != undefined) { console.log("is not undefined"); }
    ```
    
    위의 코드를 통과 시킬 때 출력되는 결과 :
    
    ![스크린샷 2025-03-18 오후 8.45.09.png](attachment:25c5ef4f-bbed-47e6-82d3-1b866366a8b9:스크린샷_2025-03-18_오후_8.45.09.png)
    
    ```tsx
    const isUndefined : number = 123;
    
    if (isUndefined == undefined) { console.log("undefined"); }
    if (isUndefined != undefined) { console.log("is not undefined"); }
    ```
    
    위의 코드를 통과 시킬 때 출력되는 결과 :
    
    ![스크린샷 2025-03-18 오후 8.46.43.png](attachment:a820dd71-0760-4dea-98bf-d9aa643dcc57:스크린샷_2025-03-18_오후_8.46.43.png)
    
    ```tsx
    const isUndefined : undefined = 123;
    ```
    
    위처럼 undefined 타입을 선언할 때 숫자에 대해 선언할 시 아래와 같은 경고 문구가 뜹니다.
    
    ![스크린샷 2025-03-18 오후 9.16.26.png](attachment:ded63689-a8d5-40f6-8100-e5474c719a39:스크린샷_2025-03-18_오후_9.16.26.png)
    
- symbol
    
    ```tsx
    const chichi : symbol = Symbol('chichi');
    ```
    
    symbol 변수를 선언할 때, 숫자를 대입할 시 아래와 같은 경고 문구가 뜹니다.
    
    ```tsx
    const chichi : symbol = 123;
    ```
    
    ![스크린샷 2025-03-18 오후 9.18.21.png](attachment:e42cdad7-20ff-49d5-a54b-bdf9530489ab:스크린샷_2025-03-18_오후_9.18.21.png)
    
- bigint
    
    ```tsx
    let bigNumber1 : bigint = 123n;
    let bigNumber2 : bigint = BigInt(456);
    let bigNumber3 = 1234n //타입이 추론 가능하므로 사용할 수 있습니다.
    ```
    
    bigint 타입이 아닌 number 타입을 선언할 때, bigint 를 나타내는 n 을 붙일 시 오류가 뜹니다.
    
    또는, bigint 타입을 선언할 때, n 을 붙이지 않거나 BigInt() 를 사용하지 않는 경우 또한 오류가 발생합니다.
    
    ```tsx
    let bigNumber4 : number = 123n;
    let bigNumber5 : number = 123;
    ```
    
- object
    
    ```tsx
    const chichi : object = { chichi : 'chichi' }; //성공 케이스
    ```
    
    object 변수를 선언할 때, 객체가 아닌 숫자를 대입할 시 아래와 같은 경고 문구가 뜹니다.
    
    ```tsx
    let chichi : object = 123;
    ```
    
    ![스크린샷 2025-03-18 오후 9.37.37.png](attachment:1b2a404c-9188-4b9b-a1f6-346de157ade5:스크린샷_2025-03-18_오후_9.37.37.png)
    
- 
    
**`parameter`**(매개 변수) 타입은, 매개변수 바로 뒤에 표기하고, 반환값의 타입은, 파라미터 뒤에 콜론과 함께 예상되는 반환값의 타입을 명시해줍니다.
    
- 함수 선언식
        
        
        function minus(x: number, y: number): number {
        	return x - y;
        }
        
        
- 화살표 함수
        
        
        const getFullname = (firstName: string, lastName: string): string => {
            return firstName + lastName;
        };
        
        const fullName = getFullname('김', '용민');
        console.log(fullName); // "김용민"
        
- 함수 선언식의 특징에 대해 정리해주세요! 🍠
        
    이 방식의 가장 큰 특징은 **호이스팅**이 발생합니다.                                                                                  호이스팅은 함수 선언부가 실제로 호출될 때의 위치보다 끌어올려져 함수를 선언하기 전에 호출할 수 있다는 점입니다.
        
    이 방식의 특징
        
    1. 코드를 구현한 위치와 관계없이 호출할 수 있습니다.
    2. 전체 스크립트가 분석될 때까지 기다려야 합니다.
    3. 호이스팅의 영향을 받습니다.
- 화살표 함수의 특징에 대해 정리해주세요! 🍠
        
    화살표 함수 표현식은 함수 표현식의 간결한 대안입니다. 의미적 차이와 의도적인 사용상의 제한을 가지고 있습니다.
        
    화살표 함수의 특징
        
    1. 자체 바인딩이 존재하지 않습니다.
    2. `인수`, `super` 를 사용합니다.
    3. `method` 로 사용하면 안됩니다.
    4. 생성자로 사용하면 안되고, [`new.target`](http://new.target) 키워드에 대한 액서스 또한 없습니다.
    5. 함수 내부에서 [`yield`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield)를 사용할 수 없으며 제너레이터 함수로 생성할 수 없습니다.

- 함수 선언식의 특징에 대해 정리해주세요! 🍠
    
    이 방식의 가장 큰 특징은 **호이스팅**이 발생합니다.                                                                                  호이스팅은 함수 선언부가 실제로 호출될 때의 위치보다 끌어올려져 함수를 선언하기 전에 호출할 수 있다는 점입니다.
    
    이 방식의 특징
    
    1. 코드를 구현한 위치와 관계없이 호출할 수 있습니다.
    2. 전체 스크립트가 분석될 때까지 기다려야 합니다.
    3. 호이스팅의 영향을 받습니다.
- 화살표 함수의 특징에 대해 정리해주세요! 🍠
    
    화살표 함수 표현식은 함수 표현식의 간결한 대안입니다. 의미적 차이와 의도적인 사용상의 제한을 가지고 있습니다.
    
    화살표 함수의 특징
    
    1. 자체 바인딩이 존재하지 않습니다.
    2. `인수`, `super` 를 사용합니다.
    3. `method` 로 사용하면 안됩니다.
    4. 생성자로 사용하면 안되고, [`new.target`](http://new.target) 키워드에 대한 액서스 또한 없습니다.
    5. 함수 내부에서 [`yield`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield)를 사용할 수 없으며 제너레이터 함수로 생성할 수 없습니다.


- any 🍠
    
    JS에서의 모든 값을 오류 없이 받을 수 있는 타입으로,                                                                        TS를 더이상 사용하지 않고 빠져나오기 위해서 사용하는 타입이므로 신중하게 사용하는 것이 좋습니다.
    
    이 타입은 개발 단계에서 임시로 값을 지정해야 할 때, 어떤 값을 받거나 넘길 지 정할 수 없을 때, 값을 예측할 수 없을 때 사용합니다.
    
- unknown 🍠
    
    무엇이 할당될 지 모를 때 사용하는 타입입니다.                                                                                 any 타입과 유사하게 모든 타입에 대해 할당 받을 수 있으나, any를 제외한 다른 타입으로 선언된 변수에는 unknown 타입을 할당할 수 없습니다.
    
- void 🍠
    
    아무것도 return 하지 않는 빈 함수 타입입니다.
    
    명시하는 것이 필수가 아니며, TS에서는 함수라면 기본적으로 타입이 void 라고 인지합니다.
    
- never 🍠
    
    nevet 타입은 타입 계의 바닥 타입으로서, 어떠한 타입도 never 에 바인딩 될 수 없습니다.
    
    즉, 어떤 값도 메모리에 할당될 수 없기 때문에, 발생 자체를 하지 않는 것으로 볼 수 있습니다.
    
