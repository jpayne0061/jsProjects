using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using jsProjects.Models;

using System.IO;
using System.Text;


namespace jsProjects.Data
{
    public class fileObjectRepository
    {
        private static List<objectFile> _allDirectories = new List<objectFile>
        {
            new objectFile()
            {
                Id = 0,
                style = "../../front-end/style.css",
                script = "../../front-end/script.js",
                title = "Simon",
                body = File.ReadAllText(@"C:\Users\jpayne0061\Source\Repos\jsProjects\src\jsProjects\Data\htmlText.txt")
                
            },

            new objectFile()
            {
                Id = 1,
                style = "../../front-end/calc.css",
                script = "../../front-end/calc.js",
                title = "Calculator",
                body = File.ReadAllText(@"C:\Users\jpayne0061\Source\Repos\jsProjects\src\jsProjects\Data\calc.txt")
            },

            new objectFile()
            {
                Id = 2,
                style = "../../front-end/quote.css",
                script = "../../front-end/quote.js",
                title = "Quote Machine",
                body = File.ReadAllText(@"C:\Users\jpayne0061\Source\Repos\jsProjects\src\jsProjects\Data\quote.txt")
            }


        };


        public objectFile GetObjectFile(int id)
        {
            objectFile fileToReturn = null;

            foreach (var objectFile in _allDirectories)
            {
                if (objectFile.Id == id)
                {
                    fileToReturn = objectFile;

                    break;
                }
            }

            return fileToReturn;
        }

    }
}

