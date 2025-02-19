import java.util.Scanner;

public class MyFunctions {

    // 인자 없는 메서드
    public static void sayHello(){
        System.out.println("Hello World!");
    }

    // 인자 있는 메서드
    public static void greeting(String greet){
        System.out.println(greet);
    }

    // 반환값이 있는 메서드
    public static int plus(int x, int y){
        return x + y;
    }

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        sayHello();

        System.out.println("인사말을 입력해주세요: ");
        String greet = scanner.nextLine();
        greeting(greet);

        int result = plus(7, 6);
        System.out.println(result);
    }
}
