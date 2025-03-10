import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class MyFirstHttpServer {
    public static void main(String[] args) throws IOException {
        //8080 포트 사용 대기열 크기를 0 으로 해서 시스템 기본값을 사용
        HttpServer server = HttpServer.create(new InetSocketAddress( 8080),0);
        server.createContext("/api/message",new MessageHandler());

        System.out.println("서버가 http://localhost:8080 에서 실행 중 입니다.");
    }
        //클래스가 실행되면 자동 실행되는 handle에 엔드포인트 요청시 자동생성되는 HttpExchange 객체를 전달함
    static class MessageHandler implements HttpHandler{
        public void handle(HttpExchange exchange) throws IOException{
            String response = "백앤드에서 보낸 메시지 입니다.";
            exchange.sendResponseHeaders(200, response.getBytes().length);
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        }
    }
}
