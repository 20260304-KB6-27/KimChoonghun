package lecture.queue;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

public class Application2 {
    public static void main(String[] args) {
        /*
            Deque (덱)
            - Queue를 확장한 인터페이스로 양쪽 끝에서 모두 삽입/삭제 가능

            주요 메서드
            - offerFirst() / offerLast() : 요소 추가 (실패했을때 false 반환) (add()는 예외 발생)
            - peekFirst() / peekLast() : 가장 앞 요소 반환
            - pollFirst() / pollLast() :
         */
        Deque<String> deque = new ArrayDeque<>();

        deque.offerLast("middle");
        deque.offerFirst("front");
        deque.offerLast("end");

        System.out.println("deque = " + deque);

        System.out.println("deque.peekFirst() = " + deque.peekFirst());
        System.out.println("deque.peekLast() = " + deque.peekLast());

        System.out.println("deque.pollFirst() = " + deque.pollFirst()); // First
        System.out.println("deque = " + deque);                         // middle end
        System.out.println("deque.pollLast() = " + deque.pollLast());   // end
        System.out.println("deque = " + deque);                         // middle
    }
}
