const apiKey = "BQA9g99DF86es3fOmsZihC5oR6A1PWTwzQej-XQgI27M-Ht4NVp6D4mgSjTXd9icQlRYpMdQCd1bYUG532bkxyxoHxHo9A_x75H36bFgonBq-Y6IjPpkSX_5F0ouatDllyPMQdMsJyEUwEaw9Lg-JJro6GfQeW0kaFI0JmE0BzryJ-v5dDDujONa-5oRUaanReIyt_IbFMt5keSXvte51Cs_uZZtopj1o0sVoB4RXgJV2jrOgxE1uxYTJCzc" // Access token à renouveler toutes les heures 

const Spotify = {
    search(term) {
        return fetch(
            `https://api.spotify.com/v1/search?q=${term}&type=track`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                },
            }

        )
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {

                // console.log(jsonResponse);
                // console.log('jsonResponse is an ' + typeof jsonResponse);
                // console.log(jsonResponse.tracks)
                // console.log(jsonResponse.tracks.items)
                const items = jsonResponse.tracks.items;
                // const arrayFromJson = Array.from(jsonResponse.tracks.items);

                // console.log('arrayFromJson is an ' + typeof arrayFromJson);
                // console.log('arrayFromJson is ' + typeof arrayFromJson);
                // console.log(arrayFromJson);

                // console.log(items[0]);
                const itemsArray = Object.values(items);
                // console.log(typeof itemsArray);
                // console.log(itemsArray);
                // console.log(typeof itemsArray);
                // console.log(itemsArray);

                /* const arrayFromJsonMap = items.map((track, index) => {
                    [index] = {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album,
                        url: track.uri,
                    }
                }) */

                // console.log(arrayFromJsonMap);
                return itemsArray;



                /*
                if (arrayFromJson) { // track est il bien le bon suffixe ?
                    return arrayFromJson.map((track) => ({
                        id: track.id,
                        name: track.name,
                        artist: track.artist,
                        album: track.album,
                        url: track.url,
                    }))
                } */
            })
    },

    save(playlistTitle, playlistTracks) {
        return fetch(
            `https://api.spotify.com/v1/me`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                // console.log(typeof jsonResponse)
                // console.log(jsonResponse);
                const user_id = jsonResponse.id;
                // console.log(user_id);

                // Deuxième fetch (exemple de fetch POST)
                return fetch(
                    `https://api.spotify.com/v1/users/${user_id}/playlists`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${apiKey}`
                        },
                        body: JSON.stringify({
                            "name": `${playlistTitle}`,
                            "description": "New playlist description",
                            "public": false
                        }),
                    }
                )
                    .then((secondResponse) => {
                        // Gérer la réponse du deuxième fetch
                        // if (secondResponse.ok) {
                        // console.log(secondResponse.json);
                        return secondResponse.json();

                        // throw new Error('Request failed man!');
                    }, networkError => console.log(networkError.message)
                    ).then(secondJsonResponse => {
                        // console.log(jsonResponse);
                        // console.log(secondJsonResponse);
                        const playlist_id = secondJsonResponse.id;
                        // console.log(playlist_id);

                        return fetch(
                            `https://api.spotify.com/v1/users/${user_id}/playlists/${playlist_id}/tracks`,
                            {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    Authorization: `Bearer ${apiKey}`
                                },
                                body: JSON.stringify({
                                    "uris": `${playlistTracks}`,
                                    "position": 0
                                }),
                            }
                        )
                    })
                    ;
            })

            .catch((error) => {
                console.error('Erreur lors de la requête man :', error);
            });
    }
}


export default Spotify;



/*


http://localhost:3000/#access_token=

BQCkgDy6I7scm-6-2_O6kisSHV5Y41fDR83_fSgFk2phtbDghTqLI-tvHkGcgSgSgvsIdeNENhjqM5d7egjKrAc99y8haGPNUfVOPIpMK6Oxg174g6XoAfTqSc_htgI7xj5oNwTetlb1TAa0zdtK8VMedeeB1oVZa4PjRk4-1yAhOzIIsGTB31DEynXFdWpG5qatbLo4GbuUNqAmnQKOZJJBkAuaodEa9PimN3nai3Y-w6HX32XPrLABPDlI

&token_type=Bearer&expires_in=3600&state=zHTL5QnoFFY5hZ5Z

http://localhost:3000/#access_token=

BQA9g99DF86es3fOmsZihC5oR6A1PWTwzQej-XQgI27M-Ht4NVp6D4mgSjTXd9icQlRYpMdQCd1bYUG532bkxyxoHxHo9A_x75H36bFgonBq-Y6IjPpkSX_5F0ouatDllyPMQdMsJyEUwEaw9Lg-JJro6GfQeW0kaFI0JmE0BzryJ-v5dDDujONa-5oRUaanReIyt_IbFMt5keSXvte51Cs_uZZtopj1o0sVoB4RXgJV2jrOgxE1uxYTJCzc

&token_type=Bearer&expires_in=3600&state=rveUwozN6Q3FiBeU

*/


/* jusqu'ici ca fonctionne */