// 배열에 입력한 숫자를 넣는 클래스
import java.util.Scanner;
public class MakeArray {
    // Java에서는 메서드를 다른 메서드 안에 선언할 수 없습니다.
    // Java에는 push 메서드가 없음...
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        System.out.println("인사말을 입력해주세요: ");
        int element = Integer.parseInt(scanner.nextLine());
        addArray(element);
    }
    public static void addArray(int element){
        int[] numbers;
    }
}
