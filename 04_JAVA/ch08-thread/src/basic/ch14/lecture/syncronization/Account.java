package basic.ch14.lecture.syncronization;

import lombok.Getter;

@Getter
public class Account {
    private int balance = 1000; // 계좌 잔액

    // 출금 메서드 - 동기화되지 않은 버전
    public void withdraw(int money) {
        if(balance >= money) {
            try {
                Thread.sleep(1000); // 다른 스레드의 개입 가능성을 높이기 위한 지연
            } catch (InterruptedException e) {}
            balance -= money;
        }
    }
}