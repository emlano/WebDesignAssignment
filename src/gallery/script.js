
// iframe part

function openMovieDetails(movie) {
    var iframe = document.getElementById('movie-iframe');
    iframe.contentWindow.document.body.innerHTML = getMovieDetails(movie);
  }
  
  //iframe image and movie info 
  
  function getMovieDetails(movie) {
    var movieDetails = '';
  
    
    switch (movie) {
      case 'Movie 1':
        movieDetails = '<h2>Harry Potter and the Deathly Hallows: Part II</h2>' +
                       '<img src="/img/movie_posters/2011.jpeg" alt="Movie 1" width="300">' +
                       '<p>A clash between good and evil awaits as young Harry (Daniel Radcliffe), Ron (Rupert Grint) and Hermione (Emma Watson) prepare for a final battle against Lord Voldemort (Ralph Fiennes). Harry has grown into a steely lad on a mission to rid the world of evil. The friends must search for the Horcruxes that keep the dastardly wizard immortal. Harry and Voldemort meet at Hogwarts Castle for an epic showdown where the forces of darkness may finally meet their match.</p>';
        break;
      case 'Movie 2':
        movieDetails = '<h2>The Avengers</h2>' +
                       '<img src="/img/movie_posters/2012.jpg" alt="Movie 2" width="300">' +
                       '<p>The Avengers is the first major crossover in the Marvel Cinematic Universe and the first to be released by Walt Disney Pictures; the previous films were released by Paramount Pictures (apart from The Incredible Hulk which was distributed by Universal Studios) and as part of the deal of transferring the distribution rights from Paramount to Disney, the Paramount logo appears on the film, its promotion and its merchandise, as well as Paramount earning 8% of the films income. The Walt Disney Company is credited at the end of the film, however.</p>';
        break;
     
        case 'Movie 3':
        movieDetails = '<h2>Frozen</h2>' +
                       '<img src="/img/movie_posters/2013.jpeg" alt="Movie 3" width="300">' +
                       '<p>Frozen is a 2013 American computer-animated musical fantasy film produced by Walt Disney Animation Studios and released by Walt Disney Pictures. The 53rd Disney animated feature film, it is inspired by the 1844 fairy tale The Snow Queen by Hans Christian Andersen. The film was directed by Chris Buck and Jennifer Lee (in her feature directorial debut) and produced by Peter Del Vecho, from a screenplay written by Lee, and a story by Buck, Lee, and Shane Morris. It stars the voices of Kristen Bell, Idina Menzel, Josh Gad, Jonathan Groff and Santino Fontana. Frozen tells the story of Princess Anna as she teams up with an iceman, his reindeer, and a snowman to find her estranged sister Elsa, whose icy powers have inadvertently trapped their kingdom in eternal winter.</p>';
        break;
  
        case 'Movie 4':
        movieDetails = '<h2>Transformers: Age of Extinction</h2>' +
                       '<img src="/img/movie_posters/2014.jpeg" alt="Movie 4" width="300">' +
                       '<p>Transformers: Age of Extinction is a 2014 science fiction action film based on Hasbros Transformers toy line. It is the sequel to Transformers: Dark of the Moon (2011) and the fourth installment in the Transformers live-action film series. Like its predecessor, the film is directed by Michael Bay and written by Ehren Kruger. It stars Mark Wahlberg, Stanley Tucci, Kelsey Grammer, Nicola Peltz, Jack Reynor, Sophia Myles, Bingbing Li, Titus Welliver and T.J. Miller. It does not feature the original human cast from the previous three films, and instead introduces a new human cast and many new Transformers, including the Dinobots.</p>';
        break;
  
        case 'Movie 5':
        movieDetails = '<h2>Star Wars Ep. VII: The Force Awakens</h2>' +
                       '<img src="/img/movie_posters/2015.jpeg" alt="Movie 5" width="300">' +
                       '<p>Star Wars: The Force Awakens (also known as Star Wars: Episode VII – The Force Awakens) is a 2015 American epic space opera film produced, co-written, and directed by J. J. Abrams. The sequel to Return of the Jedi (1983), it is the seventh film in the "Skywalker Saga". Set thirty years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solos search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire. The ensemble cast includes Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyongo, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, and Max von Sydow.</p>';
        break;
  
        case 'Movie 6':
        movieDetails = '<h2>Captain America: Civil War</h2>' +
                       '<img src="/img/movie_posters/2016.jpg" alt="Movie 6" width="300">' +
                       '<p>Captain America: Civil War is a 2016 American superhero film based on the Marvel Comics character Captain America, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Captain America: The First Avenger (2011) and Captain America: The Winter Soldier (2014), and the 13th film in the Marvel Cinematic Universe (MCU). The film was directed by Anthony and Joe Russo from a screenplay by the writing team of Christopher Markus and Stephen McFeely, and stars Chris Evans as Steve Rogers / Captain America alongside an ensemble cast including Robert Downey Jr., Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle, Jeremy Renner, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Paul Rudd, Emily VanCamp, Marisa Tomei, Tom Holland, Frank Grillo, Martin Freeman, William Hurt, and Daniel Brühl. In Captain America: Civil War, disagreement over international oversight of the Avengers fractures the team into two opposing factions—one led by Steve Rogers and the other by Tony Stark (Downey).</p>';
        break;
  
        case 'Movie 7':
        movieDetails = '<h2>Star Wars Ep. VIII: The Last Jedi</h2>' +
                       '<img src="/img/movie_posters/2017.jpg" alt="Movie 7" width="300">' +
                       '<p>Star Wars: The Last Jedi (also known as Star Wars: Episode VIII – The Last Jedi) is a 2017 American epic space opera film written and directed by Rian Johnson. Produced by Lucasfilm and distributed by Walt Disney Studios Motion Pictures, it is the second installment of the Star Wars sequel trilogy, following The Force Awakens (2015), and the eighth episode of the nine-part "Skywalker saga". The films ensemble cast includes Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Andy Serkis, Lupita Nyongo, Domhnall Gleeson, Anthony Daniels, Gwendoline Christie, Kelly Marie Tran, Laura Dern, and Benicio del Toro. The Last Jedi follows Rey as she seeks the aid of Luke Skywalker, in hopes of turning the tide for the Resistance in the fight against Kylo Ren and the First Order, while General Leia Organa, Finn, and Poe Dameron attempt to escape a First Order attack on the dwindling Resistance fleet. The film features the first posthumous film performance by Fisher, who died in December 2016, and the film is dedicated to her memory</p>';
        break;
  
        case 'Movie 8':
        movieDetails = '<h2>Avengers: Infinity War</h2>' +
                       '<img src="/img/movie_posters/2018.jpeg" alt="Movie 8" width="300">' +
                       '<p>Avengers: Infinity War is the third Avengers film and the nineteenth film in the Marvel Cinematic Universe (MCU), released six years after the first Avengers film and ten years after the first MCU film. Directed by Anthony and Joe Russo, the film features an ensemble cast of actors reprising their roles from previous entries in the MCU. Box office analysts identified positive word of mouth and anticipation built up over the course of the MCU as factors working in the films favor.</p>';
        break;
  
        case 'Movie 9':
        movieDetails = '<h2>Avengers: Endgame</h2>' +
                       '<img src="/img/movie_posters/2019.jpeg" alt="Movie 9" width="300">' +
                       '<p>Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse Thanoss actions in Infinity War.</p>';
        break;
        
        
        case 'Movie 10':
        movieDetails = '<h2>Kimetsu no Yaiba: Mugen Ressha-Hen</h2>' +
                       '<img src="/img/movie_posters/2020.jpeg" alt="Movie 10" width="300">' +
                       '<p>A mysterious string of disappearances on a certain train has caught the attention of the Demon Slayer Corps, and they have sent one of their best to exterminate what can only be a demon responsible. However, the plan to board the Mugen Train is delayed by a lesser demon who is terrorizing the mechanics and targeting a kind, elderly woman and her granddaughter. Kyoujurou Rengoku, the Flame Pillar, must eliminate the threat before boarding the train.</p>';
        break;
  
        case 'Movie 11':
        movieDetails = '<h2>Spider-Man: No Way Home</h2>' +
                       '<img src="/img/movie_posters/2021.jpg" alt="Movie 11" width="300">' +
                       '<p>Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong because of Parkers actions, the multiverse is broken open, which allows visitors from alternate realities to enter Parkers universe.</p>';
        break;
  
        case 'Movie 12':
        movieDetails = '<h2>Avatar: The Way of Water</h2>' +
                       '<img src="/img/movie_posters/2022.jpg" alt="Movie 12" width="300">' +
                       '<p>Avatar: The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron. He co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role[6] while Kate Winslet joined the cast. It follows a blue-skinned humanoid Navi named Jake Sully (Worthington) as he and his family, under renewed human threat, seek refuge with the aquatic Metkayina clan of Pandora, a habitable exomoon on which they live.</p>';
        break;
  
    }
  
    return movieDetails;
    
    }
  
  
  
      // Function to change the color theme
      function changeColorTheme(color) {
        document.body.style.backgroundColor = color.background;
        document.body.style.color = color.font;
        
        var iframe = document.getElementById('movie-iframe');
        if (iframe) {
          iframe.contentDocument.body.style.backgroundColor = color.background;
          iframe.contentDocument.body.style.color = color.font;
        }
      }
      
      // Function to change the font size
      function changeFontSize(size) {
        document.body.style.fontSize = size + 'px';
        
        var iframe = document.getElementById('movie-iframe');
        if (iframe) {
          iframe.contentDocument.body.style.fontSize = size + 'px';
        }
      }
      
      
      // Function to revert to the default color theme
      function revertToDefault() {
        document.body.style.backgroundColor = 'var(--clr-bg)';
        document.body.style.color = 'var(--clr-fg)';
      }
      
      // Function to generate a random color
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      
      // Function to change the color theme to a random color
      function changeToRandomColor() {
        var randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        document.body.style.color = '#ffffff';
      }