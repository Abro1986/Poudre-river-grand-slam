+# Poudre-river-grand-slam
+
+Instructions:
+
+The object of the game is to catch as many fish as possible within 60 seconds. there are four different types of trout
+that all want to eat a different fly in a choice of three. you select a fly on the left side by clicking the associated 
+button and then click anywhere on the board to add the fly. if the fish wants to eat the fly that is presented in front of it
+then it is removed from the board with the fly. you then must select another fly while fish continue to scroll across the board.
+
+game:
+
+the game is half skill, and half memory game. if you learn and remember what the fish will eat then it will be a much easier 
+game, but there is still a fair amount of randomness to it!
+
+what game is about:
+
+the games original objective was to catch one of each species, but this is a much more simple broad strokes kind of game.
+I believe it still gets the point across. It also should have an educational aspect to it because my original intent for     
+this game was to be a little game for those just getting into fly fishing to learn something about the eating habits of trout
+
+approach:
+
+I approached this game as a html canvas game first, but after feeling I was not getting the results I wanted I scraped it for 
+standard html/javascript. However, after a bit more research I hit my stride and I finished the project in canvas. My method was
+to use recursive functions to move the fish across the screen and assign img src to an array of objects that are created every 2 seconds.
+I would then call to those img srcs through dot notation to see if those fish would eat a certain fly. I also used the pythagorean
+therom to check distance between the fish and the fly. 
+
+obstacles:
+
+My first obstacle was that the recursive function was drawing millions of trout as the animation frame was running,
+and the fish were not moving just where the fish were drawn next. That was solved with an object litereal and pushing those 
+fish objects into an array and spawning a new fish object every 2 seconds. the next obstacle was setting the varibles that 
+I would call to for the collision detection. I set them to an absolute path to the image.png which was a mistake because
+those paths changed when uploaded the page to Github. that was solved with a splice method on the source and popping the     
+image.png. I also feel I am still lacking in the css styling portion of my projects and that is why I always save them for last
+and seem to rush too much on them.
+
+technologies:
+
+I used HTML canvas which was not something we went over in class. I really enjoyed how easy it was to get a very simle thing 
+moving and I can totally see how powerful it could be. I will defiently be looking into learning more about this tool.
+
+personal twists:
+
+I was not intending to make a memory game but I am actually quite happy with how the final product turned out. obviously the 
+personal twist is that it is a fishing game. Given more time I feel I could add fighting fish with a line that would be drawn 
+from the bottom to the fish and the fish running the opposite direction. 
+
+Trello board: 
+
+there were six tasks that I either took a different approach with or just did not complete and will be in version 2.0
+- html grid
+- need to add one more fly
+- make background image scroll
+- victory condition needs to be catching all four species
+- flies need to move the opposite direction of trout
+- it needs a mre polished look via css styling