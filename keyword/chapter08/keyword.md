- **`Debounce`** 구글링 후 개념 정리 및 코드 작성해보기 🍠
    - **`Debounce`** 개념 정리 🍠
        - Debounce 는 연속적으로 발생한 이벤트를 하나로 처리하는 방식입니다.
        - 주로 처음이나 마지막으로 실행된 함수만을 실행합니다.
        - 성능 상의 문제를 해결하기 위해 도입되었습니다.                                                                        (하지만 모든 함수를 실행하면 성능적으로 문제가 생길 수 있습니다.)
        
        디바운스가 이런 성능을 가지는 이유는, 사용자의 마지막 행동에만 관심을 두기 때문입니다. 구글이나 유튜브 등의 많은 오픈 api 에는 하루 검색 할당량이 존재하기 때문에 순식간에 소진될 수 있고, 개인 서버를 사용하고 있는 경우에도 수많은 api 호출로 인해 서버가 터질 수 있습니다. 따라서 사용자의 검색어 입력이 몇 초 이상 없을 때만 api 를 호출하게 만드는 것입니다. 적당한 시간을 걸어 사용자가 원할 때 한 번만 api 를 호출하게 하도록 하는 것입니다.
        
    - **`Debounce`** 코드 작성 🍠
        
        ```tsx
        //debounce 함수 : 마지막 입력 후 일정 시간 후 실행
        function debouncePractice(func : (...args : any[]) => void, delay : number) {
        	let timeoutId : number; //타이머 ID 를 저장할 변수
        	
        	//반환되는 함수가 실제 이벤트와 연결
        	return function(...args : any[]) {
        		clearTimeout(timeoutId); //이전에 실행된 타이머 제거 (계속 입력 중이면 실행 X)
        		
        		//새로운 타이머 설정 : 딜레이 후 함수 실행
        		timeoutId = window.setTimeout(() => {
        			func(...args); //delay 동안 입력이 없었을 시에만 실행
        		}, delay);
        	};
        }
        
        //입력 처리 함수
        const handleSearch = debounce((event : Event) => {
        	//이벤트의 타켓을 HTMLInputElement 로 변환 (입력임을 명시해 줍니다.)
        	const input = event.target as HTMLInputElement;
        	
        	console.log("검색어 : ", input.value); //사용자가 멈춘 후의 입력값 출력
        }, 500); //0.5초 동안 입력이 없다면 실행
        
        //HTML 의 input 요소에 이벤트 리스너 연결
        document.getElementById("searchInput")?.addEventListener("input", handleSearch);
        
        //검색창
        <input 
        type="text"
        id="search"
        placeholder="검색어를 입력하세요.">
        ```
        
- **`Throttling`** 구글링 후 개념 정리 및 코드 작성해보기 🍠
    - **`Throttling`** 개념 정리 🍠
        - 출력을 조절한다는 의미로 일정 주기마다 발생하도록 하는 기술입니다.
        - 100ms 를 준다면 이벤트는 100ms 동안 최대 한 번만 발생합니다.
        - 즉, 마지막 함수가 실행된 후 일정 시간이 지나가기 전에 다시 호출되지 않도록 합니다.                  (일정 시간 동안 딱 한 번만 이벤트를 발생시킵니다.)
        - 연이어 발생한 이벤트에 대해 일정한 delay 를 포함시켜, 연속적으로 발생한 이벤트는 무시하는 방식을 뜻합니다. 즉 delay 시간 동안 호출된 함수는 무시합니다.
        
        Trailing Throttle
        
        - 한 구간 내 발생한 이벤트 중, 마지막으로 발생한 이벤트만 리스닝 하고, 나머지는 무시합니다. 그렇기에 한 구간 내에서 발생한 이벤트가 무엇인지 알기 위해선 구간이 끝날 때까지 기다려야 합니다. 그래서 trailing 은 이벤트 발생과 실제로 실행되는 함수가 리스닝 되기까지의 딜레이가 존재합니다.
        
    - **`Throttling`** 코드 작성 🍠
        
        ```tsx
        //쓰로틀 함수 : 지정한 시간마다 한 번만 실행되도록 제한
        function throttle(func : (...args : any[]) => void, delay : number) {
        	let lastTime = 0; //마지막 실행 시간을 저장할 변수
        	
        	//실제 이벤트와 연결되는 함수 반환
        	return function(...args : any[]) {
        		const now = Date.now(); //현재 시간을 기록하는 변수
        		
        		//마지막 실행 후 일정 시간을 지났는지 확인
        		if(now - lastTime >= delay) {
        			lastTime = now; //마지막 실행 시간을 갱신
        			
        			func(...args); //지정한 시간이 지나면 함수 실행
        		}
        	}
        }
        
        //실제 스크롤 처리 함수
        const handleScroll = throttle(() => {
        	console.log("현재 스크롤 위치 : ", window.scrollY); //현재 스크롤 위치 출력
        }, 500); //0.5초마다 한 번씩 실행
        
        //window 객체에 스크롤 이벤트 리스너 연결
        window.addEventListener("Scroll", handleScroll);
        ```