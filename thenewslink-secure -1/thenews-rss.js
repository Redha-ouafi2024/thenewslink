    document.addEventListener('DOMContentLoaded', function() {
                        const newsList = document.getElementById('news-list');

                        fetch('https://rss.app/feeds/v1.1/F7ImE65IjzRoxEva.json')
                                .then(response => response.json())
                                .then(data => {
                                        data.items.forEach(item => {
                                                const listItem = document.createElement('li');
                                                listItem.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
                                                newsList.appendChild(listItem);
                                        });
                                })
                                .catch(error => console.error('Error fetching the news:', error));
                });