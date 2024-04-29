//백준 2750 수 정렬하기
package baekjoon.week1;

import java.util.Scanner;

public class solve4 {

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        int N = input.nextInt();

        int[] arr = new int[N];

        for(int i=0 ;i<N;i++)
        {
            arr[i] = input.nextInt();
        }


        for(int i=0;i<N-1;i++)
        {
            for(int j=i+1 ; j<N;j++)
            {
                int tmp = 0;
                if(arr[i]>arr[j])
                {
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
        }

        for(int v: arr)
        {
            System.out.println(v);
        }



    }
}
