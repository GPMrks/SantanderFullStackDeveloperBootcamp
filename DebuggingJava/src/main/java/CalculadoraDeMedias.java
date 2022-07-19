import javax.swing.*;
import java.util.InputMismatchException;
import java.util.Scanner;

public class CalculadoraDeMedias {

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);
        String[] alunos = {"Camila", "Lucas", "Bruna", "Pedro"};

        double media = calculaMedicDaTurma(alunos, scan);

        System.out.printf("Média da turma %.1f", media);
    }

    private static double calculaMedicDaTurma(String[] alunos, Scanner scan) {

        double soma = 0;

        try {
            for (String aluno : alunos) {
                System.out.printf("Noda do aluno %s: ", aluno);
                double nota = scan.nextDouble();
                soma += nota;
            }
        } catch (InputMismatchException e) {
            JOptionPane.showMessageDialog(null, "Enter a number!");
            e.printStackTrace();
        }
        return soma / alunos.length;
    }
}
