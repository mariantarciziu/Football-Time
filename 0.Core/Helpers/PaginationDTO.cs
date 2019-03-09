using System;
using System.Collections.Generic;
using System.Text;

namespace Core
{
    public class PaginationDTO<T>
    {
        public ICollection<T> Items { get; set; }

        public int CurrentPage { get; set; }

        public int PageSize { get; set; }

        public int TotalNumber { get; set; }

        public int TotalPages { get; set; }
    }
}
