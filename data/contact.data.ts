import { ContactLinksProps } from '@/types';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const CONTACT_LINKS: ContactLinksProps[] = [
    { url: 'https://www.instagram.com/raushan_sinha02/', fontName: FontAwesome6, name: 'instagram', color: '#E1306C' },
    { url: 'https://x.com/84Raushan', fontName: FontAwesome6, name: 'x-twitter', color: '#ffffff' },
    { url: 'mailto:raushankrsinha2004@gmail.com', fontName: MaterialCommunityIcons, name: 'email', color: '#fbab57' },
];