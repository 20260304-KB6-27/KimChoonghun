package basic.ch13.sec02.exam01;

public class CarAgency implements Rentable<Car> {

    @Override
    public Car rent() {
        System.out.println("자동차 객체 생성");
        return new Car();
    }

    @Override
    public void set(Car item) {

    }

    @Override
    public Car get() {
        return null;
    }
}
