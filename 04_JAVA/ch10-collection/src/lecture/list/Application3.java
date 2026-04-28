package lecture.list;

import java.util.Collections;
import java.util.Enumeration;
import java.util.List;
import java.util.Vector;

public class Application3 {
    public static void main(String[] args) {
        Vector<String> vector = new Vector<>();

        vector.add("apple");
        vector.add("banana");
        vector.add("grapes");
        vector.add("mango");
        vector.add("melon");

        /*
            Enumeration (열거자)
            - Iterator 이전의 방식 (Vector, HashTable 등 레거시 클래스에서 사용)
         */

        Enumeration<String> enumeration = vector.elements();

        while (enumeration.hasMoreElements()) {
            System.out.println(enumeration.nextElement());
        }

        // 기존 ArrayList를 동기화 하고 싶을때
        List<String> syncList = Collections.synchronizedList(new java.util.ArrayList<>());
    }
}
