package advanced;

public class InputTest {
    public static void main(String[] args) {
        Input input = new Input();

        String name = input.read("이름");
        System.out.println("입력값: "+name);
        name = input.read("이름", "홍길동");
        System.out.println("입력값: "+name);
        int age = input.readInt("나이");
        System.out.println("입력값: "+age);
        while (true) {
            boolean exit = input.confirm("종료할까요?");
            System.out.println("입력값: "+exit);
            if (exit) break;
        }
    }
}
