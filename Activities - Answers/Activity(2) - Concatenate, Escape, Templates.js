//PART 1
//Consider the following text
//I love the song 'What I've Done' from the album "Minutes to Midnight" by `Linkin Park`.

//Initialize the above text using each type of string literal without escape characters and minimal concatenation
let doubleLiteral1 = "I love the song 'What I've Done' from the album " + '"' + "Minutes to Midnight" + '"' + " by `Linkin Park`.";
let singleLiteral1 = 'I love the song ' + "'" + 'What I' + "'" + 've Done' + "'" + ' from the album "Minutes to Midnight" by `Linkin Park`.';
let templateLiteral1 = `I love the song 'What I've Done' from the album "Minutes to Midnight" by ` + "`" + `Linkin Park` + "`" + `.`;

//Initialize the above text using each type of string literal without concatenation
let doubleLiteral2 = "I love the song 'What I've Done' from the album \"Minutes to Midnight\" by `Linkin Park`.";
let singleLiteral2 = 'I love the song \'What I\'ve Done\' from the album "Minutes to Midnight" by `Linkin Park`.';
let templateLiteral2 = `I love the song 'What I've Done' from the album "Minutes to Midnight" by \`Linkin Park\`.`;

//PART 2
//Consider the following template text
//I love the song '<SONG_NAME>' from the album "<ALBUM_NAME>" by `<ARTIST_NAME>`.
const songName = "Demons";
const albumName = "Night Visions";
const artistName = "Imagine Dragons";

//Initialize the above template using each type of string literal without escape characters and minimal concatenation
let doubleLiteral3 = "I love the song '" + songName + "' from the album " + '"' + albumName + '"' + " by `" + artistName + "`.";
let singleLiteral3 = 'I love the song ' + "'" + songName + "'" + ' from the album "' + albumName + '" by `' + artistName + '`.';
let templateLiteral3 = `I love the song '${songName}' from the album "${albumName}" by ` + "`" + `${artistName}` + "`" + `.`;

//Initialize the above text using template string literal without concatenation
let templateLiteral4 = `I love the song '${songName}' from the album "${albumName}" by \`${artistName}\`.`;

