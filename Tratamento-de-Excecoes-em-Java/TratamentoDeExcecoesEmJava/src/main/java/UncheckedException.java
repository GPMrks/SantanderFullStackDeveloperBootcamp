import javax.swing.*;

public class UncheckedException {

    public static void main(String[] args) {

        boolean continueLooping = true;

        do {
            String a = JOptionPane.showInputDialog("Numerador: ");
            String b = JOptionPane.showInputDialog("Denominador: ");
            try {
                double resultado = dividir(Double.parseDouble(a), Double.parseDouble(b));
                System.out.println("Resultado: " + resultado);
                JOptionPane.showMessageDialog(null, "Resultado: " + resultado);
                continueLooping = false;
            } catch (NumberFormatException e) {
                JOptionPane.showMessageDialog(null, "Entrada inválida! Informe um número inteiro! " + e.getMessage());
                e.printStackTrace();
            } catch (ArithmeticException e) {
                JOptionPane.showMessageDialog(null, "Impossível dividir um número por zero! ");
                e.printStackTrace();
            } finally {
                System.out.println("Chegou no finally.");
            }
        } while (continueLooping);

    }

    public static double dividir(double a, double b) {
        return a / b;
    }

}
