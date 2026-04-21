package basic.ch09.sec06.exam01;

public class ButtonExample {
    public static void main(String[] args) {
        // Ok 버튼 클릭 이벤트를 처리할 ClickListener 구현 클래스(로컬 클래스)
        Button button = new Button();
        Button button1 = new Button();

        class OkListener implements Button.ClickListener {
            @Override
            public void onClick() {
                System.out.println("Ok 버튼을 클릭했습니다.");
            }
        }

        class CancelListener implements Button.ClickListener {
            @Override
            public void onClick() {
                System.out.println("Cancel 버튼을 클릭했습니다.");
            }
        }

        // 버튼 객체에 ClickListener 구현 객체 주입
        button.setClickListener(new OkListener());
        button1.setClickListener(new CancelListener());

        // 버튼 클릭하기
        button.click();
        button1.click();
    }
}
