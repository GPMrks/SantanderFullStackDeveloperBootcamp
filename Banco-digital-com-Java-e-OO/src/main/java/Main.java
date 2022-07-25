public class Main {

    public static void main(String[] args) {

        Cliente guilherme = new Cliente();
        guilherme.setNome("Guilherme Marques");

        Conta cc = new ContaCorrente(guilherme);
        Conta poupanca = new ContaPoupanca(guilherme);

        cc.depositar(1000);
        cc.transferir(300, poupanca);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();

    }
}
