import java.util.*;
public class ExceptionHandeling {


    public static void main(String[] args) {
        
        //Extends
      
        validate(-2);
        
    }
   public void  validate(int number) throws negativeNumberException
   {
    
    try{
        if(number<0)
          throw new negativeNumberException();           
        
    }catch (Exception e){ System.out.println(e.getMessage());}
  
}
   
   
   class negativeNumberException extends Exception{
       
          public negativeNumberException(){
            super("negaticeNumberException");  
          }
        
   }
   
}

