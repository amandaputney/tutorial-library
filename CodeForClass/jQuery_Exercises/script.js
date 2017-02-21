// // Add class
// $('li').addClass('orange');

// // Remove class
// $('li').removeClass('orange');

// // Add element
// $('ul.officials').after('<li> Kamala Harris </li>')
// $('li:last-child').after('<li> Tim Scott </li>')

// // Remove element
// $('li:contains(Obama)').remove();
// $('li.congress').remove();

// // Click event
// $('h1:contains(Government)').click( function() {
// 	alert('You\'ve clicked me!');
// })

// // Hover
// $('li:contains(Colin)').hover( function() {
// 	$(this).fadeOut(700);
// })

// // Mouseover
// $('li').mouseover( function() {
// 	$(this).css('background-color', 'blue');
// })

// $('li').mouseleave( function() {
// 	$(this).css('background-color', 'white');
// })

// // on Method
// $('button').on( {
// 	click: function() {
// 		alert('Button Clicked');
// 		$('li').animate({
// 			fontSize: '+=80'
// 		}, 300)
// 	},
// 	mouseout: function() {
// 		$('h1').fadeOut(800);
// 	},
// 	mouseenter: function() {
// 		$('h1').fadeIn(300);
// 	}
// })


// $.get( 'URL')
// 	.done( function(data) {
// 		// DO SOMETHING WITH DATA IF SUCCESSFUL
// 	})
// 	.fail( function(err) {
// 		// DO SOMETHING IF THERE IS AN ERROR
// 	})



// // AJAX API CALLS
// $.get( "https://ptabdata.uspto.gov/ptab-api/documents?id=16")
// 	.done(function(data) {
// 		$('#dataDiv').append(data.results[0].documentNumber);
// 		console.log(data);
// 	})
// 	.fail(function(err) {
// 		console.log(err);
// 	});


