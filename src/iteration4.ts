//
// Iteration 4 | Type aliases
//
 type Book = {
      name: string;
      year: number;
      genres: string[];
      rating?: number;
      author: string;
      numberOfPages?: number;
  };

 type Movie = {
      title: string;
      year: number;
      genres: string[];
      rating?: number;
      director: string;
      durationInMinutes?: number;
  };

   type MusicAlbum = {
      title: string;
      year: number;
      genres: string[];
      rating?: number;
      artist: string;
      numberOfTracks?: number;
          durationInMinutes?: number;
          albumType: "Studio Album" | "Live Album" | "Soundtrack" | "Other";
  };
  
  function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum) {
const thisYear = new Date().getFullYear();
const yearsDifference = thisYear - mediaItem.year;
return yearsDifference
  }