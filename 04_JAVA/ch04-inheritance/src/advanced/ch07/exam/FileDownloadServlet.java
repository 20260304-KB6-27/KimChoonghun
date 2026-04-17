package advanced.ch07.exam;

public class FileDownloadServlet extends HttpServlet {
    public FileDownloadServlet() {
        service();
    }
    @Override
    public void service() {
        System.out.println("파일 다운로드합니다.");
    }
}
