import java.io.*;

public class BufferOutStream {

    public static void main(String[] args) throws IOException{

        FileOutputStream stream=new FileOutputStream ("test.txt");
        BufferedOutputStream bos=new BufferedOutputStream(stream);
       
        byte[]  b="welcome to java programming".getBytes();
        
        long start=System.nanoTime();
        
        for (int i=0; i<10000; i++){
            
          bos.write(b);
            bos.flush();
        }
        bos.close();
        stream.close();
      
        long end=System.nanoTime();
        System.out.println(end-start);
        
    }
    
}
