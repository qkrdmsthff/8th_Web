- XSS 공격 / CSRF 공격 🍠
    
    <aside>
    🍠
    
    XSS 공격과 CSRF 공격에 대해 직접 정리해보세요!
    
    </aside>
    
    - XSS 공격
        
        웹 해킹 공격 기법 중 하나입니다.
        
        Cross Site Scripting 의 약자이나 이미 CSS 가 Cascading Style Sheets 의 약어로 사용되고 있기 때문에 XSS 라고 칭합니다.
        
        XSS 는 게시판이나 웹 메일 등에 자바 스크립트와 같은 스크립트 코드를 삽입하여 개발자가 고려하지 않은 기능을 작동할 수 있게 하는 공격입니다. 사용자 브라우저에 전달되는 데이터에 악성 스크립트를 포함시켜 브라우저가 실행되면서 해킹됩니다. 대부분의 웹 해킹과는 달리 사용자를 겨냥한 공격이며, 이는 크게 Reflected XSS, Stored XSS, DOM Based XSS 세 가지로 분류됩니다. 
        
        SQL Injection 과 함께 웹 취약점 중 가장 기초적인 취약점으로 알려져 있으며, 공격 패턴이 다양하고 변화도 다양하게 이루어지기 때문에 파급력이 큽니다.
        
        1. Reflected XSS
            
            스크립트가 포함된 공격성 악성 URL 을 제작하고, 사용자가 해당 URL 을 클릭하였을 때 정보를 얻어내는 공격입니다. URL 이 길면 클라이언트가 의심할 수 있기 때문에, URL 단축을 사용하여 짧은 URL 로 만들어 공격하기도 합니다.
            
            Reflected XSS 는 사용자가 특정 파라미터에 입력한 값을 서버가 응답으로 반사해서 보내줄 때 발생하며, 서버에 악성 스크립트를 저장하지 않기 때문에 서버의 필터링을 피할 수 있습니다.      ( = 서버 자체가 오염되지는 않습니다.)
            
            특징 
            
            - URL 을 만들고 클릭하여 실행되게 하는 방식으로 **특정인을 대상**으로 공격
            - **URL 파라미터 데이터가 그대로 서버 응답에 삽입**되어 오는 곳에서 발생                          (요청과 응답 페이지가 동일하여야 합니다.)
            - 데이터 전달 방식은 **GET 방식**을 사용 (POST 방식은 공격에 활용할 여지 X)
                
                **GET 방식** : 웹에서 데이터를 전송할 때 URL 에 데이터를 붙여서 보내는 방식입니다. 데이터가 URL 에 노출되기 때문에 보안이 취약하고 URL 길이 제한에 의해 많은 양의 데이터를 전송하기에는 적합하지 않습니다.
                
                **POST 방식** : 웹에서 데이터를 서버로 전송할 때 사용되는 방식으로, 데이터를 HTTP 메세지의 본문인 body 에 담아 전송합니다. GET 방식과 달리 URL 에 데이터가 노출되지 않으며 주로 사용자 입력 데이터나 서버 상태 변경과 같은 요청에 사용됩니다.
                
            
        2. Stored XSS
            
            취약한 웹 서버에 악성 스크립트를 심어 놓고, 사용자가 접근할 때 해당 스크립트가 실행되는 공격입니다. 보통 서버에서 필터링을 하기 때문에 공격을 우회하는 것에 어려움이 있지만, 한 번 성공할 시 관리자가 알아차리기 힘들고 광범위한 피해를 입힐 수 있습니다.
            
            특징 
            
            - 데이터가 **저장되고 출력**되는 곳에서 발생 (저장 페이지와 출력 페이지가 달라도 상관 X)
            - **접근하는 모든 사람에게 공격이 가능**하기 때문에 광역기 수준의 위험성을 가짐
            
        3. DOM Based XSS
            
            Reflected XSS 와 Stored XSS 가 서버의 취약점을 이용하여 악성 스크립트가 포함된 페이지를 전달하는 것이라면, 
            
            DOM Based XSS 는 서버와 관련 없이 클라이언트 단에서 파라미터를 처리할 때 발생합니다. 사용자가 공격자가 조작한 URL 을 클릭한 순간 악성 스크립트가 실행되며 사용자 브라우저를 공격합니다.
            
        
        XSS 의 위험성
        
        1. 쿠키 정보 및 세션 ID 획득
            
            쿠키는 웹 서버가 브라우저에 보내는 4KB 이하의 작은 텍스트 파일로, 사용자가 웹사이트를 이용하는 동안 사용자 브라우저 파일에 저장하는 파일입니다. 주로 사용자의 상태를 기록하기 위해 쿠키에 로그인 및 버튼 클릭에 대한 정보를 담습니다. 
            
            만약 세션 ID 등을 쿠키에 포함하는 경우, XSS 공격을 통해 페이지 사용자의 세션 ID 를 획득하여 공격자가 불법적으로 정상 사용자인 척 가장할 수 있습니다.
            
        2. 시스템 관리자 권한 획득
            
            공격자가 아직 패치되지 않은 취약점에 대해 공격 코드가 실행되도록 하여 사용자의 시스템을 통제할 수 있습니다. 만약 회사와 같은 조직의 개인 PC 가 해킹될 경우 조직 내부로 악성 코드가 이동하여 내부 주요 정보를 탈취할 수 있습니다.
            
        3. 악성코드 다운로드
            
            XSS 공격은 악성 스크립트 자체로 악성 프로그램을 다운할 수는 없습니다. 하지만 사용자가 악성 스크립트가 있는 URL 을 클릭하도록 유도하여 악성 프로그램을 다운 받는 사이트로 리다이렉트 (Redirect) 하거나 트로이 목마 프로그램*을 다운로드 하도록 유도할 수 있습니다.
            
            트로이 목마 프로그램 : 정상 프로그램으로 위장하여 램에 상주하며 시스템 내부 정보를 공격자의 컴퓨터로 빼돌리는 프로그램
            
        4. 거짓 페이지 노출
            
            원래의 페이지에서 사용하지 않던 태그를 사용하여 전혀 관계 없는 페이지를 표시할 수 있습니다. 기타 다른 태그도 사용할 경우 원래 페이지를 일부 변조하여 거짓 페이지를 노출할 수 있어 이를 통한 개인 정보 유출의 위험성이 있습니다.
            
        
        XSS 방지법
        
        XSS 공격은 IPS, IDS, 방화벽 등으로도 방지할 수 없습니다. 때문에 단순히 문자를 필터링하는 방식으로 방지해야 합니다.
        
        1. 입력 데이터의 이스케이프 (Escape Input Data)
            
            XSS 공격은 입력 파라미터를 제대로 검증하지 않아 발생하는 취약점입니다. 
            
            HTML escaping : 사용자 입력을 HTML 요소에 반영하기 전 특수 문자를 이스케이핑 하여 스크립트 실행을 방지합니다. 입력된 HTML 태그나 스크립트를 그대로 렌더링하는 것을 방지합니다.
            
            ```jsx
            //XSS 에 취약함
            element.innerHTML = userInput;
            
            //XSS 에 안전함
            element.textContent = userInput;
            ```
            
        2. 출력 데이터의 이스케이프 (Escape Output Data)
            
            똑같이 HTML escaping 방식을 사용하며, 서버에서 클라이언트로 전송되는 데이터를 출력할 때에도 HTML 특수 문자를 이스케이핑 하여 XSS 공격을 방지합니다. 대부분의 웹 프레임 워크에서는 이스케이핑을 자동으로 수행합니다.
            
        
        그밖에도 콘텐츠 보안 정책 (CSP), 입력 데이터의 검증, 세션 쿠키 보호 방식을 통해 XSS 공격을 방지할 수 있습니다.
        
    - CSRF 공격
        
        CSRF 란, Cross Site Request Forgery 의 약자로, 사이트 간의 요청 위조를 의미합니다.
        
        웹 보안 취약점의 일종이며, 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위 (데이터 수정, 삭제, 등록 등) 를 특정 웹사이트에 요청하게 하는 공격입니다. 예를 들어, 피해자의 전자 메일 주소를 변경하거나 암호를 변경하거나 자금 이체를 수행하도록 할 수 있습니다.
        
        특성에 따라, 공격자는 사용자의 계정에 대해 완전한 제어권을 얻을 수 있습니다.
        
        CSRF 가 성공하기 위해서 세 가지 요건을 충족하여야 합니다.
        
        1. 사용자가 보안이 취약한 서버로부터 이미 로그인이 된 상태여야 합니다.
        2. 쿠키 기반의 서버 세션 정보를 획득할 수 있어야 합니다.
        3. 공격자는 서버를 공격하기 위한 요청 방법에 대해 미리 파악하고 있어야 합니다.
        
        다음의 세 가지 요건이 충족되면 아래와 같은 과정을 통해 공격을 실행합니다.
        
        1. 사용자는 보안이 취약이 취약한 서버에 로그인 합니다.
        2. 서버에 저장된 세션 정보를 사용할 수 있는 세션 ID 가 사용자 브라우저 쿠키에 저장됩니다.
        3. 공격자는 사용자가 악성 스크립트 페이지를 누르도록 유도합니다.
        4. 사용자가 악성 스크립트가 작성된 페이지에 접근할 시 웹 브라우저에 의해 쿠키에 저장된 세션 ID 와 함께 서버로 요청됩니다.
        5. 서버는 쿠키에 담긴 세션 ID 를 통해 해당 요청이 인증된 사용자에 의해 온 것으로 판단하고 처리합니다.
        
        CSRF 방지법 
        
        - 사용자 입장 : 이상한 URL 을 누르지 않도록 해야 하며, 의심이 되는 메일을 열어보지 않아야 합니다.
        - 웹 개발자 / 운영자 입장 :
            1. Referer Check (리퍼러 체크)
                
                HTTP 요청 헤더 정보에서 Referer 정보를 확인할 수 있습니다. 보통이라면 호스트와 Referer 의 정보값이 일치하므로 둘을 비교합니다. CSRF 공격의 대부분은 리퍼러 검증만으로도 많은 방어를 할 수 있습니다. 
                
            2. CAPTCHA 도입
                
                요청 시에 CAPTCHA 를 이용하여, CAPTCHA 인증 코드가 틀리거나 없을 경우 요청을 거부할 수 있습니다.
                
            3. CSRF 토큰 사용
                
                사용자 세션에 임의의 값을 저장하여 모든 요청마다 해당 값을 포함하여 전송하도록 합니다. 서버에 요청 받을 때마다, 세션에 저장된 값과 요청으로 전송된 값이 일치하는지 검증하여 방어하는 방식입니다.


- Protected Route를 직접 구현해보세요 🍠
    
    ### 실습 🍠
    
    서버가 없으니, 아래와 같이 가상의 역할을 만들어 직접 구현해보세요!
    
    ```tsx
    //App.tsx
    
    import HomePage from './HomePage';
    import AdminPage from './AdminPage';
    import ProtectedRoute from './ProtectedRoute';
    import { createBrowserRouter, RouterProvider } from 'react-router-dom';
    
    const userRole = 'ADMIN';
    
    const router = createBrowserRouter([
        {
            path : "/",
            element : <HomePage />
        }, 
    
        {
            path : "/admin",
            element : (
                <ProtectedRoute userRole = {userRole} requiredRole = {"ADMIN"}>
                    <AdminPage />
                </ProtectedRoute>
            )
        }
    ])
    
    function App() {
        return (
            <RouterProvider router={router} />
        )
    }
    
    export default App;
    
    ```
    
    ```jsx
    //HomePage.jsx
    
    function HomePage() {
        return (
            <div>
                <h1> 치치의 홈 페이지</h1>
                <p> 어서오세용~.~ </p>
            </div>
            );
        }
        
    export default HomePage;
    ```
    
    ```jsx
    //AdminPage.jsx
    
    function AdminPage() {
        return (
            <div>
                <h1> 관리자 전용 페이지 </h1>
                <p> 이 페이지는 ADMIN만 볼 수 있습니다 </p>
            </div>
            );
        }
        
    export default AdminPage;
    ```
    
    ```jsx
    //ProtectedRoute.jsx
    //이 부분은 구현하는 게 어려웠어서 구글링과 GPT의 도움을 받았습니다
    
    import { Navigate } from 'react-router-dom';
    
    function ProtectedRoute({ userRole, requiredRole, children }) {
        if (userRole !== requiredRole) {
            return <Navigate to="/" replace />;
        }
    
        return children;
    }
    
    export default ProtectedRoute;
    ```