# Programme de Sauvegarde des Répertoire de la base Développer lors de mon Stage de Seconde :

---

## Dépendances :

- windows 7, 8.1, 10, 11 et Windows Serveur 2008 à Windows Serveur 2019
- `dotnet.exe` (voir: <a href="https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.416-windows-x64-binaries">aka.ms dotnet 6.0 Version Portable</a>)

## Compilation :

`dotnet new console`

* Copier Program.cs dans le dossier du Projet *

`dotnet build <project_name>`

---

## Utilisation en ligne de Commande

```cmd / powershell
© CAPSOFT Ingénierie - OT
  V1.01 - Juin 2022
    www.capsoft.fr 
    Usage: 
        compression7zip.exe <arg1> <arg2> ... <option1> ... 
        obligatoire: 
            [1] <répertoire_à_compresser> 
            [2] <préfix> 
            [3] <path_d'arrivé> 
        options: 
            [4] <ProcessPriority> ({Normal, AboveNormal, High, BelowNormal, Idle, RealTime}) [0, 1, 2, 3, 4, 5] (-1 pour laisser Normal) 
            [5] <compression_level> [1-9] (-1 pour laisser à 7)
            [6] <password> (-1 où vide sans mot de passe)
            [7] <resume?> [noResume] (la console se ferme toute seule à la fin du traitement)
            [8] <updatelog?> [updateLog]
            
    - (l'appel de compression7zip.exe avec updateLog à la 8éme position de votre configuration habituelle déclanche la copie de dernier.log vers journal.log (SANS lancer le processus de compression).)
```

---

```csharp
// Program.cs
// See https://aka.ms/new-console-template for more information
using System;
using System.IO;
using System.Text;
using System.Collections.Generic;
using System.Diagnostics;

namespace compression7zip
{
    public class Program
    {
        public static ProcessPriorityClass pc = ProcessPriorityClass.Normal;
        public static string mx = "-mx7";
        private static string password = " ";
        public static bool resume = true;
        public static bool log = false;
        public static void Flag(string f, string stat)
        {
            if (!Directory.Exists($"{Directory.GetCurrentDirectory()}\\params"))
            {
                Directory.CreateDirectory("params");
            }
            File.WriteAllText($"{Directory.GetCurrentDirectory()}\\params\\{DateTime.Now.Month}-{DateTime.Now.Day}-{DateTime.Now.Hour}-{DateTime.Now.Minute}-{f}.txt", stat);
        }
        public static string formerArguments(List<string> arguments)
        {
            List<string> form = new List<string> { "a -t7z ", ".7z", "" };
            for (int i = 0; i < arguments.Count; i++)
            {
                if (arguments[i] == null)
                {
                    form[i + 1] = "";
                }

            }
            return "";
        }
        public static ProcessPriorityClass ppc(int e)
        {
            if (e == 0)
            {
                return ProcessPriorityClass.Normal;
            }
            else if (e == 1)
            {
                return ProcessPriorityClass.AboveNormal;
            }
            else if (e == 2)
            {
                return ProcessPriorityClass.High;
            }
            else if (e == 3)
            {
                return ProcessPriorityClass.BelowNormal;
            }
            else if (e == 4)
            {
                return ProcessPriorityClass.Idle;
            }
            else if (e == 5)
            {
                return ProcessPriorityClass.RealTime;
            }
            return ProcessPriorityClass.Normal;
        }
        public static void Start7zip(string Args, List<string> arguments)
        {
            string DIR = $"{Directory.GetCurrentDirectory()}\\params";
            string InCmd = "\"C:\\Program Files\\7-zip\\7z.exe\" " + Args + " > params\\dernier.log";
            if (!Directory.Exists(DIR))
            {
                Directory.CreateDirectory(DIR);
            }
            if (!File.Exists($"{DIR}\\journal.log"))
            {
                File.WriteAllText($"{DIR}\\journal.log", $"======Date De Création Du Journal : {DateTime.Now.ToString().PadLeft(2, '0')}, ======\n\n");
            }
            if(File.Exists($"{DIR}\\dernier.log"))
            {
                string dernier = File.ReadAllText($"{DIR}\\dernier.log");
                DateTime date = File.GetCreationTime($"{DIR}\\dernier.log");
                string name = $"======= Debut: {date} ======= \n\n Args: {InCmd}\n\n\n";
                DateTime dend = File.GetLastWriteTime($"{DIR}\\dernier.log");
                string fin = $"Fin: {date.ToString()}\n\n\n ===========================================================================================================\n\n";//{dend.Year.ToString().PadLeft(2, '0')}{dend.Month.ToString().PadLeft(2, '0')}{dend.Day.ToString().PadLeft(2, '0')}{dend.Hour.ToString().PadLeft(2, '0')}{dend.Minute.ToString().PadLeft(2, '0')}\n\n";
                if(dernier.Length > 10)
                {
                    File.AppendAllText($"{DIR}\\journal.log", name + dernier + fin);
                }
                File.Delete($"{DIR}\\dernier.log");
                File.Create($"{DIR}\\dernier.log").Close();
                Console.WriteLine("[i] Copie du contenu de .\\PARAMS\\dernier.log vers .\\PARAMS\\journal.log effectuée.\n");
            }
            if(log != true)
            {
                ProcessStartInfo psi = new ProcessStartInfo();
                psi.FileName = "cmd.exe";
                psi.UseShellExecute = false;
                psi.CreateNoWindow = true;
                psi.RedirectStandardInput = true;
                psi.RedirectStandardOutput = false;
                psi.RedirectStandardError = true;

                var _7zip = new Process();
                _7zip.StartInfo = psi;
                Console.WriteLine($"[i] Lancement de cmd.exe avec la ligne de commande : {InCmd}\n");
                _7zip.Start();
                Console.WriteLine("[i] cmd.exe Lancé.\n");
                _7zip.PriorityClass = pc;
                Console.WriteLine($"[i] Priorité du processus mise sur : {pc}, (Voir pour plus d'infos : https://docs.microsoft.com/fr-fr/dotnet/api/system.diagnostics.processpriorityclass?view=net-6.0)\n");
                _7zip.StandardInput.WriteLine(InCmd);
                _7zip.StandardInput.Flush();
                Console.WriteLine("[***] 7z.exe Lancé.\n");
                
                for(int i = 0; i < 10; i++)
                {
                    try
                    {
                        if(Process.GetProcessesByName("7z")[0].PriorityClass != pc)
                        {
                            Process.GetProcessesByName("7z")[0].PriorityClass = pc;
                            Console.WriteLine($"[i] Priorité de 7z.exe mise sur : {pc}, (Voir pour plus d'infos : https://docs.microsoft.com/fr-fr/dotnet/api/system.diagnostics.processpriorityclass?view=net-6.0)\n");
                        }
                        
                    }
                    catch
                    {
                        Thread.Sleep(1000);
                        if(i == 9)
                        {
                            Console.WriteLine("[!] La prioritée de 7z.exe n'à pas pu être mise sur {pc}");
                        }
                    }
                }
            }
        }
        static string input(string text)
        {
            Console.Write(text);
            return Console.ReadLine();
        }
        static void Main(string[] args)
        {
            if (args.Length < 3)
            {
                Console.WriteLine("© CAPSOFT Ingénierie - OT\n  V1.01 - Juin 2022\n  www.capsoft.fr \nUsage: \n    compression7zip.exe <arg1> <arg2> ... <option1> ... \n obligatoire: \n      [1] <répertoire_à_compresser> \n      [2] <préfix> \n      [3] <path_d'arrivé> \n options: \n      [4] <ProcessPriority> ({Normal, AboveNormal, High, BelowNormal, Idle, RealTime}) [0, 1, 2, 3, 4, 5] (-1 pour laisser Normal) \n      [5] <compression_level> [1-9] (-1 pour laisser à 7) \n      [6] <password> (-1 où vide sans mot de passe) \n      [7] <resume?> [noResume] (la console se ferme toute seule à la fin du traitement)\n      [8] <updatelog?> [updateLog] (l'appel de compression7zip.exe avec updateLog à la 8éme position de votre configuration habituelle déclanche la copie de dernier.log vers journal.log (SANS lancer le processus de compression).\n)");
                Console.WriteLine("\n------Press Any Keys To Exit------");
                Console.ReadKey();
                Environment.Exit(0);
            }
            string dir = args[0];
            string[] cut = dir.Split('\\');
            string Filename = cut[cut.Length - 1];
            List<string> arguments = new List<string> { };
            arguments.Add(dir);
            arguments.Add(args[1]);
            arguments.Add(args[2]);
            if (args.Length >= 4)
            {
                if (args[3] != "-1")
                {
                    pc = ppc(Convert.ToInt32(args[3]));
                }
                if (args.Length >= 5)
                {
                    if (args[4] != "-1")
                    {
                        mx = $"-mx{args[4]}";
                    }
                    if (args.Length >= 6)
                    {
                        if (args[5] != "-1")
                        {
                            password = $" -p{args[5]}";
                        }
                    }
                    if (args.Length >= 7)
                    {
                        if (args[6].Contains("noResume"))
                        {
                            resume = false;
                        }
                        if(args.Length >= 8)
                        {
                            if(args[7].Contains("updateLog"))
                            {
                                log = true;
                            }
                        }
                    }
                }
            }
            if (dir != null & arguments[0] != null & arguments[1] != null & arguments[2] != null)
            {
                string Src = $"{arguments[0]}";
                string Dest = $"{arguments[2]}\\{Filename}{arguments[1]} du {DateTime.Now.Day.ToString().PadLeft(2, '0')}-{DateTime.Now.Month.ToString().PadLeft(2, '0')}-{DateTime.Now.Year.ToString().PadLeft(2, '0')}_{DateTime.Now.Hour.ToString().PadLeft(2, '0')}H{DateTime.Now.Minute.ToString().PadLeft(2, '0')}.7z";
                string form = $"a -t7z{password} -bsp1 {mx} \"{Dest}\" \"{Src}\"";
                Start7zip(form, arguments);
            }
            if (resume)
            {
                Console.WriteLine("-----Press Any Keys To Exit-----");
                Console.ReadKey();
            }
        }
    }
}
```