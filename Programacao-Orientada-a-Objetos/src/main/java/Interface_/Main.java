package Interface_;

public class Main {

    public static void main(String[] args) {

        Calculadora calc = new Calculadora();

        System.out.println(calc.soma(10, 5));
        System.out.println(calc.subtracao(10, 5));
        System.out.println(calc.multiplicacao(10, 5));
        System.out.println(calc.divisao(10, 5));

    }
}
