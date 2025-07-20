import Webamp from 'webamp'

const startWebamp = () => {
    if (Webamp.browserIsSupported()) {
        const webamp = new Webamp({
            initialTracks: [{
                metaData: {
                    artist: "Rick Astley",
                    title: "Never Gonna Give You Up"
                },
                url: `${process.env.PUBLIC_URL}/never-gonna-give-you-up.mp3`,
                duration: 213
            },
             {
                    metaData: {
                        artist: "Bill Withers",
                        title: "Lovely Day"
                    },
                    url: `${process.env.PUBLIC_URL}/lovely-day.mp3`,
                    duration: 354
                },
        ]
        });
        webamp.onClose(() => {
            webamp.dispose();
        })

        webamp.renderWhenReady(document.getElementById('winamp-container'));
        
    }
}

export { startWebamp } 