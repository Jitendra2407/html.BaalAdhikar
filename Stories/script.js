// Sample video data, replace with your own data
const videoData = [
    {
        title: 'Video 1',
        thumbnail: 'https://example.com/thumbnail1.jpg',
        link: 'https://www.youtube.com/watch?v=VIDEO_ID_1',
    },
    // Add more video entries as needed
];

// Function to create a video card
function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');

    const thumbnail = document.createElement('img');
    thumbnail.classList.add('video-thumbnail');
    thumbnail.src = video.thumbnail;
    thumbnail.alt = video.title;

    const details = document.createElement('div');
    details.classList.add('video-details');
    details.innerHTML = `<h2>${video.title}</h2><a href="${video.link}" target="_blank">Watch Video</a>`;

    videoCard.appendChild(thumbnail);
    videoCard.appendChild(details);

    return videoCard;
}

// Populate video container
const videoContainer = document.getElementById('video-container');
videoData.forEach(video => {
    const videoCard = createVideoCard(video);
    videoContainer.appendChild(videoCard);
});
