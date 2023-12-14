import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        String fileName = "input.txt";
        int sum = 0;

        try (BufferedReader br = new BufferedReader(new FileReader(fileName))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] numbers = line.split("");
                StringBuilder filteredNumbers = new StringBuilder();
                for (String num : numbers) {
                    if (num.toLowerCase().equals(num.toUpperCase())) {
                        filteredNumbers.append(num);
                    }
                }
                sum += Integer.parseInt(filteredNumbers.charAt(0) + "" + filteredNumbers.charAt(filteredNumbers.length() - 1));
            }
        } catch (IOException e) {
            System.err.print("Could not read file");
        }

        System.out.println(sum);
    }
}
