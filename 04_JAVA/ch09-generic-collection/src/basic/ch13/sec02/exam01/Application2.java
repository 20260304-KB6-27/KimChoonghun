package basic.ch13.sec02.exam01;

public class Application2 {
    public static void main(String[] args) {
        CarAgency car = new CarAgency();
        TVAgency tv = new TVAgency();

        createdObject(car);
        createdObject(tv);
    }

    public static void createdObject (Rentable rentable) {
        rentable.rent();
    }
}
