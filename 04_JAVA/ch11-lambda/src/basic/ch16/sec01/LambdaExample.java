package basic.ch16.sec01;

import lecture.lambda.section01.OuterCalculator;

public class LambdaExample {
    public static void main(String[] args) {
        // x + y 계산
        Calculable sum = new Calculable() {
            @Override
            public void calculate(int x, int y) {
                System.out.println("result: " + (x+y));
            }
        };
        action(sum);
        // x - y 계산
        Calculable minus = new Calculable() {
            @Override
            public void calculate(int x, int y) {
                System.out.println("result: " + (x-y));
            }
        };
        action(minus);
    }

    public static void action(Calculable calculable) {
        // 데이터
        int x = 10;
        int y = 4;
        // 데이터 처리
        calculable.calculate(x,y);
    }
}
