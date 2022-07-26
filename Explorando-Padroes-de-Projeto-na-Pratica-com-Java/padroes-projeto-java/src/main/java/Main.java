import FacadeStructural.Facade;
import SingletonCreational.SingletonEager;
import SingletonCreational.SingletonLazy;
import SingletonCreational.SingletonLazyHolder;
import StrategyBehavior.*;

public class Main {

    public static void main(String[] args) {

        //Tests related to Singleton Design Pattern

        SingletonLazy lazy = SingletonLazy.getInstance();
        System.out.println(lazy);
        lazy = SingletonLazy.getInstance();
        System.out.println(lazy);

        SingletonEager eager = SingletonEager.getInstance();
        System.out.println(eager);
        eager = SingletonEager.getInstance();
        System.out.println(eager);

        SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstance();
        System.out.println(lazyHolder);
        lazyHolder = SingletonLazyHolder.getInstance();
        System.out.println(lazyHolder);

        System.out.println();

        //__________________________________________________________________

        //Tests related to Strategy Design Pattern

        RobotBehavior normal = new NormalMode();
        RobotBehavior attack = new AttackMode();
        RobotBehavior defensive = new DefensiveMode();

        Robot robot = new Robot();

        robot.setRobotBehavior(normal);
        robot.move();
        robot.move();

        robot.setRobotBehavior(defensive);
        robot.move();

        robot.setRobotBehavior(attack);
        robot.move();
        robot.move();
        robot.move();

        System.out.println();

        //Tests related to Facade Design Pattern

        Facade facade = new Facade();
        facade.migrateClient("Guilherme", "31330290");

    }
}
