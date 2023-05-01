import { proxy } from 'valtio';

const state = proxy({
intro: true,
color: '#EFDB48',
isLogoTexture: true,
isFullTextyre: false,
logoDecal: './threejs.png',
fullDecal: './threejs.png',
});

export default state;