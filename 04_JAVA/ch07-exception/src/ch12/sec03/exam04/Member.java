package ch12.sec03.exam04;

public record Member(String id, String name, int age) {
    @Override
    public int age() {
        return age;
    }

    @Override
    public String name() {
        return name;
    }

    @Override
    public String id() {
        return id;
    }

    @Override
    public String toString() {
        return "Member[id="+id
                +", name="+name
                +", age="+age
                +"]";
    }

}
