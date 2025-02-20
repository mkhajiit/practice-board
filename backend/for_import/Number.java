package for_import;

public class Number {
    // 0 부터 100 까지의 숫자를 랜덤으로 부르는 클래스
    private int randomNumber;

    public void generateRandomNumber(){
        this.randomNumber = (int)(Math.random() * 101);
    }

    //getter
    public int getRandomNumber(){
        return randomNumber;
    }
}
