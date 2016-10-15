var quotes = [
    {
        author: "Michael Bolton",
        quote: "PC load letter! What the fuck does that mean?"
    },
    {
        author: "Lawrence",
        quote: "I'll tell you what I'd do, man: two chicks at the same time, man."

    },
    {
        author: "Bob Porter",
        quote: "We're gonna be getting rid of these people here... First, Mr. Samir Naga... Naga... Naga... Not gonna work here anymore, anyway."
    },
        {
            author: "Ron Burgundy",
            quote: "I immediately regret this decision."
        },
    {
        author: "Ron Burgundy",
        quote: "I love scotch. Scotchy scotch scotch. Here it goes down, down into my belly."
    },
    {
        author: "Ron Burgundy",
        quote: "You are a smelly pirate hooker. Why don’t you go back to your home on Whore Island?"
    },
    {
        author: "Ron Burgundy",
        quote: "Discovered by the Germans in 1904, they named it San Diego, which of course in German means ‘a whale’s vagina."
    },
    {
        author: "Ron Burgundy",
        quote: "Baxter, is that you? Baxter! Bark twice if you’re in Milwaukee."
    },
    {
        author: "Frank",
        quote: "I got my Magnum condoms; I got my wad of hundreds. I'm ready to plow."
    },
    {
        author: "Frank",
        quote: "I'm not gonna be buried in a grave. When I'm dead, just throw me in the trash."
    },
    {
        author: "Charlie",
        quote: "Is your cat making TOO MUCH NOISE ALL THE TIME?"
    },
    {
        author: "Dennis",
        quote: "If you're in my room, you're always being filmed"
    },
    {
        author: "Charlie",
        quote: "Oh, shit. Look at that door, dude. See that door right there? The one marked 'Pirate?' You think a pirate lives in there?"
    }


];


var rand = Math.floor(Math.random() * 13);
var rand_quote = quotes[rand].quote;
var quote_author = quotes[rand].author;
$("#quote-div").html(rand_quote);
$("#quote-author").html("-" + quote_author);

var twitter_url = "http://twitter.com/home?status=";
$("#twitter-quote").attr("href", twitter_url + rand_quote)

$("button").click(function () {
    var rand = Math.floor(Math.random() * 13);
    var rand_quote = quotes[rand].quote;
    var quote_author = quotes[rand].author;
    $("#quote-div").html(rand_quote);
    $("#quote-author").html("-" + quote_author);

    var twitter_url = "http://twitter.com/home?status=";
    $("#twitter-quote").attr("href", twitter_url + rand_quote)

});

