package StrategyBehavior;

public class DefensiveMode implements RobotBehavior{
    @Override
    public void move() {
        System.out.println("Moving defensively...");
    }
}
