
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
/*
  genres - 1 = fantasy
           2 = science fiction
           3 = drama
           4 = horror/suspense
  authors  1 = brooks
           2 = grisham
           3 = feist
           4 = martin
           6 = rowling
           7 = tolkein
           

  pub      1 = tor
           2 = del rey
           3 = bantam
           4 = scribner
           5 = specter
*/

        {title: "Magician", genre_id: 1, year_published: 1982, author_id: 3, publisher_id: 6, cover_img: 'https://en.wikipedia.org/wiki/Magician_(Feist_novel)#/media/File:Feist_-_Magician_Coverart.png'},
        {title: "Silverthorn", genre_id: 1, year_published: 1985, author_id: 3, publisher_id: 6, cover_img: 'https://upload.wikimedia.org/wikipedia/en/d/de/Feist_-_Silverthorn_Coverart.png'},
        {title: "A Darkness at Sethanon", genre_id: 1, year_published: 1986, author_id: 3, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/A_Darkness_at_Sethanon#/media/File:Feist_-_A_Darkness_at_Sethanon_Coverart.png'},
        {title: "The Sword of Shannara", genre_id: 1, year_published: 1977, author_id: 1, publisher_id: 2, cover_img: 'https://upload.wikimedia.org/wikipedia/en/9/94/Sword_of_shannara_hardcover.jpg'},
        {title: "The Elfstones of Shannara", genre_id: 1, year_published: 1982, author_id: 1, publisher_id: 2, cover_img: 'https://upload.wikimedia.org/wikipedia/en/9/97/Elfstones_Cover.gif'},
        {title: "The Wishsong of Shannara", genre_id: 1, year_published: 1985, author_id: 1, publisher_id: 2, cover_img: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Wishsong_Cover.gif'},
        {title: "A Time to Kill", genre_id: 3, year_published: 1989, author_id: 2, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/A_Time_to_Kill_(Grisham_novel)#/media/File:A_Time_To_Kill.jpg'},
        {title: "The Firm", genre_id: 3, year_published: 1991, author_id: 2, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/The_Firm_(novel)#/media/File:The_Firm_Grisham.jpg'},
        {title: "The Pelican Brief", genre_id: 3, year_published: 1992, author_id: 2, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/The_Pelican_Brief#/media/File:Pelican_brief_book_cover.jpg'},
        {title: "A Game of Thrones", genre_id: 1, year_published: 1996, author_id: 4, publisher_id: 3, cover_img: 'https://en.wikipedia.org/wiki/A_Game_of_Thrones#/media/File:AGameOfThrones.jpg'},
        {title: "A Clash of Kings", genre_id: 1, year_published: 1998, author_id: 4, publisher_id: 3, cover_img: 'https://en.wikipedia.org/wiki/A_Clash_of_Kings#/media/File:AClashOfKings.jpg'},
        {title: "A Storm of Swords", genre_id: 1, year_published: 2000, author_id: 4, publisher_id: 3, cover_img: 'https://en.wikipedia.org/wiki/A_Storm_of_Swords#/media/File:AStormOfSwords.jpg'},
        {title: "A Feast for Crows", genre_id: 1, year_published: 2005, author_id: 4, publisher_id: 3, cover_img: 'https://en.wikipedia.org/wiki/A_Feast_for_Crows#/media/File:AFeastForCrows.jpg'},
        {title: "A Dance with Dragons", genre_id: 1, year_published: 2011, author_id: 4, publisher_id: 3, cover_img: 'https://en.wikipedia.org/wiki/A_Dance_with_Dragons#/media/File:A_Dance_With_Dragons_US.jpg'},
        {title: "Harry Potter and the Philosopher Stone", genre_id: 1, year_published: 1998, author_id: 6, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone#/media/File:Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg'},
        {title: "Harry Potter and the Chanber of Secrets", genre_id: 1, year_published: 1999, author_id: 6, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets#/media/File:Harry_Potter_and_the_Chamber_of_Secrets.jpg'},
        {title: "Harry Potter and the Prisoner of Azkaban", genre_id: 1, year_published: 1999, author_id: 6, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Prisoner_of_Azkaban#/media/File:Harry_Potter_and_the_Prisoner_of_Azkaban.jpg'},
        {title: "Harry Potter and the Goblet of Fire", genre_id: 1, year_published: 2000, author_id: 6, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Goblet_of_Fire#/media/File:Harry_Potter_and_the_Goblet_of_Fire.jpg'},
        {title: "Harry Potter and the Order of the Phoenix", genre_id: 1, year_published: 2003, author_id: 6, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Order_of_the_Phoenix#/media/File:Harry_Potter_and_the_Order_of_the_Phoenix.jpg'},
        {title: "Harry Potter and the Half-Blood Prince", genre_id: 1, year_published: 2005, author_id: 6, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Half-Blood_Prince#/media/File:Harry_Potter_and_the_Half-Blood_Prince.jpg'},
        {title: "Harry Potter and the Deathly Hallows", genre_id: 1, year_published: 2007, author_id: 6, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/Harry_Potter_and_the_Deathly_Hallows#/media/File:Harry_Potter_and_the_Deathly_Hallows.jpg'},
        {title: "The Hobbit", genre_id: 1, year_published: 1937, author_id: 7, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/The_Hobbit#/media/File:TheHobbit_FirstEdition.jpg'},
        {title: "The Fellowship of the Ring", genre_id: 1, year_published: 1954, author_id: 7, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/The_Fellowship_of_the_Ring#/media/File:The_Fellowship_of_the_Ring_cover.gif'},
        {title: "The Two Towers", genre_id: 1, year_published: 1954, author_id: 7, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/The_Two_Towers#/media/File:The_Two_Towers_cover.gif'},
        {title: "The Return of the King", genre_id: 1, year_published: 1955, author_id: 7, publisher_id: 5, cover_img: 'https://en.wikipedia.org/wiki/The_Return_of_the_King#/media/File:The_Return_of_the_King_cover.gif'},
     ]);
    });
};
