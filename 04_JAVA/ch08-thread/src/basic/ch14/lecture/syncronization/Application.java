package basic.ch14.lecture.syncronization;

public class Application {
    public static void main(String[] args) {
//        Account account = new Account();
        SafeAccount account = new SafeAccount(); // 동기화 적용

        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                account.withdraw(300);
            }
        });

        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                account.withdraw(300);
            }
        });

        t1.start();
        t2.start();

        System.out.println("안녕");

        // 메인스레드
//        account.withdraw(100);
//        account.withdraw(100);
//        account.withdraw(100);
    }
}
