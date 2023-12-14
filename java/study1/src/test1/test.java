package test1;

public class test {
    
   public static void main(String[] args){
        
        System.out.println(" 나도 main 이네?");
        //변수 - 데이터타입 지정;
        // 데이터 종류 - 정수, 실수, 문자, 논리
        // 정수 - byte , short, int ,long
        int a=10; 
        short b=20;
        long d=40;
        System.out.println( a+" "+b+" "+d );
        // 실수 - float(4byte) , double(8byte)
        float ff = 12.0f;
        double dd = 12.34f;
        // 문자 - char(2byte)  ,  ' ' 작은따옴표가 문자를 의미, 큰따옴표는 문자열
        char ch =97;
        System.out.println( ch );
        // 논리 - boolean(1byte)
        boolean fg = true;
        // void - 데이터가없다, 라는 뜻, 또는 타입이 없다라는 뜻
        
        // 참조 타입 -  new 연산자로 생성해야 하는 타입
        //  클래스
        String str = new String("아하 문자열");
        String name = "이순신";
        
        System.out.println( str);

    }
}
