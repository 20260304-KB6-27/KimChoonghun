package basic.ch06.sec00.book;

public class Application {
    public static void main(String[] args) {
        Book myBook = new Book();
        myBook.title = "제목1";
        myBook.author = "작가1";
        myBook.coverType = "커버1";
        myBook.pageCount = 150;
        myBook.introduce();;

        Book myBook2 = new Book("작가2", "제목2", "커버2", 150);
        myBook2.introduce();
        System.out.println(myBook2); // 객체를 문자열로 바꾸기 위해 toString으로 자동 호출
    }
}
