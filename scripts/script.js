document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.image-container');
  let containerId = null;
  const overlay = document.getElementById('overlay');

  function removeFlipClass() {
    imageContainers.forEach(container => {
      container.classList.remove('flip');
    });
  }

  function toggleFlip(container) {
    container.classList.toggle('flip');
  }

  imageContainers.forEach(container => {
    container.addEventListener('click', () => {
      overlay.style.zIndex = '5';
      containerId = container.id;

      // Remove the flip class from all other containers
      removeFlipClass();

      // Toggle the flip class on the clicked container
      toggleFlip(container);

      container.querySelector('img').style.opacity = '0';
      container.style.zIndex = '10';

      if (containerId === 'Q2') {
        container.querySelector('.q2-text').style.display = 'block';
      }

      if (containerId === 'Q3') {
        container.querySelector('.q3-text').style.display = 'block';

        // Translate q3 and store the translation state in sessionStorage
        container.style.transform = 'translate(15em, 0em)';
        sessionStorage.setItem('q3Translated', 'true');
      }
    });

    container.addEventListener('mouseout', () => {
      overlay.style.zIndex = '-1';
      container.querySelector('img').style.opacity = '1';
      container.style.zIndex = '1';

      if (containerId === 'Q2') {
        container.querySelector('.q2-text').style.display = 'none';
      }

      if (containerId === 'Q3') {
        container.querySelector('.q3-text').style.display = 'none';
      }
    });

    // Check if q3 is already translated and set its initial position
    const isQ3Translated = sessionStorage.getItem('q3Translated');
    if (container.id === 'Q3' && isQ3Translated) {
      container.style.transform = 'translate(15em, 0em)';
    }
  });
});

const mijnDiv= document.getElementById('Q2');

// Maak een <a> element aan
const link = document.createElement('a');
link.href = 'https://rileyesther.github.io/your-tribe-profile-card/'; // Voeg de URL toe

// Voeg de tekst en de link toe aan het <a> element
link.appendChild(document.createTextNode('YUH'));

// Voeg het <a> element toe aan het gewenste HTML-element
mijnDiv.appendChild(link);

// Voeg eventueel JavaScript-handlers toe voor linkgedrag (bijv. click event)
link.addEventListener('click', function(event) {
  // Voeg hier je gewenste gedrag toe, bijv. navigeren naar de link
  // event.preventDefault(); // Dit voorkomt standaardgedrag van de link
  // window.location.href = link.href; // Navigeer naar de link
});

