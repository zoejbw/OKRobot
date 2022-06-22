# OKRobot
Projects from OK Robot Reboot (2021)

## AI AudioBook

Used variation voices in mac system ("deranged", "whispered", "hysterical"), to have them read out relevant dialogue in a more expressive tone. Also used some of the google accented voices ("UK English Female"/"UK English Male") to distinguish gendered character voices from the voice of the narrator. Includes example excerpts from Project Gutenberg that each trigger a change in tone with their dialogue. Any short text should work, as long at it is formatted properly with dialogue in quotations, and either a gender pronoun or intonation word (cries/sobs/screams/whispers). In a wider application, I hope that this could utilize the variety of TTS voices to enhance the experience of listening to long audiobook and screen-reader texts. <br>

Hosted on Glitch: [here](https://ai-audiobook.glitch.me/)

## Emotional Textbot
Final Project - collaboration with Christshon David Harris <br>

For this project Christshon and I were both interested in the strange social relationships to voice assistants like Siri and Alexa, including the classic question of "Should you be nice to them?". When it came down to it, we both liked the concept, inspired by the iconic roomba with a knife, of a voice assistant expressing rage--an Alexa with a hammer. With communication being increasingly digitally-mediated, we decided to have our robot serve the function of delivering text messages, with the added personality of interpreting and expressing tone.  <br>

The bot functions as a glitch-hosted web application, with an arduino-activated servo motor output. On the input side, one user sends a text. The message is analyzed and given a scale of negative/positive tone using the sentiment library. On the output screen, the recipient "checks texts" in order to activate the mobile text-to-speech function. If a message is received, it reads it with a corresponding tone of voice--slightly faster an higher for positive, slower and lower for negative. In addition, the screne turns green or red, which cues the color-sensor on the arduino. On a red negative text, the bot swings its hammer around to wreck the desk, adding a tantrum motion to its negative reading. <br>

I think the current iteration is successful in playfully adding an emotional personality to a voice assistant-like text bot. We discussed our ideal framing for it being more of an independent free-standing device, which we were using the phone-arduino setup in place of. In further development, I would also like to change it to having true texting input, and a more intuitive speech-activated retreival system, both of which were currently limited by the use of the mobile web browser. <br>

Hosted on Glitch: [input](https://emotional-textbot.glitch.me/) [output](https://emotional-textbot.glitch.me/output)
