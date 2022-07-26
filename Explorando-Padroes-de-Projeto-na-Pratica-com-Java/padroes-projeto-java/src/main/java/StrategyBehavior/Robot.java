package StrategyBehavior;

public class Robot {

    private RobotBehavior robotBehavior;

    public void setRobotBehavior(RobotBehavior robotBehavior) {
        this.robotBehavior = robotBehavior;
    }

    public void move(){
        robotBehavior.move();
    }

}
