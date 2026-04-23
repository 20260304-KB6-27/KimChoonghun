package ch12.sec03.exam05;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class Member {
    private String id;
    @NonNull // 필수 항목 -> @RequiredArgsConstructor에 의해 생성자 추가됨
    private String name;
    private int age;
}
