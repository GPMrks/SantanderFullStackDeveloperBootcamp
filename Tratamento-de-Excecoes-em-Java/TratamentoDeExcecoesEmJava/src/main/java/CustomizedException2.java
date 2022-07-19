import javax.swing.*;

public class CustomizedException2 {

    public static void main(String[] args) {

        int[] numerador = {4, 5, 8, 10};
        int[] denominador = {2, 4, 0, 2, 8};

        for (int i = 0; i < denominador.length; i++) {
            try {
                if (numerador[i] % 2 != 0)
                    throw new DivisaoNaoExataException("Divisão não exata!", numerador[i], denominador[i]);

                if (denominador[i] == 0) throw new ArithmeticException("Não se pode dividir por 0");

                int resultado = numerador[i] / denominador[i];
                System.out.println(resultado);

            } catch (DivisaoNaoExataException e){
                e.printStackTrace();
                JOptionPane.showMessageDialog(null, e.getMessage());
            } catch (ArithmeticException e) {
                e.printStackTrace();
                JOptionPane.showMessageDialog(null,"Não se pode dividir por 0");
            }
        }

        System.out.printf("O programa continua...");
    }
}


