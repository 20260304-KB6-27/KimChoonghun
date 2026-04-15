package basic.ch04;

import java.util.Scanner;

public class WhileExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        boolean run = true;
        int speed = 0;
        while (run) {
            System.out.println("현재 속도 : "+speed);
            System.out.println("1. 증속 | 2. 감속 | 3. 중지");
            System.out.print("선택 : ");
            String strNum = scanner.nextLine(); // 키보드에서 입력한 내용을 읽음
            if (strNum.equals("1")) {
                speed += 1;
            } else if (strNum.equals("2")) {
                speed -= 1;
            } else {
                run = false;
            }
        }
    }
}
