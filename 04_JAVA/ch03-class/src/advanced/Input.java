package advanced;

import java.util.Scanner;

public class Input {
    static Scanner scanner = new Scanner(System.in);

    public String read(String title) {
        System.out.print(title+": ");
        String input = scanner.nextLine();
        return input;
    }

    public String read(String title, String defaultValue) {
        System.out.print(title+"("+defaultValue+"): ");
        String input = scanner.nextLine();
        if (input.isEmpty()) {
            return defaultValue;
        }
        return input;
    }

    public int readInt(String title) {
        System.out.print(title+": ");
        String input = scanner.nextLine();
        return Integer.parseInt(input);
    }

    public boolean confirm(String title, boolean defaultValue) {
        System.out.print(title + (defaultValue ? "(Y/n)" : "(y/N)") + ": ");
        String input = scanner.nextLine();
        if (input.equals("Y") || input.equals("y")) return true;
        else if (input.equals("N") || input.equals("n")) return false;
        else return defaultValue;
    }

    public boolean confirm(String title) {
        return confirm(title, true);
    }
}
