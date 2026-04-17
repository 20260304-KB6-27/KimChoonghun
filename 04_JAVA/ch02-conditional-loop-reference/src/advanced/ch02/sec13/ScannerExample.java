package advanced.ch02.sec13;

import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("x 값 입력: ");
        int x = Integer.parseInt(scanner.nextLine());
        System.out.print("y 값 입력: ");
        int y = Integer.parseInt(scanner.nextLine());
        System.out.println("x + y: " + (x+y));

        while (true) {
            System.out.print("입력 문자열: ");
            String str = scanner.nextLine();
            if (str.equals("q")) {
                System.out.println("종료\n");
                break;
            }
            System.out.println("출력 문자열: "+str+"\n");
        }
    }
}
