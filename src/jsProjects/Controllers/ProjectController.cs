using jsProjects.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using jsProjects.Models;

namespace jsProjects.Controllers
{
    public class ProjectController : Controller
    {
        private fileObjectRepository _fileRepo = null;

        public ProjectController()
        {
            _fileRepo = new fileObjectRepository();
        }

        public ActionResult projectPage(int? id)
        {
            if (id == null)
            {
                return View();
            }

            var fileObj = _fileRepo.GetObjectFile((int)id);

            return View(fileObj);
        }

    }
}