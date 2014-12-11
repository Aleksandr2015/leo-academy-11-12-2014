// Add Active Navigation Class Based on URL
// Source: http://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/

// HTML
//<nav>
//	<ul>
//		<li><a href="/">Home</a></li>
//		<li><a href="/about/">About</a></li>
//		<li><a href="/clients/">Clients</a></li>
//		<li><a href="/contact/">Contact Us</a></li>
//	</ul>
//</nav>

// Script        
//$(function() {
//  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//});