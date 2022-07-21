package Heranca.Exercicio3;

public class Main {

    public static void main(String[] args) {

        //Ocorre o polimorfismo - classe mãe criada como classe filha.
        ClasseMae[] classes = new ClasseMae[]{new ClasseFilha1(), new ClasseFilha2(), new ClasseMae()};

        for (ClasseMae classe : classes) {
            classe.metodo1();
        }

        System.out.println("");

        for (ClasseMae classe : classes) {
            classe.metodo2();
        }

        System.out.println("");

        //Não há polimorfismo mas sim Override puro.
        ClasseFilha2 classeFilha2 = new ClasseFilha2();
        classeFilha2.metodo2();

    }
}
