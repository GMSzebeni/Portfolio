package com.gmszm.gmszmportfoliomail;

public class PingCounter extends Thread {
    private long number = 0l;

    public void run() {
        while (!Thread.interrupted()) {
            number++;
        }
    }

    public long getNumber() {
        return number;
    }
}
