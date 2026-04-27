package basic.ch13.lecture;

import lombok.ToString;

@ToString
public class APIResponse<T> {
    private boolean success;
    private T data;
    private String message;

    public APIResponse(boolean success, T data, String message) {
        this.success = success;
        this.data = data;
        this.message = message;
    }

    public static <T> APIResponse<T> ok(T data) {
        return new APIResponse<>(true, data, "요청 성공");
    }

    public static <T> APIResponse<T> fail(String message) {
        return new APIResponse<>(false, null, message);
    }
}
