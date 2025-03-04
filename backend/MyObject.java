import java.util.Scanner;

// 자바에서는 객체를 리터럴({})로 정의를 하지 못함
// 클래스를 만들어 생성자를 호출해 객체를 만든다
class Pet {
    private String name;
    private String species;
    private int age;

    // 생성자
    public Pet(String name, String species, int age){
        this.name = name;
        this.species = species;
        this.age = age;
    }

    // getter
    public int getAge(){
        return age;
    }

    public String getName(){
        return name;
    }

    public String getSpecies(){
        return species;
    }

    // introduce 매서드
    public void introduce(){
        System.out.println("이 " + species + "의 이름은 " + name + "이고 " + "나이는 " + age + "살 이에요!");
    }
}
public class MyObject {

    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("이름을 입력하세요: ");
        String name = scanner.nextLine();

        System.out.println("종을 입력하세요: ");
        String species = scanner.nextLine();

        System.out.println("나이를 입력하세요: ");
        int age = Integer.parseInt(scanner.nextLine());

        Pet myPet = new Pet(name,species,age);

        myPet.introduce();
        System.out.println(myPet.getAge());

    }
}
