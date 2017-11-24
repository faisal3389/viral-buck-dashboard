$(function (){

	// var url = 'www.sellergyan.com';
  var url = document.getElementById('shareUrl').innerHTML;
	var options = {

		twitter: {
			text: 'checkout our seller gyan, lol ',
			via: 'Tutorialzine'
		},

		facebook : true,
		googlePlus : true
	};

	var value = $('.socialShare')[1]
	// console.log("value",value)

	$('.socialShare').shareButtons(url, options);


/*

	// You can also share to pinterest and tumblr:

	var options = {

		// Pinterest requires a image to be "pinned"

		pinterest: {
			media: 'http://example.com/image.jpg',
			description: 'My lovely picture'
		},

		// Tumblr takes a name and a description

		tumblr: {
			name: 'jQuery Social Buttons Plugin!',
			description: 'There is a new article on tutorialzine.com page! Check out!'
		}
	};

*/

});
