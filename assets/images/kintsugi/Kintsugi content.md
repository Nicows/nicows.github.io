# Kintsugi
## First year
## role from the start of project

- wind prototype: The game designers wanted a gameplay mechanic with wind to create puzzles. I took a lot of time on this prototype because it's was hard toknow how we would apply forces on the player since the character controller was being made in parallele. [Insert wind gif]
- Iteration goldshot: I took what was made a prototype and needed to iterate our main USP, the gold the player can shot and infuse into objects. I spend a long time on it because the project was evolving really fast at the start and the expectation of the game designers was changing and the implementation of it from the Game artists. [Insert Kintsugi_iteration_goldshot-gif.webp]

### Tools
At the end of first year, I made an Unity editor to help game dessigners look for the sequencers in all the scenes. I added a filter per scene and they could also search the colliders that active those sequencers. [sequencer_tool_gif.webp]
Another tab of this editor was for all the player teleporter in the scenes. I made two ways to use it:
- One that get all PlayerSpawn in the scenes, so people can teleport directly at the scene default point
- Another was a scriptable object that could countain coordinates. I made a default scriptable for all spawner in the scenes but we can also drag & drop a gameobject to get the coordinates and add it to the list of the scriptable. [teleporter_tool_gif.webp]

## Second year
### Refactorisation of goldshot
Refactorisation of goldshot into multiple scripts because everything was in a single script and we wanted to separate everything to help add more gameplay mechanics. The best way I found was to create a script that would act as the intermediary between the other gameplay mechanics with gold.

### Debug
Lead debug in the last sprint when we were doing polish. Principal function was to fix bugs. I discover that I really liked to analyze bugs to know where they came from and to resolve them.  