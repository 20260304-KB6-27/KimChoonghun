package advanced.ch02.sec13;

public class OperatorExample {
    public static void main(String[] args) {
        System.out.println((5.0+10.0)*7.0/2.0);

        int x = 10;
        int y = 5;

        System.out.println( (x>7) && (y<=5));
        System.out.println( (x%3 == 2) || (y%2 != 1));
    }
}
