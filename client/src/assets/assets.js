export const assets = {
    logo: '/assets/logo.svg',
    product1: '/assets/product1.jpg',
    product2: '/assets/product2.jpg',
    product3: '/assets/product3.jpg',
    product4: '/assets/product4.jpg',
    product5: '/assets/product5.jpg',
    product6: '/assets/product6.jpg',
    product7: '/assets/product7.png',
    model1: '/assets/model1.png',
    model2: '/assets/model2.jpg',
    generated1: '/assets/generated1.png',
    generated2: '/assets/generated2.png',
    generated3: '/assets/generated3.png',
    generated4: '/assets/generated4.png',
    generatedVideo1: '/assets/generatedVideo1.mp4',
    generatedVideo2: '/assets/generatedVideo2.mp4',
};

export default assets;

export const dummyGenerations = [
    {
        id: 'gen_1',
        aspectRatio: '9:16',
        productDescription: 'Sky Colored Trolly Bag',
        productName: 'Trolly Bag',
        targetLength: 5,
        uploadedImages: ['/assets/product7.png', '/assets/model1.png'],
        userId: 'user_1',
        userPrompt: 'Create the video where center of attraction is a trolly bag',
        generatedImage: '/assets/generated1.png',
        generatedVideo: '/assets/generatedVideo1.mp4',
        isGenerating: false,
        isPublished: false,
        createdAt: '2023-03-15T00:00:00.000Z',
        updatedAt: '',
    },
    // ... I'll just keep the structure for now, but use strings for others too if needed
];
