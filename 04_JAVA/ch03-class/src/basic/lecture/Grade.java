package basic.lecture;

public enum Grade {

    // 권한 인증 인가 설정시 USER / ADMIN
    A(95, "최우수"),
    B(85, "우수"),
    C(75, "보통");

    private final int score;
    private final String description;

    Grade(int score, String description) {
        this.score = score;
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
