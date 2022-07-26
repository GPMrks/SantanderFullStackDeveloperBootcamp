package SingletonCreational;

/**
 * Singleton Lazy
 * @author gpmrks
 *
 */

public class SingletonLazy {

    private static SingletonLazy instance;

    SingletonLazy() {
        super();
    }

    public static SingletonLazy getInstance(){
        if (instance == null) instance = new SingletonLazy();
        return instance;
    }
}


