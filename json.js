// I have put your data into an variable;
// then started destructuring;
//at the end of this code you will find the data in tebular form
const jsonResult = {
  data: {
    FinalHelperCombinationList: [],
    FinalCombinationList: [
      {
        ArticleList: [
          {
            Id: 54,
            Description: "VT-U 20mm/4x10-20/140(30)",
            Number: "719241",
            Datasheet: "04.06-01_vt-u.pdf",
          },
          {
            Id: 54,
            Description: "VT-U 20mm/4x10-20/140(30)",
            Number: "719241",
            Datasheet: "04.06-01_vt-u.pdf",
          },
        ],
        TotalSize: 40,
        HighSize: 40,
        Category1: false,
        Category2: false,
        Category3: false,
        Category4: false,
        Category6: false,
        Category7: false,
        CombinationScore: 0,
      },
      {
        ArticleList: [
          {
            Id: 113,
            Description: "VT-U 30mm/4x10-20/140(24)",
            Number: "719230",
            Datasheet: "04.06-01_vt-u.pdf",
          },
          {
            Id: 114,
            Description: "VT-U 10mm/4x10-20/140(40)",
            Number: "719240",
            Datasheet: "04.06-01_vt-u.pdf",
          },
        ],
        TotalSize: 40,
        HighSize: 40,
        Category1: false,
        Category2: false,
        Category3: false,
        Category4: false,
        Category6: false,
        Category7: false,
        CombinationScore: 0,
      },

      {
        ArticleList: [
          {
            Id: 51,
            Description: "VT-B 15mm/4x10-15/140, 4Stege(40)",
            Number: "719041",
            Datasheet: "04.05-01_vt-b.pdf",
          },
          {
            Id: 51,
            Description: "VT-B 15mm/4x10-15/140, 4Stege(40)",
            Number: "719041",
            Datasheet: "04.05-01_vt-b.pdf",
          },
          {
            Id: 114,
            Description: "VT-U 10mm/4x10-20/140(40)",
            Number: "719240",
            Datasheet: "04.06-01_vt-u.pdf",
          },
        ],
        TotalSize: 40,
        HighSize: 40,
        Category1: false,
        Category2: false,
        Category3: false,
        Category4: false,
        Category6: false,
        Category7: false,
        CombinationScore: 0,
      },
    ],
  },
};

// Starting of Destructuring

const {
  data: { FinalCombinationList: articles },
} = jsonResult;

//variable "articles" is an array containing objects as its elements.
// so applying froEach loop to the array "articles"

articles.forEach((article) => {
  // after looping through "articles" we get nested objects "article"
  // Destructuring "article" to get ArticleList. ArticleList will be  arrays.

  const { ArticleList } = article;

  //applying froEach loop to the array "ArticleList"

  ArticleList.forEach((articleInfo) => {
    // to show data in tebular format

    console.table(articleInfo);

    //"articleInfo" are objects.
    //Destructuring object properties

    const { Id, Description, Number, Datasheet } = articleInfo;
    console.log(Id, Description, Number, Datasheet);
  });
});

// run this code with an html file and see the result in console as console.table() will only work in a browser // or if youre using vs code, you can run this code directly
