* NOTE:
  * I love this way of assessing an prospective developer's skills and more specifically,
    I found this to be a challenging and fun project.  The challenge for me was working with a
    different Redux design pattern (i.e. createReducer()) and with stateless React components.  
    The amount of learning achieved on this project was more than I anticipated.  I had fun!

* FEATURES:

  * REQUIRED (COMPLETE)
    * allow a user to add a podcast episode to a queue
    * once an episode ends, the next queued episode should play automatically
    * render the queue within the application

  * OPTIONAL (COMPLETE)
    * allow a user to remove an episode from the queue
    * allow a user to play an episode directly from the queue
    * responsive web design

  * OTHER (COMPLETE):
    * responsive web design
      * remove sidebar, unnecessary
    * logo link accessed from anywhere (top)
    * playlist link accessed from anywhere except playlist page (bottom)
    * use given svg icons
    * remove "add" icon when episode in playlist
    * when last episode in queue plays, start from beginning of queue
    * when episode is playing, a "live lightning bolt" icon is display next to episode
    * works in Firefox and Safari, IE not tested
    * eslint passes with no errors

* FUTURE:
  * add many more SCSS mixins
  * redesign UI, I still see some usability issues
  * put <li> in podcast-episode-list.js and playlist.js into one re-usable component
