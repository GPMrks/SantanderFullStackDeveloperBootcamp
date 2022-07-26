package SingletonCreational;

/**
 * Singleton Lazy Holder
 *
 * @see <a href="https://stackoverflow.com/a/24018148">Referência</a>
 *
 * @author gpmrks
 *
 */

public class SingletonLazyHolder {

    private static class InstanceHolder {
        public static SingletonLazyHolder instance = new SingletonLazyHolder();
    }

    private SingletonLazyHolder() {
        super();
    }

    public static SingletonLazyHolder getInstance(){
        return InstanceHolder.instance;
    }

}
