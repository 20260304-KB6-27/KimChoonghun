package basic.lecture;

public class Application {
    public static void main(String[] args) {
        Student student = new Student("bear", Grade.A);
        Student student2 = new Student("tiger", Grade.B);
        Student student3 = new Student("lion", Grade.C);
        System.out.println(student.grade.getDescription());
        System.out.println(student2.grade.getDescription());
        System.out.println(student3.grade.getDescription());
    }
}
