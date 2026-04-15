package basic.ch04;

public class ForExample {
    public static void main(String[] args) {
        // for(초기값; 조건식; 증감식;)
        for (int i = 1; i <= 9; i++) {
//            System.out.print(i);
//            if (i%2 != 0) continue; // 짝수가 아니면 건너뛴다
            if (i%2 == 0) continue; // 짝수면 건너뛴다
            System.out.println(i);
        }
    }
}
