// 자바에서의 임포트

import for_import.Number;

import java.util.Scanner;

public class ClassPrac {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);

        for_import.Number number = new Number();

        number.generateRandomNumber();

        System.out.println(number.getRandomNumber());

        System.out.println("본인의 나이를 입력해주세요: ");
        int age = Integer.parseInt(scanner.nextLine());

        System.out.println("본인의 이름을 입력해주세요: ");
        String name = scanner.nextLine();

        Person person = new Person(name);

        person.setAge(age);

        person.introduce();
    }
}
