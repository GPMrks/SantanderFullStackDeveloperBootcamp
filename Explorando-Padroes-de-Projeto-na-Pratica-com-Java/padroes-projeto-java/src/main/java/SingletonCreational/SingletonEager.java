package SingletonCreational;

/**
 * Singleton Eager
 * @author gpmrks
 *
 */
public class SingletonEager {

    private static SingletonEager instance = new SingletonEager();

    private SingletonEager() {
        super();
    }

    public static SingletonEager getInstance(){
        return instance;
    }

}
