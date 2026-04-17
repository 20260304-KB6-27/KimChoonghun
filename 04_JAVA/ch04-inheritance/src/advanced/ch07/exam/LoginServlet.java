package advanced.ch07.exam;

public class LoginServlet extends HttpServlet {

    public LoginServlet() {
        service();
    }

    @Override
    public void service() {
        System.out.println("로그인 합니다.");
    }
}
