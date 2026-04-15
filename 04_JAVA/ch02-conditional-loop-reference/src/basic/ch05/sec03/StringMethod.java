package basic.ch05.sec03;

public class StringMethod {
    public static void main(String[] args) {
        String subject = "자바 프로그래밍";

        // length() 문자열의 길이를 반환
        System.out.println(subject.length());

        // indexOf() 처음 등장하는 위치의 인덱스 반환
        int location = subject.indexOf("프로그래밍");
        System.out.println("location = " + location);

        // split
        // 문자열을 특정 구분자를 기준으로 잘라 문자열 배열로 반환
        String[] splitstr = subject.split(" ");

        System.out.println(splitstr[0]);
        System.out.println(splitstr[1]);

        /*
            subString
            원하는 범위만 잘라서 새로운 문자열을 반환
            
            인자가 1개일때
            - 해당 인덱스부터 끝까지 반환
            
            인자가 2개일때
            - 시작 인덱스부터 끝 인덱스의 전까지 문자열을 반환
         */
        // 자바 프로그래밍
        String subString = subject.substring(location);
        System.out.println(subString);

        /*
            replace(target, replacement)
            target 바꿀대상
            replacement 바꿀값
         */
        String replaceStr = subject.replace("래밍", "램");
        System.out.println(replaceStr);
    }
}
