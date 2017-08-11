* NOTE:
  * I love this way of assessing a developer's skill.  I also found this to be a
    challenging and fun project.  It was fantastic!  
    The following describes what I created.

* FEATURES:

  * REQUIRED (COMPLETE)
    * allow a user to add a podcast episode to a queue
    * once an episode ends, the next queued episode should play automatically
      * most reliable test:  fast-forward to 1 minute before episode finishes and
        watch it automatically play the next in the list
    * render the queue within the application

  * OPTIONAL (COMPLETE)
    * allow a user to remove an episode from the queue
    * allow a user to play an episode directly from the queue

  * OTHER (COMPLETE):
    * responsive web design
      * remove sidebar, unnecessary
    * logo link accessed from anywhere (top)
    * playlist link accessed from anywhere except playlist page (bottom)
    * display podcast and episode in the playlist and link back to podcast page
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
  * remove playlist link and use a tooltip to add to playlist and go to playlist
