package ch11.sec02.exam01;

import java.util.Arrays;

public class ExceptionHandlingExample1 {
    public static void printLength(String data) {
        /*
            data로 null이 들어오면 null에 대해서
            length()라는 메서드를 호출하려고 하기 때문에
            NullPointerException 에러가 발생한다.
         */
        try {
            int result = data.length();
            System.out.println("문자 수: " + result);
        } catch (NullPointerException e) {
            System.out.println(e.getMessage());
//            System.out.println(e.toString());
            e.printStackTrace();
        } finally {
            System.out.println("[마무리 실행]\n");
        }
    }

    public static void main(String[] args) {
        System.out.println("[프로그램 시작]\n");
        printLength("ThisIsJava");
        printLength(null);
        System.out.println("[프로그램 종료]");
    }
}
