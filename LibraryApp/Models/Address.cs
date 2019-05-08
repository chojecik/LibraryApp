﻿namespace LibraryApp.Models
{
    public class Address
    {
        public int Id { get; set; }
        public string Street { get; set; }
        public int StreetNumber { get; set; }
        public string LocalNumber { get; set; }
        public string City { get; set; }
        public string ZipCode { get; set; }
    }
}