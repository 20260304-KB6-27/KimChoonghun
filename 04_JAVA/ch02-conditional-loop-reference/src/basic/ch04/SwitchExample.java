package basic.ch04;

public class SwitchExample {
    public static void main(String[] args) {

        // Switch 문
        // 특정 case별로 코드를 분기하고 싶을때 사용

        char grade = 'A';
        // char ''
        // String ""

//        switch (grade) {
//            case 'A':
//            case 'a':
//                System.out.println("A입니다!");
//                break; // switch는 break 꼭 넣어줘야 한다!
//            case 'B':
//            case 'b':
//                System.out.println("B입니다!");
//                break;
//            default:
//                System.out.println("기본값입니다.");
//        }

        // 개선된 switch 문
        // 화살표 문법
        // break
        // 값 반환
//        switch (grade) {
//            case 'A', 'a' -> System.out.println("A입니다!");
//            case 'B', 'b' -> System.out.println("B입니다!");
//            default -> System.out.println("기본값입니다.");
//        }
        String result = switch (grade) {
//            case 'A', 'a' -> "A입니다!";
            case 'A', 'a' -> {
                System.out.println("실행됨");
                yield "A입니다!"; // 반환값 지정
            }
            case 'B', 'b' -> "B입니다!";
            default -> "기본값입니다.";
        };
        System.out.println(result);
    }
}
