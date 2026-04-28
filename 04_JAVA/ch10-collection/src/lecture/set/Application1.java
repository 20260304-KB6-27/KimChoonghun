package lecture.set;

import java.util.HashSet;
import java.util.Set;

public class Application1 {
    public static void main(String[] args) {
        /*
            HashSet
            - Set 인터페이스 대표 구현체
            - 해시기반으로 동작 -> 검색속도가 빠르다
            - 순서가 없음
            - 중복 X
         */

        Set<String> hset = new HashSet<>();

        hset.add("java");
        hset.add("mysql");
        hset.add("jdbc");
        hset.add("vue");
        hset.add("js");

        // 순서 유지 안돰
        System.out.println("hset = " + hset);

        boolean added = hset.add("js");
        System.out.println("added = " + added);
        System.out.println("hset = " + hset);

        for (String str: hset)System.out.println("str = " + str);
    }
}
