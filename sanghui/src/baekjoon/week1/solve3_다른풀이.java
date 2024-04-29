//백준 11286 절댓값 힙 (다른 풀이)
package baekjoon.week1;

import java.util.PriorityQueue;
import java.util.Scanner;

import static java.lang.Math.abs;

public class solve3_다른풀이 {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int N = input.nextInt();

        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>((o1, o2) -> {
            int a = abs(o1);
            int b = abs(o2);

            if(a == b) {
                if (o1 > o2) {
                    return 1;
                } else {
                    return -1;
                }
            }

            return a-b; //양수이면 (절댓값)o1>o2 라는 뜻이고, 큰 수의 우선순위가 밀림
        });//람다식 표현

        for(int i=0;i<N;i++)
        {
            int num = input.nextInt();

            if(num ==0&& priorityQueue.isEmpty())
            {
                System.out.println(0);
            } else if (num==0) {
                System.out.println(priorityQueue.poll());
            }
            else
            {
                priorityQueue.add(num);
            }
        }



    }
}
