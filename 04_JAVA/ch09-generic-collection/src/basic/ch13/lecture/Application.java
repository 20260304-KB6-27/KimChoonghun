package basic.ch13.lecture;

public class Application {
    public static void main(String[] args) {

        // 요청이 들어온 상태

        // 서비스 로직
        User user = new User("kim", 20);
        System.out.println(user);

        // Controller
        APIResponse<User> response = APIResponse.ok(user);
        APIResponse<String> response2 = APIResponse.ok("요청 처리 성공~~!");

        System.out.println(response);
        System.out.println(response2);

    }

//    @GetMapping("/user/1")
//    public APIResponse<User> getUser() {
//        User user = new User("kim", 20);
//        return APIResponse.ok(user);
//    }
}
