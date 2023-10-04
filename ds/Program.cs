Singleton obj1 = Singleton.GetInstance;
Singleton obj2 = Singleton.GetInstance;


public sealed class Singleton
{
    private int counter;
    private static Singleton? Instance;

    public static Singleton GetInstance
    {
        get
        {
            if (Instance == null)
            {
                Instance = new Singleton();
            }
            return Instance;
        }
    }

    private Singleton()
    {
        counter++;
        Console.WriteLine(counter);
    }
}
