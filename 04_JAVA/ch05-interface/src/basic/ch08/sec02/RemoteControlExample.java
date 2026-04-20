package basic.ch08.sec02;

public class RemoteControlExample {
    public static void main(String[] args) {
        // 인터페이스 RemoteControl rc
        RemoteControl rc;

        // rc에 Television 객체 대입
        rc = new Television();
        rc.turnOn();

        // rc에 Audio 객체 대입(교체)
        rc = new Audio();
        rc.turnOn();
    }
}
