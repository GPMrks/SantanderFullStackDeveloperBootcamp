package StrategyBehavior;

public class AttackMode implements RobotBehavior{
    @Override
    public void move() {
        System.out.println("Moving aggressively...");
    }
}
