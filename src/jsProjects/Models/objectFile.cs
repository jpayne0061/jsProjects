using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace jsProjects.Models
{
    public class objectFile
    {

        public int Id { get; set; }
        public string normalize { get { return "../../front-end/normalize.css"; } }
        public string skeleton { get { return "../../front-end/skeleton.css"; } }
        public string jquer { get { return "https://code.jquery.com/jquery-1.12.4.min.js"; } }
        public string style { get; set; }
        public string script { get; set; }
        public string title { get; set; }
        public string bs { get { return  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"; } }
        public string body { get; set; }
    }
}

