import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.net.InetSocketAddress;

// InputStream: 데이터를 읽기 위한 클래스로 클라이언트가 서버로 보낸 데이터(요청 본문)나 서버에서 파일을 읽을 때 사용됨
// OutputStream: 데이터를 쓰기 위한 클래스로 서버가 클라이언트에게 응답을 보낼 때 사용 됨
public class MyFirstHttpServer {
    public static void main(String[] args) throws IOException {
        // 8080 포트 사용 대기열 크기를 0 으로 해서 시스템 기본값을 사용
        // Http 서버 생성
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        server.createContext("/api/message", new MessageHandler());
        // 요청을 처리할 스레드 풀(thread pool) 설정
        server.setExecutor(null);
        // 서버를 실행하여 클라이언트 요청을 받을 준비를 합니다.
        server.start();
        System.out.println("서버가 http://localhost:8080 에서 실행 중 입니다.");
    }

    // 클래스가 실행되면 자동 실행되는 handle에 엔드포인트 요청시 자동생성되는 HttpExchange 객체를 전달함
    static class MessageHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            // CORS 헤더 추가(추가 안하면 CORS 에러 발생함)
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
            exchange.getResponseHeaders().set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
            exchange.getResponseHeaders().set("Access-Control-Allow-Headers", "Content-Type");

            // HTTP 메서드 확인
            String method = exchange.getRequestMethod();

            if ("GET".equalsIgnoreCase(method)) {
                handleGetRequest(exchange);
            } else if ("POST".equalsIgnoreCase(method)) {
                handlePostRequest(exchange);
            } else {
                exchange.sendResponseHeaders(405, -1); // 405 Method Not Allowed
            }


        }
    }


    private static void handleGetRequest(HttpExchange exchange) throws IOException {
        String response = "백앤드에서 보낸 메시지 입니다. 안녕하세요 여기는 자바 입니다.";
        // response.getBytes()는 응답 메시지를 바이트 배열로 변환하는 코드
        exchange.sendResponseHeaders(200, response.getBytes().length);
        // OutputStream은 응답 데이터를 기록하는 객체
        // exchange.getResponseBody()는 서버가 클라이언트에게 응답을 보낼 수 있도록 OutputStream 객체를 제공
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }

    // POST 요청 처리
    private static void handlePostRequest(HttpExchange exchange) throws IOException {
        // 요청 본문 읽기
        // InputStreamReader() 로 바이트를 텍스트(UTF-8)로 변환 시킨다
        InputStreamReader isr = new InputStreamReader(exchange.getRequestBody(), "UTF-8");
        // InputStreamReader를 BufferedReader로 감싸면, 한줄 단위로 읽을 수 있어 성능이 향상되고 더 쉽게 처리할 수 있다
        // BufferedReader는 Reader의 성능을 향상시키기 위해 사용
        BufferedReader br = new BufferedReader(isr);
        // 요청 본문을 담을 StringBuilder 객체를 생성
        StringBuilder requestBody = new StringBuilder();
        String line;
        // 요청 본문이 여러 줄일 수 있기 때문에, 이를 계속 읽어서 하나의 문자열로 결합
        while ((line = br.readLine()) != null) {
            requestBody.append(line); // 읽은 한 줄을 requestBody에 추가
        }
        br.close(); // 리소스 해제

        System.out.println("POST 요청 데이터: " + requestBody);

        // 클라이언트에 응답 보내기
        String response = "서버가 받은 데이터: " + requestBody;
        exchange.sendResponseHeaders(200, response.getBytes().length);
        OutputStream os = exchange.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}