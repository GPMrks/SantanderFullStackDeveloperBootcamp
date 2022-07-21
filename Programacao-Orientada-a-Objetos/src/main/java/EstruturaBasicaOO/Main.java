package EstruturaBasicaOO;

public class Main {

    public static void main(String[] args) {

        Carro carro1 = new Carro();

        carro1.setModelo("BMW Série 3");
        carro1.setCor("Preto");
        carro1.setCapacidadeTanque(59);

        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCor());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println("São necessários R$" + carro1.calcularValorTanque(5.85) + " para encher o tanque.");

        Carro carro2 = new Carro("Cinza", "Mercedez-Benz Classe C", 66);

        System.out.println(carro2.getModelo());
        System.out.println(carro2.getCor());
        System.out.println(carro2.getCapacidadeTanque());
        System.out.println("São necessários R$" + carro2.calcularValorTanque(5.98) + " para encher o tanque.");

    }
}
