package basic.ch07.sec03.exam02;

public class Application {
    public static void main(String[] args) {
        // 부모 생성자를 먼저 호출하고, 자식 생성자를 호출한다.
        SmartPhone smartPhone = new SmartPhone();
        SmartPhone smartPhone1 = new SmartPhone("갤럭시", "은색", "5G");

        // 부모의 메소드를 호출
        // 상속 받은 메서드
        smartPhone1.printModel(); // 오버라이딩한 함수가 호출됨.

        Phone phone2 = new SmartPhone();
        SmartPhone phone3 = (SmartPhone) phone2;
//        System.out.println("phone3. = " + phone3.network);
        System.out.println(phone3.toString());
    }
}
