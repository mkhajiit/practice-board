// 배열에 입력한 숫자를 넣는 클래스
import java.util.ArrayList;
import java.util.Scanner;
public class MakeArray {
    // Java에서는 메서드를 다른 메서드 안에 선언할 수 없습니다.
    // Java에는 push 메서드가 없음...
    // 따라서 ArrayList 를 사용해서 비슷하게 구현
    public static void main(String[] args){

        addArray();
    }
    public static void addArray(){
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer>numbers = new ArrayList<>();

           for(int i = 0; i < 5; i ++) {
               System.out.println("숫자를 입력하세요: ");
               int element = Integer.parseInt(scanner.nextLine());
               numbers.add(element);
           }
           System.out.println(numbers);
           numbers.forEach(num -> System.out.println(num));
    }
}
