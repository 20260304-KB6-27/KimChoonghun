package basic.ch05.sec03;

public class StringExample {
    public static void main(String[] args) {

        // String 객체 타입
        String str1 = "hello";
        
        // 2. String 불변 객체
        // -> 기존 값이 변경되지 않고 새로운 객체가 생성됨
        String str2 = "hello"; // 이미 hello라는 문자열이 heap 내부 문자열 풀에 존재하므로 해당 문자열이 저장된 메모리를 그대로 가져다 쓴다.

        // System.identityHashCode : 코드상에서 주소값 보는 메서드 (실주소값은 아니다.)
        // 문자열.hashCode() 도 가능
        System.out.println(System.identityHashCode(str1));
        System.out.println(System.identityHashCode(str2));

        String str3 = new String("hello"); // 생성자를 사용하면 새로운 객체를 저장한다.
        System.out.println(System.identityHashCode(str3));
        // 문자열 풀에 있는 같은 주소를 비교
        System.out.println(str1 == str2);
        str1 = str1 + " world"; // 새로운 heap 영역에 문자열 생성!
        System.out.println(System.identityHashCode(str1));
        System.out.println(str2.equals(str3)); // 주소가 아닌 문자열 자체를 비교하기 위해선 equals 사용!
        /*
            2003749087
            2003749087
            1324119927
            true
            1747585824
        */

//        System.out.println(str1);
//        System.out.println(str2);
    }
}
