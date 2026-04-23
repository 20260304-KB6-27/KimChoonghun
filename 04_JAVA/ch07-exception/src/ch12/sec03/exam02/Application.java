package ch12.sec03.exam02;

public class Application {
    public static void main(String[] args) {
        Student student = new Student();
        student.setNo(1);
        student.setName("김충훈");

        System.out.println(student.toString());
    }
}
