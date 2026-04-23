package ch12.sec06.date;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.Calendar;

public class Application {
    public static void main(String[] args) {
        //        Date date = new Date();
        //        date.setYear(2026);
        //        System.out.println("date = " + date.getYear());

        Calendar cal = Calendar.getInstance();

        cal.set(2026,4,23);
        System.out.println(cal.getTime());

        // java time 패키지를 사용하자!

        // LocalTime
        LocalTime timeNow = LocalTime.now();
        System.out.println("timeNow = " + timeNow);

        // LocalDate : 날짜를 표현해주는 클래스
        // 연도 월 일
        LocalDate dateNow = LocalDate.now();
        System.out.println("dateNow = " + dateNow);
        LocalDate dateNow2 = LocalDate.of(2025,4,23);
        System.out.println("dateNow2 = " + dateNow2);

        // ZoneDateTime
        // 날짜 ,시간, 시간대를 함께 표현하는 클래스
        ZonedDateTime zonedDateTime = ZonedDateTime.now();
        System.out.println("zonedDateTime = " + zonedDateTime);

        // LocalDateTime

    }
}
