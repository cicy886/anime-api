import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import InspirationQuote from './business-logic.js';

$(document).ready(function() {
  $('#quoteButton').click (function(){
    let promise = InspirationQuote.getQuote();
    promise.then(function(response){
      const body = JSON.parse(response);
      $('.showQuote').text(`${body.affirmation}`);
      $('.showQuote').text('');
      // $('.showAuthor').text(`${body.author}`);
    }, function(error){
      $('.showError').text(`There was an error message: ${error}`);
    });
  });
});
