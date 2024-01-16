//백준 2164 카드 게임
package baekjoon.week1;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class solve2 {
    public static void main(String[] args) {


        Scanner input = new Scanner(System.in);

        int N = input.nextInt();

        Queue<Integer> queue = new LinkedList<>();
        //스택을 이용하여서 구현 했을 때:  시간초과 --> 스택에서 어떤 한 요소를 맨 밑에 넣는 것은 매우 비요율적
        for(int i=1;i<N+1;i++) //큐에 원소 삽입
        {
            queue.add(i);
        }

        while(queue.size()>1)
        {
            queue.poll();//버리고

            queue.add(queue.poll());//맨 밑으로 넣는 작업

        }

        System.out.println(queue.poll());


    }
}
