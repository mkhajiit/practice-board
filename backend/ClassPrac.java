// 자바에서의 임포트

import for_import.Number;

import java.util.Scanner;

public class ClassPrac {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        // 클래스 호출
        for_import.Number number = new Number();

        number.generateRandomNumber();

        System.out.println(number.getRandomNumber());

        System.out.println("본인의 나이를 입력해주세요: ");
        int age = Integer.parseInt(scanner.nextLine());

        System.out.println("본인의 이름을 입력해주세요: ");
        String name = scanner.nextLine();

        // 클래스 호출 생성자 실행
        Person person = new Person(name);

        // Person 클래스의 setter로 나이를 설정함;
        person.setAge(age);

        person.introduce();
    }
}
