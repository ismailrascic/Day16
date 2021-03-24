class Book
{
   constructor(title)
   {
       this.title = title;
   }


    get gettitle()
    {
    return this.title;
    }

    set settitle (newTitle)
    {
      this.title = newTitle;
    }
  
}
 const littlePrince = new Book("The Little Prince")
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title)