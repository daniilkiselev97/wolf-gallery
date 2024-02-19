import { WebElArtGallery } from './WebElArtGallery';

function App() {
    return (
        <div className="App">
            <WebElArtGallery
                photos={[
                    {
                        id: 1,
                        src: '/photos/1.jpeg',
                        preview: 'photos/preview/1.jpeg',
                        description: 'Norway 1',
                    },
                    {
                        id: 2,
                        src: '/photos/2.jpeg',
                        preview: 'photos/preview/2.jpeg',
                        description: 'Norway 2',
                    },
                    {
                        id: 3,
                        src: '/photos/3.jpeg',
                        preview: 'photos/preview/3.jpeg',
                        description: 'Norway 3',
                    },
                    {
                        id: 4,
                        src: '/photos/4.jpeg',
                        preview: 'photos/preview/4.jpeg',
                        description: 'Norway 4',
                    },
                    {
                        id: 5,
                        src: '/photos/5.jpeg',
                        preview: 'photos/preview/5.jpeg',
                        description: 'Norway 5',
                    },
                    {
                        id: 6,
                        src: '/photos/6.jpeg',
                        preview: 'photos/preview/6.jpeg',
                        description: 'Norway 6',
                    },
                    {
                        id: 7,
                        src: '/photos/7.jpeg',
                        preview: 'photos/preview/7.jpeg',
                        description: 'Norway 7',
                    },
                ]}
            />
        </div>
    );
}

export default App;
