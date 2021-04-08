const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What type of music do you listen to?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('Which sport is your absolute favourite?', (sport) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
            console.log(`Profile:
Name: ${name}
Random Activity: ${activity}
Music Choice: ${music}
Favourite Meal: ${meal}
Favourite Sport: ${sport}
Dream Superpower: ${superpower}`);
                        
            rl.close();
          });
        });
      });
    });
  });
});
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!