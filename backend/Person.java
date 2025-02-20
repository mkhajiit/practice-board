public class Person {
    public String name;
    public int age;

    //생성자
    public Person(String name){
        this.name = name;
    }

    public void setAge(int age){
        this.age = age;
    }

    public void introduce(){
        System.out.println("안녕하세요, 저는 "+name+"입니다. " + age + "살 입니다.");
    }
}
