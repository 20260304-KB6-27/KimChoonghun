package basic.ch13.sec02.exam01;

public abstract interface Rentable<T> {
    T rent();

    void set(T item);
    T get();
}
