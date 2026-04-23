package ch12.sec03.exam02;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Student {
    // DTO => 데이터 전달용 객체
    // Getter, Setter, NoArgsConstructor, AllArgsConstructor, ToString
    // @Getter
    // @Setter
    // @NoArgsConstructor
    // @AllArgsConstructor
    // @ToString
    private int no;
    private String name;

    @Override // Getter, Setter, ToString, EqualHashCode,
    public String toString() {
        return "Student {"+"\n\tno: "+no+"," +
                "\n\tname: "+name+"\n"+"}";
    }

    @Override
    public int hashCode() {
        return no + name.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Student target) {
            return no == target.getNo() && name.equals(target.getName());
        }
        return false;
    }
}
