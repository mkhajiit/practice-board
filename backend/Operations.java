import java.util.Scanner;
// 자바를 이용한 간단한 사칙 연산 구현
public class Operations {
    public  static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("정수를 입력 해 주세요: ");
//       int x = scanner.nextInt();
//       scanner.nextLine();  // 버퍼에 남은 개행 문자 제거를 통해 엔터 때문에 다음 입력이 씹히지 않도록함
        int x = Integer.parseInt(scanner.nextLine());

        System.out.println("연산자를 입력 해 주세요(+, -, *, /): ");
        String operator = scanner.nextLine();

        System.out.println("정수를 입력 해 주세요: ");
//        int y = scanner.nextInt();
        int y = Integer.parseInt(scanner.nextLine());

        switch (operator){
            case "+":
                System.out.printf("답은 %d 입니다%n", x+y);
                break;
            case "-":
                System.out.printf("답은 %d 입니다%n", x-y);
                break;
            case "*":
                System.out.printf("답은 %d 입니다%n", x*y);
                break;
            case "/":
                if (y == 0) {
                    System.out.println("0으로 나눌 수 없 습니다.%n");
                } else {
                    System.out.printf("답은 %d 입니다.%n", x / y);
                }
                break;
            default:
                System.out.println("잘못된 입력 입니다");
        }
        scanner.close();
    }
}
