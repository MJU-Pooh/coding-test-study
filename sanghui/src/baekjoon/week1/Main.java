package baekjoon.week1;

import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        int N = input.nextInt();

        Queue<Integer> queue = new LinkedList<>();
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

//스택으로 구현해서 add 메소드 쓰는 경우: 맨 밑에 넣는 작업 자체가 스택에서 매우 비효율적 따라서 큐 사용