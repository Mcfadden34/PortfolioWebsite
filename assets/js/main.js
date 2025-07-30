/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Add your projects here
const projects = {
  1: {
    title: "Final Year Project - Mind & Monitoring",
    description: `
      <p>This is a comprehensive full-stack project developed using <strong>MongoDB</strong>, <strong>Angular</strong>, and <strong>Python</strong>.</p>
      <p>The goal of the project was to build a mental health monitoring platform that allows users to track their mood and mental well-being over time. Key features include:</p>
      <ul>
        <li>User authentication and profile management.</li>
        <li>Real-time mood tracking with dynamic charts.</li>
        <li>Data visualization dashboards for insights.</li>
        <li>Integration with third-party APIs for additional health data.</li>
      </ul>
      <p>The backend uses Python with Flask for building RESTful APIs, and MongoDB serves as the primary database to store user data efficiently. The frontend is a modern Angular application providing a smooth user experience across devices.</p>
      <p><img src="images/UUB.JPG" alt="Mind & Monitoring Project Screenshot" style="max-width:100%; margin-top: 15px; margin-bottom: 15px;"></p>
      <p>Development challenges included ensuring secure data transfer, optimizing database queries, and creating intuitive visualizations that help users easily interpret their mental health status.</p>
      <p>This project showcases my skills in full-stack development, UI/UX design, and working with modern web technologies to solve real-world problems.</p>
      <p>Check the GitHub repository for detailed code and documentation.</p>
    `,
    image: "images/pic01.jpg",
    github: "https://github.com/Mcfadden34/Mcfadden34.github.io/tree/main/project1"
  },
2: {
    title: "St John Ambulance Volunteer Management System",
    description: `
      <p>This full-stack web application was developed for St John Ambulance using <strong>PHP</strong>, <strong>SQL</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>HTML</strong>.</p>
      <p>The system is designed to manage volunteer registrations, track training progress, and schedule shifts efficiently. Key features include:</p>
      <ul>
        <li>Secure login and role-based access control.</li>
        <li>Database-driven volunteer profiles and training records.</li>
        <li>Shift scheduling with conflict detection.</li>
        <li>Responsive design for desktop and mobile users.</li>
      </ul>
      <p><img src="images/UUB.JPG" alt="St John Ambulance Project Screenshot" style="max-width:100%; margin-top: 15px; margin-bottom: 15px;"></p>
      <p>This project provided valuable experience working with relational databases and server-side programming, emphasizing usability and reliability for non-technical users.</p>
      <p>Visit the GitHub repo for source code and documentation.</p>
    `,
    image: "images/pic01.jpg",
    github: "https://github.com/Mcfadden34/Mcfadden34.github.io/tree/main/project2"
  },
  3: {
    title: "Project 3",
    description: `
      <p>This project is currently being developed. Stay tuned for updates!</p>
    `,
    image: "images/pic03.jpg",
    github: "#" // no repo yet
  }, 
  4: {
    title: "Univeristy Project ",
    description: `
      <p>Placeholder for module from Univeristy project </p>
    `,
    image: "images/pic03.jpg",
    github: "#" // no repo yet
  },
  5: {
    title: "Univeristy Project ",
    description: `
      <p>Placeholder for module from Univeristy project </p>
    `,
    image: "images/pic03.jpg",
    github: "#" // no repo yet
  },
  6: {
    title: "Univeristy Project ",
    description: `
      <p>Placeholder for module from Univeristy project </p>
    `,
    image: "images/pic03.jpg",
    github: "#" // no repo yet
  },
};

// Create the GitHub link element once
const modalLink = document.createElement('a');
modalLink.id = 'modalLink';
modalLink.target = '_blank';
modalLink.textContent = 'View on GitHub';
modalLink.style.display = 'inline-block';
modalLink.style.marginTop = '10px';
modalLink.style.color = '#007bff';

// Add click events to each article tile
document.querySelectorAll('.tiles article').forEach(article => {
  article.addEventListener('click', () => {
  const projectId = article.dataset.id;
  const project = projects[projectId];

  if (!project) return;

  modalTitle.textContent = project.title;
  modalDescription.innerHTML = project.description;  // <-- use innerHTML here
  modalImage.src = project.image;
  modalLink.href = project.github;

  if (!modalDescription.contains(modalLink)) {
    modalDescription.appendChild(modalLink);
  }

  modal.style.display = 'flex'; // Show modal
});

});

// Close modal when clicking the X button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content area
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});



})(jQuery);