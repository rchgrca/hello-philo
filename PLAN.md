# Plan
* understand README.md thoroughly
* use redux devtool to see how store reacts with different routes
* draw pics of how requirements should work (me:  visual learner)
  * onclick, add podcast to queue reducer
  * create component to render queue list, render queue from store
  * on podcast event finished, play next in queue
  * OPTIONAL
    * remove podcast from queue
    * allow reordering of podcasts in queue
    * allow ability to play podcast directly from queue

# Actions
* router/LOCATION_CHANGE = "/" (onload)
* ADD_PODCASTS (has payload with 4 podcasts and each contain an "item" representing an array of mp3 recordings)
    * state.podcasts (contains 4 podcasts and each contain an "item" representing an array of mp3 recordings)
* @@router/LOCATION_CHANGE = "/All-JavaScript-Podcasts-by-Devchattv"
  * action.payload.pathname = "/All-JavaScript-Podcasts-by-Devchattv"
  * action.payload.action = "PUSH"
* LOAD_PODCAST_EPISODE (player displays)
  * state.player.podcastTitle: "All JavaScript Podcasts by Devchat.tv"
  * state.player.title: "JSJ 269 Reusable React and JavaScript Components with Cory House"
  * state.player.src: "https://media.devchat.tv//js-jabber/JSJ_269_Reusable_React_and_JavaScript_Components_House_mixdown.mp3"
  * state.player.podcastId: "All-JavaScript-Podcasts-by-Devchattv"

# Approach
  * fix a few UI issues to get acquire more context
  * create "Add to playlist" button
  * add click event to "Add to playlist" button, insure it does not fire "play episode" event
  * create "ADD_TO_PLAYLIST" action
  * create "DELETE_FROM_PLAYLIST" action
  * create store 'playlist' item
  * create "ADD_TO_PLAYLIST" reducer
  * create "DELETE_FROM_PLAYLIST" reducer
  * create "Playlist" link in sidebar navigation
  * create "Playlist" view/component
  * add UI polish
    * add
