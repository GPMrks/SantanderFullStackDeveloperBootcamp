package StrategyBehavior;

public class NormalMode implements RobotBehavior{
    @Override
    public void move() {
        System.out.println("Moving normally...");
    }
}
