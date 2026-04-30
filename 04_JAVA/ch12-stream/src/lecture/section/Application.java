package lecture.section;

import java.util.List;

public class Application {
    public static void main(String[] args) {
        // 주입
        UserService service = new UserService();

        // 전체 조회
//        List<User> users = service.getUsers();
//        users.forEach(u -> System.out.println(u.toString()));

        List<String> users = service.getUsers();
        users.forEach(u -> System.out.println(u));

        // 단일 조회
        User user = service.getUserById(1L);
        System.out.println(user);

        User user2 = null;
        try {
            user2 = service.getUserById(99L);
        } catch (Exception e) {
            System.out.println("[예외] : " + e.getMessage());
        }
        System.out.println(user2);

        /*
            이메일
         */
        String email = service.getEmail(1L);
        System.out.println(email);
    }
}
