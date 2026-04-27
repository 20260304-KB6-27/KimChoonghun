package basic.ch13.lecture;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data                // Getter, Setter, toString 등을 자동 생성
@NoArgsConstructor   // 기본 생성자 생성 (User user = new User()용)
@AllArgsConstructor  // 모든 필드 생성자 생성 (User user = new User("kim", 20)용)
public class User {
    private String name;
    private int age;
}