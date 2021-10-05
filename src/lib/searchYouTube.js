import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.ajax({
    url: Parse.server,
    type: 'GET',
    data: { q: query,
      order: 'relevance' },
    contentType: 'application/json',
    success: function (data) {
      callback(data);
    },
    error: error || function(error) {
      console.error('Recastly: failed to fetch messages', error);
    }
  });
};

export default searchYouTube;
