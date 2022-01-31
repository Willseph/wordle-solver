# Wordle Solver

This is just a quick project I made in about an hour, not meant to be very pretty. If you aren't familiar, you should first try out [Wordle](https://www.powerlanguage.co.uk/wordle/) for yourself to see how well you can do without ~cheati~, I mean... _tool-assistance_.

While Wordle is completely client-side, and something could be created that just spoils the current word instantly, this approach seemed a little more fun.

![](https://i.imgur.com/vuZk1uA.png)

# How it works

This tool is totally client-side, and can work locally if the files are downloaded yourself. The word bank was scraped from the Wordle game's JS itself, in order to start with the pool of words that the game will accept.

After making your first guess in Wordle, some letters may be eliminated (gray), some may be correct but in the wrong location (yellow), and some may be correct and in the right location (green).

After each guess, enter the letters that apply to those three scenarios into the tool. Eliminated letters should go in the first gray box, yellow letters should go in the second yellow box, and green letters should be placed in their appropriate slots.

Using that information, the tool will attempt to narrow down the possibilities from the word bank. If not enough information is provided to narrow down the results to a certain threshold, then you'll need to make another guess to either eliminate or confirm more letters.

Using this tool, I have yet to come across any word that can't be solved within six guesses.

# Doesn't this ruin the fun?

Yeah, probably. But someone was bound to make this at some point (and I'm sure multiple people already have). I don't think Wordle was ever meant to be competitive. If it was, it wouldn't have been built client-side.

Try not to take it too seriously. I know some people are really intense when it comes to Wordle, and that's fine. For those of you who are, I'm sure you don't need this tool to solve the word every day, and I applaud you for that.

This tool was just meant to be a little project of my own. I may not have the goodest vocabulary, but I like solving programming puzzles, and this seemed like a fun opportunity.
