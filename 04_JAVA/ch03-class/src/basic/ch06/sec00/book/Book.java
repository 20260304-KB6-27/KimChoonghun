package basic.ch06.sec00.book;

public class Book {
    String author;
    String title;
    String coverType;
    int pageCount;

    public Book() {
        System.out.println("기본 생성자 호출함...");
    }

    public Book(String author, String title, String coverType, int pageCount) {
        this.author = author;
        this.title = title;
        this.coverType = coverType;
        this.pageCount = pageCount;
    }

    public Book(String author, String title) {
        // this() : 생성자 최상단에 와야 한다.
        this(author, title, "soft cover", 12);
    }

    // 메서드
    // 접근제어자 반환타입 메서드명(매개변수) {
    //      return 반환값
    // }
    // void는 반환값 없음!
    public void introduce() {
        System.out.println(toString());
    }

    @Override // Object의 toString이라는 메서드를 오버라이딩
    public String toString() {
        return title + " 책의 작가는 " + author + "입니다.";
    }
}
