import { FAQProps, FeatureGuideProps } from "./docs.types";

//todo: Data for Features -
export const FEATURES_GUIDE: FeatureGuideProps[] = [
    {
        title: 'Daily News Feed',
        description: 'Browse the latest astronomy and space discoveries every day.',
    },

    {
        title: 'HD Space Images',
        description: 'View high quality cosmic imagery powered by NASA APIs.',
    },

    {
        title: 'Rocket Launch Updates',
        description: 'Track upcoming launches and mission details.',
    },

    {
        title: 'Search Features',
        description: 'Search planets, galaxies, and space missions easily.',
    },
]


//todo: Data - FAQ
export const FAQ_DATA: FAQProps[] = [
    {
        question: 'How often is data updated?',
        answer: 'Space news and imagery are updated daily.',
    },

    {
        question: 'Does the app require internet?',
        answer: 'Yes, internet is required for fetching latest space data.',
    },

    {
        question: 'Which APIs are used?',
        answer: 'The app uses NASA public APIs for astronomy data.',
    },
]